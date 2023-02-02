import React from "react";
import { GoogleOAuthProvider, GoogleLogin, googleLogout } from "@react-oauth/google";

import "../../utilities.css";
import "./Register.css";

//TODO: REPLACE WITH YOUR OWN CLIENT_ID
const GOOGLE_CLIENT_ID = "739879686608-gmd61blddrnga246qtek7129330hpt7j.apps.googleusercontent.com";

const Register = ({ userId, handleLogin, handleLogout }) => {
  return (
    <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
      {userId ? (
        <button
          onClick={() => {
            googleLogout();
            handleLogout();
          }}
        >
          Logout
        </button>
      ) : (
        <GoogleLogin onSuccess={handleLogin} onError={(err) => console.log(err)} />
      )}
    <h1>Welcome to ShadowMe!</h1>
    <div className = "introduction">
      The purpose of this website is connect doctors and premed students. 
    </div>
    <div className = "introduction">
    Students, complete your profile and find doctors who practice in your field of interest! 
    </div>
    <div className = "introduction">
    Doctors, complete your profile and find students who are excited about helping you with clinical research, medical records,and more! 
    </div>
    <div className = "introduction">
    This website provides an opportunity to message each other directly and coordinate times to meet.
    </div>
    </GoogleOAuthProvider>
  );
};

export default Register;
