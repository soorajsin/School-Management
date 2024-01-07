import React, { useState } from "react";
import "./TeacherDataADD.css";
import { NavLink, useNavigate } from "react-router-dom";
import apiURL from "../../config";

const TeacherDataADD = () => {
  const history = useNavigate();
  const api = apiURL.url;
  const [sendData, setSendData] = useState([
    {
      name: "",
      email: "",
      dob: "",
      description: "",
    },
  ]);

  const addteacher = async () => {
    const newForm = {
      name: "",
      email: "",
      dob: "",
      description: "",
    };
    setSendData([...sendData, newForm]);
  };
  console.log(sendData);

  const submitTeacher = async () => {
    const entryField = sendData.some(
      (form) =>
        form.name === "" ||
        form.email === "" ||
        form.dob === "" ||
        form.description === ""
    );

    if (entryField) {
      alert("Plz enter all fields ");
    } else {
      // console.log("done");

      const token = await localStorage.getItem("userDataToken");
      // console.log(token);

      const data = await fetch(`${api}/addTeacher`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
        body: JSON.stringify({ sendData }),
      });

      const res = await data.json();
      // console.log(res);

      if (res.status === 202) {
        console.log(res);
        history("/teacher");
      } else {
        console.log("not added data");
      }
    }
  };

  return (
    <>
      <div className="teacherADD">
        <div className="teacherContainer">
          <h1>Welcome to Teacher Add</h1>
          <br />
          {sendData.map((subForm, index) => (
            <div key={index} className="data">
              <div className="form">
                <label htmlFor="name">Name</label>
                <br />
                <input
                  type="text"
                  value={subForm.name}
                  onChange={(e) => {
                    const updateduser = [...sendData];
                    updateduser[index].name = e.target.value;
                    setSendData(updateduser);
                  }}
                  placeholder="Enter name ..."
                />
              </div>
              <br />
              <div className="form">
                <label htmlFor="email">Email</label>
                <br />
                <input
                  type="email"
                  value={subForm.email}
                  onChange={(e) => {
                    const updateduser = [...sendData];
                    updateduser[index].email = e.target.value;
                    setSendData(updateduser);
                  }}
                  placeholder="Enter email ...."
                />
              </div>
              <br />
              <div className="form">
                <label htmlFor="dob">DOB</label>
                <br />
                <input
                  type="date"
                  value={subForm.dob}
                  onChange={(e) => {
                    const updateduser = [...sendData];
                    updateduser[index].dob = e.target.value;
                    setSendData(updateduser);
                  }}
                />
              </div>
              <br />
              <div className="form">
                <label htmlFor="description">Description</label>
                <br />
                <textarea
                  placeholder="Enter description"
                  value={subForm.description}
                  onChange={(e) => {
                    const updateduser = [...sendData];
                    updateduser[index].description = e.target.value;
                    setSendData(updateduser);
                  }}
                  rows="2"
                  cols="20"
                ></textarea>
              </div>
            </div>
          ))}
          <br />
          <div className="form">
            <button onClick={addteacher}>ADD</button>
          </div>
          <br />
          <div className="form">
            <button onClick={submitTeacher}>Submit</button>
          </div>
          <br />
          <div className="form">
            <p>
              <NavLink to={"/teacher"}>Cancel</NavLink>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeacherDataADD;
