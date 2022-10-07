// All handlers needed for the application

const { v4: uuidv4 } = require("uuid");

("use strict");

const { MongoClient } = require("mongodb");

require("dotenv").config();
const { MONGO_URI } = process.env;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

//// USER HANDLERS ////

// GET all users //
const getUsers = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  try {
    await client.connect();
    const db = client.db("Fetch_Database");
    const result = await db.collection("users").find().toArray();
    res.status(200).json({
      status: 200,
      data: result,
      message: "Users found",
    });
  } catch (err) {
    res.status(400).json({
      status: 400,
      message: "No users found",
    });
  } finally {
    client.close();
  }
};

// GET specific user by email //
const getUser = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  console.log(req.body);
  if (!req.body.email || !req.body.name) {
    return res
      .status(400)
      .json({ status: 400, message: "Missing information" });
  }
  const newUser = {
    id: uuidv4(),
    email: req.body.email,
    ownerName: req.body.name,
    dogName: "",
    location: "",
    joined: "",
    playdates: [],
    avatarSrc: "",
  };

  try {
    await client.connect();
    const db = client.db("Fetch_Database");
    const email = req.body.email;
    const result = await db.collection("users").findOne({ email });
    if (result) {
      res.status(200).json({
        status: 200,
        data: result,
        message: "Users found",
      });
    } else {
      const newUserObject = await db.collection("users").insertOne(newUser);
      res.status(200).json({
        status: 200,
        data: newUserObject,
        message: "Users found",
      });
    }
  } catch (err) {
    res.status(400).json({
      status: 400,
      message: "User not found",
    });
  } finally {
    client.close();
  }
};

// GET user by Id //
const getUserById = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);

  const { userId } = req.params;
  console.log(userId);

  try {
    await client.connect();
    const db = client.db("Fetch_Database");

    const result = await db.collection("users").findOne({ id: userId });
    if (result) {
      res.status(200).json({
        status: 200,
        data: result,
        message: "Users found",
      });
    } else {
      res.status(404).json({
        status: 404,
        message: "User not found",
      });
    }
  } catch (err) {
    res.status(500).json({
      status: 500,
      message: "User not found",
    });
  } finally {
    client.close();
  }
};

// POST to add new user //
const addNewUser = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  if (!req.body) return;
  try {
    await client.connect();
    const newUser = req.body;
    newUser.id = uuidv4();

    const db = client.db("Fetch_Database");

    const users = await db
      .collection("users")
      .findOne({ email: newUser.email });

    console.log(users);
    if (users) {
      return res.status(200).json({
        status: 200,
        message: "User already exists",
        email: newUser.email,
        userFound: users,
      });
    } else {
      const result = await db.collection("users").insertOne(newUser);
      res.status(201).json({
        status: 201,
        data: result,
        message: "New user successfully added",
        email: newUser.email,
      });
    }
  } catch (err) {
    console.log(err);
    res.status(400).json({
      status: 400,
      message: "User could not be added",
    });
  } finally {
    client.close();
  }
};

// PATCH to update an existing user //
const updateExistingUser = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  const id = req.params.userId;
  const { ownerName, dogName, location, email } = req.body;
  console.log(req.body);
  try {
    await client.connect();
    const db = client.db("Fetch_Database");
    console.log(req.body);
    const existingUser = await db.collection("users").findOne({ id });

    const updatedExistingUser = {
      $set: {
        ownerName: ownerName || existingUser.ownerName,
        dogName: dogName || existingUser.dogName,
        location: location || existingUser.location,
      },
    };
    await db.collection("users").updateOne({ id }, updatedExistingUser);
    res
      .status(200)
      .json({ status: 200, message: "User profile successfully updated" });
  } catch (err) {
    res
      .status(400)
      .json({ status: 400, message: "User profile could not be updated" });
  } finally {
    client.close();
  }
};

//// PLAYDATE HANDLERS ////

// GET playdates for a sepcific user
const getPlaydatesByUser = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  const { userEmail } = req.params;

  try {
    await client.connect();
    const db = client.db("Fetch_Database");
    const result = await db.collection("users").findOne({ email: userEmail });

    res.status(200).json({
      status: 200,
      data: result.playdates,
      message: "Users found",
    });
  } catch (err) {
    res.status(400).json({
      status: 400,
      message: "User not found",
    });
  } finally {
    client.close();
  }
};

// PATCH to request new playdate to user //
const updatePlaydate = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  const { email, status, id, name, requestType, } = req.body;

  try {
    await client.connect();
    const db = client.db("Fetch_Database");
    if (requestType === "request") {
      const updateRequest = await db
        .collection("users")
        .updateOne(
          { id },
          { $push: { playdates: { "requested-by": email, name, status } } }
        )
      res.status(201).json({
        status: 201,
        message: "New playdate successfully requested",
      });
    }
    if (requestType === "cancel") {
      const result = await db
        .collection("users")
        .updateOne(
          { id },
          { $pull: { playdates: { "requested-by": email, status } } }
        );

      res.status(200).json({
        status: 200,
        data: result,
        message: "Playdate successfully cancelled",
      });
    }
    if (requestType === "accept") {
      const result = await db
        .collection("users")
        .updateOne(
          { id, "playdates.requested-by": email },
          { $set: { "playdates.$.status": "Accepted" } }
        );

      res.status(200).json({
        status: 200,
        data: result,
        message: "Playdate successfully accepted",
      });
    }
  } catch (err) {
    console.log(err);
    res.status(400).json({
      status: 400,
      message: "Playdate could not be updated",
    });
  } finally {
    client.close();
  }
};

//// STATUS HANDLERS ////

// GET all statuses //
const getStatuses = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  try {
    await client.connect();
    const db = client.db("Fetch_Database");
    const result = await db.collection("statuses").find().toArray();
    res.status(200).json({
      status: 200,
      data: result,
      message: "Statuses found",
    });
  } catch (err) {
    res.status(400).json({
      status: 400,
      message: "No statuses found",
    });
  } finally {
    client.close();
  }
};

// GET a single status //
const getStatus = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  try {
    await client.connect();
    const db = client.db("Fetch_Database");
    const id = req.params.statusId;
    const result = await db.collection("statuses").findOne({ id });
    res.status(200).json({
      status: 200,
      data: result,
      message: "Status found",
    });
  } catch (err) {
    res.status(400).json({
      status: 400,
      message: "Status not found",
    });
  } finally {
    client.close();
  }
};

// POST a new status //
const addNewStatus = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);

  try {
    await client.connect();
    console.log(req.body);
    const { id, timestamp, status } = req.body;

    const db = client.db("Fetch_Database");
    const result = await db
      .collection("users")
      .updateOne(
        { id },
        { $push: { status: { $each: [{ status, timestamp }], $position: 0 } } }
      );

    console.log(result);
    res.status(201).json({
      status: 201,
      data: result,
      message: "New status successfully added",
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      status: 400,
      message: "New status could not be added",
    });
  } finally {
    client.close();
  }
};

module.exports = {
  getUsers,
  getUser,
  addNewUser,
  updateExistingUser,
  getStatuses,
  getStatus,
  addNewStatus,
  getUserById,
  getPlaydatesByUser,
  updatePlaydate,
};
