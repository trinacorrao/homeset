const express = require("express");
const {
  rejectUnauthenticated,
} = require("../modules/authentication-middleware");
const Task = require("../models/task");

// const router = express.Router();
const app = express();
const router = express.Router();
console.log("in users router");

// Define your routes and endpoints
router.get("/", async (req, res) => {
  // Get all tasks
  const task = await Task.find();
  res.json(task);
});

router.post("/", async (req, res) => {
  // Create a new task
  const newTask = new Task({
    task_name: req.body.task_name,
    task_doer: req.body.task_doer,
    ini_date: req.body.ini_date,
    frequency: req.body.frequency,
    completed: [],
    reminder: req.body.reminder,
    reminder: req.body.reminder,
  });
  await newTask.save();
  console.log(res);
  res.json(newTask);
});

module.exports = router;
