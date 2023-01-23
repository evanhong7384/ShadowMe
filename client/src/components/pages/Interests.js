import { useState } from "react";
import { medicalFields } from "./MedicalFields.js";
import "./Medicalfieldsstyles.css";

const Interests = () => {
  const [checkedState, setCheckedState] = useState(
    new Array(medicalFields.length).fill(false)
  );

  const handleOnChange = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );

    setCheckedState(updatedCheckedState);
  }
  
  return (
    <div className="Interests">
      <h3>What Fields Are You Interested In?</h3>
      <ul className="medicalField-list">
      {medicalFields.map(({ name }, index) => {
          return (
            <li key={index}>
              <div className="medicalField-list-item">
                <div className="left-section">
                  <input
                    type="checkbox"
                    id={`custom-checkbox-${index}`}
                    name={name}
                    value={name}
                    checked={checkedState[index]}
                    onChange={() => handleOnChange(index)}
                  />
                  <label htmlFor={`custom-checkbox-${index}`}>{name}</label>
                </div>
                </div>
            </li>
          );
        })}
        <li>
          <div className="medicalField-list-item">
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Interests;
