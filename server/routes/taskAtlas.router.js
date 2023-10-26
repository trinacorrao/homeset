const express = require("express");
const {
  rejectUnauthenticated,
} = require("../modules/authentication-middleware");
const Task = require ("../models/task")

// const router = express.Router();
const app = express();
const router = express.Router();
console.log("in users router")

// Define your routes and endpoints
router.get("/", async (req, res) => {
  // Get all users
  const task = await Task.find();
  res.json(task);
});

module.exports = router