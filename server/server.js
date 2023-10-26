const express = require('express');
const mongoose = require("mongoose");
const uri = require("./atlas_uri");
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

const sessionMiddleware = require('./modules/session-middleware');
// const passport = require('./strategies/user.strategy');

// Route includes
const userAtlasRouter = require('./routes/userAtlas.router.js');
const userTaskRouter = require('./routes/taskAtlas.router.js')

// Test route
const testRoute = require('./routes/testRoute.router')

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Passport Session Configuration //
app.use(sessionMiddleware);

// Connect to the MongoDB Atlas database
mongoose.connect(
  `${uri}`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

// // start up passport sessions
// app.use(passport.initialize());
// app.use(passport.session());

/* Routes */
app.use('/api/atlas/user', userAtlasRouter);
app.use('/api/atlas/task', userTaskRouter);

/* test route*/
app.use('/api/data', testRoute);

// Serve static files
app.use(express.static('build'));

// App Set //
const PORT = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
