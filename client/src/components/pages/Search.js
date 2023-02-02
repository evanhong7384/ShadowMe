import React, {useState, useEffect} from "react";
import { GoogleOAuthProvider, GoogleLogin, googleLogout } from "@react-oauth/google";
import { post, get } from "../../utilities";

const GOOGLE_CLIENT_ID = "739879686608-gmd61blddrnga246qtek7129330hpt7j.apps.googleusercontent.com";

const Search = (userId, handleLogin, handleLogout) => {
  const [P1, setP1] = useState("");
  const [P2, setP2] = useState("");
  const [P3, setP3] = useState("")
  const [P4, setP4] = useState("")
  const [P5, setP5] = useState("")
  const [P6, setP6] = useState("")
  
  useEffect(() => {
    console.log("HIII");
    get("/api/getall").then(response => {
      console.log(response);
      console.log(response[1]);
      setP1(response[0]);
      setP2(response[1]);
      setP3(response[2]);
      setP4(response[3]);
      setP5(response[4]);
      setP6(response[5]);
      
      // document.getElementById('institution').innerHTML = response.institution;
    })
  }, []);
  return (
    <>
      <header>Connect</header>

      <label htmlFor="P1">
        Name: <a href={"/messages?to=" + P1.name}>{P1.name}</a>
        <br></br>
        Institution: {P1.institution}
        <br></br>
        Location: {P1.location}
      </label>
      
      <br></br>
      <br></br>
      <br></br>
      

      <label htmlFor="P2">
        Name: <a href={"/messages?to=" + P2.name}>{P2.name}</a>
        <br></br>
        Institution: {P2.institution}
        <br></br>
        Location: {P2.location}
      </label>

      <br></br>
      <br></br>
      <br></br>
      

      <label htmlFor="P3">
        Name: <a href={"/messages?to=" + P3.name}>{P3.name}</a>
        <br></br>
        Institution: {P3.institution}
        <br></br>
        Location: {P3.location}
      </label>
      <br></br>
      <br></br>
      <br></br>
      

      <label htmlFor="P4">
        Name: <a href={"/messages?to=" + P4.name}>{P4.name}</a>
        <br></br>
        Institution: {P4.institution}
        <br></br>
        Location: {P4.location}
      </label>
      <br></br>
      <br></br>
      <br></br>
      

      <label htmlFor="P5">
        Name: <a href={"/messages?to=" + P5.name}>{P5.name}</a>
        <br></br>
        Institution: {P5.institution}
        <br></br>
        Location: {P5.location}
      </label>
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

export default Search;
