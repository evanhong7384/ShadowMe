/*
|--------------------------------------------------------------------------
| api.js -- server routes
|--------------------------------------------------------------------------
|
| This file defines the routes for your server.
|
*/

const express = require("express");

// import models so we can interact with the database
const User = require("./models/user");

// import authentication library
const auth = require("./auth");

// api endpoints: all these paths will be prefixed with "/api/"
const router = express.Router();



//initialize socket
const socketManager = require("./server-socket");

router.all("*", (req, res) => {
  res.send("welcome to the interests page basic!");
});

module.exports = router;
