import React from "react";
import { useState } from "react";

import { medicalFields, medicalTasks} from "./MedicalFields.js";
import "./Medicalfieldsstyles.css";

const Interests = () => {
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
  );
};

export default Interests;
