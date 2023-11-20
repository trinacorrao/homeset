// const mongoose = require("mongoose");
// const ObjectId = mongoose.Types.ObjectId;

// Assuming you have a Mongoose model for your collection
// const Task = require("../models/task");
let checkServer;
// Function to check if an ID exists in the collection
async function checkIfIdExists(idToCheck, ObjectId, Task) {
  console.log("length", idToCheck.length);
  if (!(idToCheck.length === 12 || idToCheck.length === 24)) {
    console.log("I'm in the checkid function1!", idToCheck.length);
    return false;
  }
  console.log("I'm in the checkid function2!", idToCheck);
  try {
    //   // Convert the ID to a Mongoose ObjectId
    // const objectIdToCheck = new ObjectId(idToCheck);
    checkServer = await Task.findAll({});

    //   // Use Mongoose's findOne method to search for the ID in the collection
    // const foundDocument = await Task.findOne({ _id: objectIdToCheck });
    // console.log("foundDocument", foundDocument)
    //   // Check if a document with the specified ID exists
    //   if (foundDocument) {
    //     console.log("23 hello!")
    //     return true; // The ID exists in the collection
    //   } else {
    //     console.log("26 goodbye");
    //     return false; // The ID does not exist in the collection
    //   }
  } catch (error) {
    // console.error('Error:', error);
    // return false; // An error occurred while checking
  }
  console.log("35", checkServer);

  return true;
}

module.exports = checkIfIdExists;

console.log(checkIfIdExists("6545107dee3c5c12cefc049e"));
