const express = require("express");
const {
  rejectUnauthenticated,
} = require("../modules/authentication-middleware");
const User = require ("../models/user")

// const router = express.Router();
const app = express();
const router = express.Router();
console.log("in users router")

// Define your routes and endpoints
router.get("/", async (req, res) => {
  // Get all users
  const users = await User.find();
  res.json(users);
});

router.post("/", async (req, res) => {
  // Create a new user
  const newUser = new User({
    username: req.body.username,
    password: req.body.password,
  });
  await newUser.save();
  res.json(newUser);
});

router.put("/:id", async (req, res) => {
  // Update a user by ID
  const user = await User.findById(req.params.id);
  user.name = req.body.name;
  user.age = req.body.age;
  await user.save();
  res.json(user);
});

router.delete("/:id", async (req, res) => {
  // Delete a user by ID
  await User.findByIdAndDelete(req.params.id);
  res.sendStatus(204);
});

module.exports = router