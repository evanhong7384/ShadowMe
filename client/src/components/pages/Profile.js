import React from "react";
import { GoogleOAuthProvider, GoogleLogin, googleLogout } from "@react-oauth/google";
//const User = require("./models/user");
import "../../utilities.css";
import "./Profile.css";
import { post,get } from "../../utilities";
//import "./Skeleton.css";

//TODO: REPLACE WITH YOUR OWN CLIENT_ID
const GOOGLE_CLIENT_ID = "739879686608-gmd61blddrnga246qtek7129330hpt7j.apps.googleusercontent.com";

          get("/api/whoami").then(response=>{
            document.getElementById('user_name').innerHTML = response.name
            })
            get("/api/whoami").then(response=>{
              document.getElementById('institution').innerHTML = response.institution
              })
              get("/api/whoami").then(response=>{
                document.getElementById('resume').innerHTML = response.resume
                })
                get("/api/whoami").then(response=>{
                  document.getElementById('linkedin').innerHTML = response.linkedin
                  })
                  get("/api/whoami").then(response=>{
                    document.getElementById('location').innerHTML = response.location
                    })
                    get("/api/whoami").then(response=>{
                      document.getElementById('bio').innerHTML = response.bio
                      })


  
  


const Profile = (userId, handleLogin, handleLogout) => {
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
    <form>
    <div className="personal_info">
      
      <label for="Name">Name:
      <p id='user_name'>
        
          
        </p>
      </label>
       

        <label for="Institutions">Institutions:
        <p id='institution'>
    
        </p>
        </label>

        <label for="Resume">Resume:
        <p id='resume'>
          
        </p>
        </label>

        <label for="Linkedin">Linkedin:
        <p id='linkedin'>
          
        </p>
        </label>

        <label for="Location">Location:
        <p id='location'>
          
        </p>
        </label>

        <label for="Bio">Bio:
        <p id='bio'>
          
        </p>
        </label>
        
        
    </div>
    </form>
    </GoogleOAuthProvider>
    

    


    
  );
};

export default Profile;
