// All handlers needed for the application

"use strict";

const { MongoClient } = require("mongodb");

require("dotenv").config();
const { MONGO_URI } = process.env;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

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

// GET specific user // 
const getUser = async (req, res) => {
    const client = new MongoClient(MONGO_URI, options);
    try {
      await client.connect();
      const db = client.db("Fetch_Database");
      const id = req.params.userId
      const result = await db.collection("users").findOne({id});
      res.status(200).json({
        status: 200,
        data: result,
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

// POST to add new user //
const addNewUser = async (req, res) => {
    const client = new MongoClient(MONGO_URI, options);

    try {
      await client.connect();
console.log(req.body)
      const { ownerName, dogName, avatarSrc, location, joined } = req.body; 
      const newUser = { ownerName, dogName, avatarSrc, location, joined}; 


      const db = client.db("Fetch_Database");
      const result = await db.collection("users").insertOne(newUser);
      
      res.status(201).json({
        status: 201, 
        data: result,
        message: "New user successfully added"
      }); 
    } catch (err) {
        console.log(err)
        res.status(400).json({
            status: 400, 
            message: "User could not be added"
        });
    } finally {
        client.close(); 
    }
  }; 

// PATCH to update an existing user // 
// const updateExistingUser = async (req, res) => {
//     const client = new MongoClient(MONGO_URI, options);
//     const id = req.params.userId; 
//     try {
//         await client.connect(); 
//         const db = client.db("Fetch_Database"); 
//     } 
// }


module.exports = {
  getUsers,
  getUser, 
  addNewUser
};