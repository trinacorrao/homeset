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
  let reqBodyKeys = Object.keys(req.body);
  // Check if required data is included in request
  if (['task_name', 'task_doer', 'ini_date', 'frequency', 'completed', 'reminder', 'notes'].every((str) => reqBodyKeys.includes(str))) {
    console.log("all keys included!")
  } else {
    console.log('missing keys')
    res.send(500);
    return;
  }
  // Check if data conforms to correct types

  // Create a new task
  const newTask = new Task({
    task_name: req.body.task_name,
    task_doer: req.body.task_doer,
    ini_date: req.body.ini_date,
    frequency: req.body.frequency,
    completed: [],
    reminder: req.body.reminder,
    notes: req.body.reminder,
  });
  await newTask.save();
  res.status(201).json(newTask);
});

module.exports = router;
