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
const user = require("./models/user");

router.post("/login", auth.login);
router.post("/logout", auth.logout);
router.get("/whoami", (req, res) => {
  if (!req.user) {
    // not logged in
    return res.send({});
  }

  res.send(req.user);
});

router.post("/initsocket", (req, res) => {
  // do nothing if user not logged in
  if (req.user)
    socketManager.addUser(req.user, socketManager.getSocketFromSocketID(req.body.socketid));
  res.send({});
});
router.post("/pfedit", auth.ensureLoggedIn, (req, res)=>{
  console.log(req.user.googleid)
  /*
  const newUser= new User( {
    name: req.body.name,
    googleid: req.user.googleid,
    instution: req.body.instution,
    resume: req.body.resume,
    linkedin: req.body.linkedin,
    location: req.body.location,
    bio: req.body.bio,
    
  });
  
  newUser.save();
  res.send(JSON.stringify({word:'submitted'}));
  */
 get("/api/whoami").then(response =>{
  alert(response.name);
  response.user.name=req.body.name
 response.user.institution=req.body.institution
 response.user.resume=req.body.resume
 response.user.linkedin=req.body.linkedin
 })
 
 res.send(JSON.stringify({word:'submitted'}));

});
// |------------------------------|
// | write your API methods below!|
// |------------------------------|

// anything else falls to this "not found" case
router.all("*", (req, res) => {
  console.log(`API route not found: ${req.method} ${req.url}`);
  res.status(404).send({ msg: "API route not found" });
});

module.exports = router;
