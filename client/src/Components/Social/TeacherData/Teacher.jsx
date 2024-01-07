import React, { useContext } from "react";
import "./Teacher.css";
import { useNavigate } from "react-router-dom";
import { contextNavigate } from "../../Context/ContextProvider";
import apiURL from "../../config";

const Teacher = () => {
  const api = apiURL.url;
  const { userData } = useContext(contextNavigate);
  const history = useNavigate();
  const addToTeacher = () => {
    history("/teacherADD");
  };

  const deleteTeacher = async (teacherId, index) => {
    const token = await localStorage.getItem("userDataToken");
    // console.log(token);

    const data = await fetch(`${api}/deleteTeacher`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify({ teacherId }),
    });

    const res = await data.json();
    // console.log(res);

    if (res.status === 203) {
      console.log(res);
    } else {
      alert("Not delete teacher data");
    }
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
                  <div key={index} className="show-data-teacher">
                    <p>Name : {teacher.name}</p>
                    <p>Name : {teacher.email}</p>
                    <p>Name : {teacher.dob}</p>
                    <p>Name : {teacher.description}</p>
                    <div className="deleteteacher">
                      <i
                        onClick={() => deleteTeacher(teacher._id, index)}
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

export default Teacher;
