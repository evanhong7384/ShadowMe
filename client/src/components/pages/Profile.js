import React, {useState, useEffect} from "react";
import { GoogleOAuthProvider, GoogleLogin, googleLogout } from "@react-oauth/google";
//const User = require("./models/user");
import "../../utilities.css";
import "./Profile.css";
import { post, get } from "../../utilities";
//import "./Skeleton.css";

//TODO: REPLACE WITH YOUR OWN CLIENT_ID
const GOOGLE_CLIENT_ID = "739879686608-gmd61blddrnga246qtek7129330hpt7j.apps.googleusercontent.com";

          // get("/api/whoami").then(response=>{
          //   document.getElementById('user_name').innerHTML = response.name
          //   })
          //   get("/api/whoami").then(response=>{
          //     document.getElementById('institution').innerHTML = response.institution
          //     })
          //     get("/api/whoami").then(response=>{
          //       document.getElementById('resume').innerHTML = response.resume
          //       })
          //       get("/api/whoami").then(response=>{
          //         document.getElementById('linkedin').innerHTML = response.linkedin
          //         })
          //         get("/api/whoami").then(response=>{
          //           document.getElementById('location').innerHTML = response.location
          //           })
          //           get("/api/whoami").then(response=>{
          //             document.getElementById('bio').innerHTML = response.bio
          //             })


  
  


const Profile = (userId, handleLogin, handleLogout) => {

  const [inst, setInst] = useState("");
  const [Name, setName] = useState("");
  const [Resume, setResume] = useState("")
  const [Bio, setBio] = useState("")
  const [Location, setLocation] = useState("")
  const [LI, setLI] = useState("")
  

  useEffect(() => {
    console.log("HIII");
    get("/api/retrieve").then(response => {
      console.log(response);
      setInst(response.institution);
      setName(response.name);
      setResume(response.resume);
      setBio(response.bio);
      setLocation(response.location);
      setLI(response.linkedin);
      // document.getElementById('institution').innerHTML = response.institution;
    })
  }, []);

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
      
      <label htmlFor="Name">Name:
        {Name}
          
      </label>
       

        <label htmlFor="Institutions">Institutions:
        {inst}
        </label>

        <label htmlFor="Resume">Resume:
 
         {Resume} 
     
        </label>

        <label htmlFor="Linkedin">Linkedin:
  
          {LI}
   
        </label>

        <label htmlFor="Location">Location:
 
          {Location}
   
        </label>

        <label htmlFor="Bio">Bio:
    
          {Bio}
     
        </label>
        
        
    </div>
    </form>
    </GoogleOAuthProvider>
    

    


    
  );
};

export default Profile;
