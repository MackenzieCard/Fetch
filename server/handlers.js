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

  const newUser = {
    id: uuidv4(),
    email: req.body.email,
    ownerName: req.body.name,
    dogName: "",
    location: "",
    joined: "",
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
  console.log("hdhdjfhdj");
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
    // console.log(req.body);
    const newUser = req.body;
    // newUser hardcoded info for each new user input
    newUser.id = uuidv4();
    // newUser.ownerName = "Mackenzie";
    // newUser.dogName = "Pogo";
    // newUser.location = "Montreal",
    // newUser.joined = "September 20, 2022"
    // newUser.avatarSrc = "./PROJECT-PIC-MACKENZIE.jpg"
    const db = client.db("Fetch_Database");
    // const users = await db.collection("users").find().toArray();
    const users = await db
      .collection("users")
      .findOne({ email: newUser.email });
    // const userInDb = users.find((user) => {
    //   return user.email === req.body.email;
    // });
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

  try {
    await client.connect();
    const db = client.db("Fetch_Database");
    console.log(req.body);
    const existingUser = await db.collection("users").findOne({ id });

    const updatedExistingUser = {
      $set: {
        ownerName: req.body.ownerName
          ? req.body.ownerName
          : existingUser.ownerName,
        dogName: req.body.dogName ? req.body.dogName : existingUser.dogName,
        location: req.body.location ? req.body.location : existingUser.location,
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
    // const newStatus = { timestamp, status };

    const db = client.db("Fetch_Database");
    const result = await db
      .collection("users")
      .updateOne(
        { id },
        { $push: { status: { $each:[{status, timestamp}], $position: 0 } } }
      )
      // .findOneAndUpdate(
      //   { id },
      //   { $addToSet: { status: newStatus } },
      //   { returnDocument: "after" }
      // );
console.log(result)
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
};
