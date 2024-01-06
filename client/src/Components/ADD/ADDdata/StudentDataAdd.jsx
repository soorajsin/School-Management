import React, { useState } from "react";
import "./StudentDataAdd.css";
import { NavLink } from "react-router-dom";

const StudentDataAdd = () => {
  const [sendData, setSendData] = useState([
    {
      name: "",
      email: "",
      dob: "",
      description: "",
    },
  ]);

  const editstudent = async () => {
    const newForm = {
      name: "",
      email: "",
      dob: "",
      description: "",
    };
    setSendData([...sendData, newForm]);
  };
  console.log(sendData);

  return (
    <>
      <div className="addstudent">
        <div className="studentContainer">
          <h1>Welcome to Add Student Data</h1>
          <br />
          {sendData.map((subForm, index) => (
            <div className="subform" key={index}>
              <div className="addDataOFStudent">
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
                  placeholder="Enter your name"
                />
              </div>
              <br />
              <div className="addDataOFStudent">
                <label htmlFor="email">Email</label>
                <br />
                <input
                  type="text"
                  value={subForm.email}
                  onChange={(e) => {
                    const updateduser = [...sendData];
                    updateduser[index].email = e.target.value;
                    setSendData(updateduser);
                  }}
                  placeholder="Enter your email"
                />
              </div>
              <br />
              <div className="addDataOFStudent">
                <label htmlFor="dob">Date of Birth</label>
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
              <div className="addDataOFStudent">
                <label htmlFor="description">Description</label>
                <br />
                <textarea
                  value={subForm.description}
                  onChange={(e) => {
                    const updateduser = [...sendData];
                    updateduser[index].description = e.target.value;
                    setSendData(updateduser);
                  }}
                  placeholder="Enter your description"
                  cols="15"
                  rows="2"
                ></textarea>
              </div>
            </div>
          ))}
          <div className="addDataOFStudent">
            <button onClick={editstudent}>Add</button>
          </div>
          <br />
          <div className="addDataOFStudent">
            <button>Submit</button>
          </div>
          <br />
          <div className="addDataOFStudent">
            <p>
              <NavLink to={"/student"}>Cancel</NavLink>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default StudentDataAdd;
