import React from "react";
import "./Student.css";
import { useNavigate } from "react-router-dom";

const Student = () => {
  const history = useNavigate();
  const addToStudentData = () => {
    history("/studentADD");
  };

  return (
    <>
      <div className="StudentData">
        <div className="containerStudent">
          <div className="addButton">
            <button onClick={addToStudentData}>Add</button>
          </div>
          <div className="show">kjd</div>
        </div>
      </div>
    </>
  );
};

export default Student;
