import React from "react";
import { useState, useEffect } from "react";
import { GoogleOAuthProvider, GoogleLogin, googleLogout } from "@react-oauth/google";

import { medicalFields, medicalTasks} from "./MedicalFields.js";
import "./Medicalfieldsstyles.css";

import { post,get } from "../../utilities";

const GOOGLE_CLIENT_ID = "739879686608-gmd61blddrnga246qtek7129330hpt7j.apps.googleusercontent.com";

const saveInfo = () => {
    //alert('saveInfo()');
    //alert(document.getElementById("Name").value);
    post(
      "/api/interestsedit",
      {
        medicalFields1: document.getElementById(`checkbox-fields-1`).value,
        medicalFields2: document.getElementById(`checkbox-fields-2`).value,
        medicalFields3: document.getElementById(`checkbox-fields-3`).value,
        medicalFields4: document.getElementById(`checkbox-fields-4`).value,
        medicalFields5: document.getElementById(`checkbox-fields-5`).value,
      }
    ).then(
      (response)=> {
console.log("Interests Posted")      }
    ).catch(
      () => {
        //alert('fail');
        console.log("Interests Failed to post")
      }
    )   
  };

const Interests = (userId, handleLogin, handleLogout) => {
  useEffect(() => {
    get("/api/retrieve").then(response => {
      console.log(response);
      /*
      setLI(response.linkedin);
      // document.getElementById('institution').innerHTML = response.institution;
      */
      //alert(response.name);
      //Name = response.name;
      setCheckedStateFields(response.medicalFields);
    })
  }, []);

  const [checkedStateFields, setCheckedStateFields] = useState(
    new Array(medicalFields.length).fill(false)
  );


  const [checkedStateTasks, setCheckedStateTasks] = useState(
    new Array(medicalTasks.length).fill(false)
  );

  const handleOnChangeFields = (position) => {
    const updatedCheckedStateFields = checkedStateFields.map((item, index) =>
      index === position ? !item : item
      );
    setCheckedStateFields(updatedCheckedStateFields);
    console.log(checkedStateFields);
  };

  const handleOnChangeTasks = (position) => {
    const updatedCheckedStateTasks = checkedStateTasks.map((item, index) =>
      index === position ? !item : item
    );
    setCheckedStateTasks(updatedCheckedStateTasks);
  };

  
  

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
    <>
      <div className="fields">
        <h3>What Fields Are You Interested In?</h3>
        <ul className="medicalField-list">
          {medicalFields.map(({ name }, index) => {
            return (
              <li key={index}>
                <input 
                  type="checkbox"
                  id={`checkbox-fields-${index}`}
                  name={name}
                  value={name}
                  checked={checkedStateFields[index]}
                  onChange={() => handleOnChangeFields(index)}
                />
                <label htmlFor={`checkbox-fields-${index}`}>{name}</label>
              </li>
            )
          })}
        </ul>
        <button id='submit' type="button" onClick={saveInfo}>Save</button>

      </div>
      <div className="interests">
        <h3>What Tasks Are You Most Interested In Helping With?</h3>
        <ul className="medicalTask-list">
          {medicalTasks.map(({ name }, index) => {
            return (
              <li key={index}>
                <div className="medicalTask-list-item">
                  <div className="left-section">
                    <input
                      type="checkbox"
                      id={`checkbox-tasks-${index}`}
                      name={name}
                      value={name}
                      checked={checkedStateTasks[index]}
                      onChange={() => handleOnChangeTasks(index)}
                    />
                    <label htmlFor={`checkbox-tasks-${index}`}>{name}</label>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
        <div> 
          <button id='submit' type="button" onClick={saveInfo}>Save</button>
        </div>
      </div>
    </>
    </GoogleOAuthProvider>  
  );
};

export default Interests;
