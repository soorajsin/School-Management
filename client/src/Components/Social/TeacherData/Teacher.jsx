import React, { useContext } from "react";
import "./Teacher.css";
import { useNavigate } from "react-router-dom";
import { contextNavigate } from "../../Context/ContextProvider";

const Teacher = () => {
  const { userData } = useContext(contextNavigate);
  const history = useNavigate();
  const addToTeacher = () => {
    history("/teacherADD");
  };

  return (
    <>
      <div className="teacher">
        <div className="conatinerofTeacher">
          <div className="button">
            <button onClick={addToTeacher}>ADD</button>
          </div>
          <div className="show">
            {userData
              ? userData.getData.teacher.map((teacher, index) => (
                  <div key={index} className="show-data">
                    <p>Name : {teacher.name}</p>
                    <p>Name : {teacher.email}</p>
                    <p>Name : {teacher.dob}</p>
                    <p>Name : {teacher.description}</p>
                  </div>
                ))
              : ""}
          </div>
        </div>
      </div>
    </>
  );
};

export default Teacher;
