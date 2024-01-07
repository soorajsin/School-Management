// Student.js
import React, { useContext } from "react";
import "./Student.css";
import { useNavigate } from "react-router-dom";
import { contextNavigate } from "../../Context/ContextProvider";
import apiURL from "../../config";

const Student = () => {
  const api = apiURL.url;
  const { userData } = useContext(contextNavigate);
  const history = useNavigate();

  const addToStudentData = () => {
    history("/studentADD");
  };

  const deleteStudent = async (studentId, index) => {
    const token = await localStorage.getItem("userDataToken");
    // console.log(token);

    const data = await fetch(`${api}/deletestudent`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify({ studentId }),
    });

    const res = await data.json();
    // console.log(res);

    if (res.status === 203) {
      console.log(res);
    } else {
      alert("Not delete student data");
    }
  };

  return (
    <>
      <div className="StudentData">
        <div className="containerStudent">
          {userData && (
            <div className="addButton">
              <button onClick={addToStudentData}>Add</button>
            </div>
          )}
          <div className="show">
            {userData
              ? userData.getData.student.map((student, index) => (
                  <div key={index} className="show-data">
                    <p>Name: {student.name}</p>
                    <p>Email: {student.email}</p>
                    <p>DOB: {student.dob} </p>
                    <p>Description: {student.description} </p>
                    <div className="deletestudet">
                      <i
                        onClick={() => deleteStudent(student._id, index)}
                        class="fa-solid fa-delete-left"
                      ></i>
                    </div>
                  </div>
                ))
              : ""}
          </div>
        </div>
      </div>
    </>
  );
};

export default Student;
