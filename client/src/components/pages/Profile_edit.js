import React, {useState, useEffect} from "react";
import { GoogleOAuthProvider, GoogleLogin, googleLogout } from "@react-oauth/google";
//const User = require("./models/user");
import "../../utilities.css";
import "./Profile_edit.css";

import { post,get } from "../../utilities";

//import "./Skeleton.css";

//TODO: REPLACE WITH YOUR OWN CLIENT_ID
const GOOGLE_CLIENT_ID = "739879686608-gmd61blddrnga246qtek7129330hpt7j.apps.googleusercontent.com";


const saveInfo = () => 
  {
    //alert('saveInfo()');
    //alert(document.getElementById("Name").value);
    post(
      "/api/pfedit",
      {
        name: document.getElementById("Name").value,
        institution: document.getElementById("Institutions").value,
        resume: document.getElementById("Resume").value,
        linkedin: document.getElementById("Linkedin").value,
        location: document.getElementById("Location").value,
        bio: document.getElementById("Bio").value
      }
    ).then(
      (response)=> {
        //alert(response);
      }
    ).catch(
      () => {
        //alert('fail');
      }
    )   
  }

const Profile_edit = (userId, handleLogin, handleLogout) => {

  const [Name, setName] = useState("");
  const [Inst, setInst] = useState("");
  const [Resume, setResume] = useState("")
  const [Bio, setBio] = useState("")
  const [Location, setLocation] = useState("")
  const [LI, setLI] = useState("")
  

  useEffect(() => {
    console.log("HIII");
    get("/api/retrieve").then(response => {
      console.log(response);
      /*
      setLI(response.linkedin);
      // document.getElementById('institution').innerHTML = response.institution;
      */
      //alert(response.name);
      //Name = response.name;
      setName(response.name);
      setInst(response.institution);
      setResume(response.resume);
      setBio(response.bio);
      setLocation(response.location);
      setLI(response.linkedin);
    })
  }, []);

	//const Name = 'Joe';
	
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
            <input type="text" id="Name" name="Name" defaultValue={Name}/>
        </label>

        <label htmlFor="Institutions">Institutions:
            <input type="text" id="Institutions" name="Institution" defaultValue={Inst}/>
        </label>

        <label htmlFor="Resume">Resume:
            <input type="text" id="Resume" accept="Resume/pdf" name="Resume" defaultValue={Resume}/>
        </label>

        <label htmlFor="Linkedin">Linkedin:
            <input type="text" id="Linkedin" name="Linkedin" defaultValue={LI}/>
        </label>

        <label htmlFor="Location">Location:
            <input type="text" id="Location" name="Location" defaultValue={Location}/>
        </label>

        <label htmlFor="Bio">Bio:
            <input type="text" id="Bio" name="Bio" defaultValue={Bio}/>
        </label>
        
        <div> 
          <button id='submit' type="button" onClick={saveInfo}>Save</button>
        </div>
    </div>
    </form>
    </GoogleOAuthProvider>
  );
};

export default Profile_edit;
