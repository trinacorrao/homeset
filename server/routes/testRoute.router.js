const express = require("express");
const {
  rejectUnauthenticated,
} = require("../modules/authentication-middleware");

// const router = express.Router();
const app = express();
const router = express.Router();
console.log("in users router")

router.get('/', (req, res) => {
  res.json({ message: 'Hello, World!' });
});

module.exports = router