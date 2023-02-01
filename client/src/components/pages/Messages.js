import React, {useState, useEffect} from "react";
import { GoogleOAuthProvider, GoogleLogin, googleLogout } from "@react-oauth/google";

import { post,get } from "../../utilities";

const GOOGLE_CLIENT_ID = "739879686608-gmd61blddrnga246qtek7129330hpt7j.apps.googleusercontent.com";


const sendMessage = () => 
  {
    //alert('saveInfo()');
    //alert(document.getElementById("Name").value);
    post(
      "/api/sendmessage",
      {
        messageText: document.getElementById("messageText").value,
        googleidFrom: document.getElementById("googleidFrom").value,
        googleidTo: document.getElementById("googleidTo").value
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


const Messages = (userId, handleLogin, handleLogout) => {
  return (
    <>
      <p>hi Messages!</p>

      <form>
        <div className="personal_info">
          <label htmlFor="messageText">messageText:
            <input type="text" id="messageText" name="messageText"/>
          </label>
        </div>
        
        <div className="personal_info">
          <label htmlFor="googleidFrom">googleidFrom:
            <input type="text" id="googleidFrom" name="googleidFrom"/>
          </label>
        </div>
        
        <div className="personal_info">
          <label htmlFor="googleidTo">googleidTo:
            <input type="text" id="googleidTo" name="googleidTo"/>
          </label>
        </div>
        
        <div> 
          <button id='submit' type="button" onClick={sendMessage}>Send</button>
        </div>
      </form>
      
    </>
  );
  
  
}
/*
  const [checkedStateFields, setCheckedStateFields] = useState(
    new Array(medicalFields.length).fill(false)
  );
console.log(checkedStateFields);

  const [checkedStateTasks, setCheckedStateTasks] = useState(
    new Array(medicalTasks.length).fill(false)
  );

  const handleOnChangeFields = (position) => {
    const updatedCheckedStateFields = checkedStateFields.map((item, index) =>
      index === position ? !item : item
    );
    setCheckedStateFields(updatedCheckedStateFields);
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
        <input type="submit" name="submit" value="Save" id="fields"></input>

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
        
        <input type="submit" name="submit" value="Save" id="interests"></input>
      </div>
    </>
    </GoogleOAuthProvider>  
  );
};*/

export default Messages;
