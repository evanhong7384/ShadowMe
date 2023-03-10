import React, { useState, useEffect } from "react";
import { Router } from "@reach/router";
import jwt_decode from "jwt-decode";

import NotFound from "./pages/NotFound.js";
import Skeleton from "./pages/Skeleton.js";
import Register from "./pages/Register.js";
import Profile_edit from "./pages/Profile_edit.js";
import Profile from "./pages/Profile.js";

import Interests from "./pages/Interests.js";
import NavBar   from "./modules/NavBar.js";

import Logout from "./pages/Logout.js";
import Messages from "./pages/Messages.js";
import Search from "./pages/Search.js";

import "../utilities.css";

import { socket } from "../client-socket.js";

import { get, post } from "../utilities";

/**
 * Define the "App" component
 */
const App = () => {
  const [userId, setUserId] = useState(undefined);

  useEffect(() => {
    get("/api/whoami").then((user) => {
      if (user._id) {
        // they are registed in the database, and currently logged in.
        setUserId(user._id);
      }
    });
  }, []);

  const handleLogin = (credentialResponse) => {
    const userToken = credentialResponse.credential;
    const decodedCredential = jwt_decode(userToken);
    console.log(`Logged in as ${decodedCredential.name}`);
    post("/api/login", { token: userToken }).then((user) => {
      setUserId(user._id);
      post("/api/initsocket", { socketid: socket.id });
    });
  };

  const handleLogout = () => {
    setUserId(undefined);
    post("/api/logout");
  };

  return (
    <>
      <NavBar />
      <Router>
        <Register path="/" handleLogin={handleLogin} handleLogout={handleLogout} userId={userId} />
        <Profile_edit path="/profile_edit"/>
        <Profile path="/profile"/>
        <Search path="/search" handleLogin={handleLogin} handleLogout={handleLogout} userId={userId}/>
        <Interests path="/interests" handleLogin={handleLogin} handleLogout={handleLogout} userId={userId}/>
        <Logout path="/logout" handleLogin={handleLogin} handleLogout={handleLogout} userId={userId}/>
        <Messages path="/messages" handleLogin={handleLogin} handleLogout={handleLogout} userId={userId}/>
        <NotFound default />
      </Router>
    </>
  );
};

export default App;
