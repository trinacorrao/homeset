const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
    task_name: String,
    task_doer: String,
    ini_date: Date,
    frequency: Number,
    completed: [Date],
    reminder: String,
    notes: String,
});

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;
