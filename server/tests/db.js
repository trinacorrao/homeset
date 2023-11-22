// code referenced from:
// https://dev.to/paulasantamaria/testing-node-js-mongoose-with-an-in-memory-database-32np
// https://stackoverflow.com/questions/67699988/mongo-memory-server-is-not-starting-at-all

const mongoose = require("mongoose");
const { MongoMemoryServer } = require("mongodb-memory-server");
const Task = require("../models/task");
let mongod;
// tests/db-handler.js

/**
 * Connect to the in-memory database.
 */
module.exports.connect = async () => {
  mongod = await MongoMemoryServer.create();
  const uri = mongod.getUri();

  const mongooseOpts = {};

  await mongoose.connect(uri, mongooseOpts);
  await seedDatabase();
};

/**
 * Drop database, close the connection and stop mongod.
 */
module.exports.closeDatabase = async () => {
  await mongoose.connection.dropDatabase();
  await mongoose.connection.close();
  await mongod.stop();
};

/**
 * Remove all the data for all db collections.
 */
module.exports.clearDatabase = async () => {
  const collections = mongoose.connection.collections;

  for (const key in collections) {
    const collection = collections[key];
    await collection.deleteMany();
  }
};

async function seedDatabase() {
  console.log(4646);
  let collectionData = {
    task_name: "String",
    task_doer: "String",
    ini_date: "Date",
    frequency: "Number",
    completed: ["Date"],
    reminder: "String",
    notes: "String",
  };
  try {
    await Task.insertMany(collectionData);
    let tasks = await Task.findAll();
    console.log("tasks", tasks);
  } catch {
    (err) => console.error(err);
  }
  
}
