import React from "react";
import "./StudentDataAdd.css";

const StudentDataAdd = () => {
  return (
    <>
      <div className="addstudent">
        <div className="studentContainer">
          <h1>Welcome to Add Student Data</h1>
          <br />
          <div className="addDataOFStudent">
            <label htmlFor="name">Name</label>
            <br />
            <input type="text" placeholder="Enter your name" />
          </div>
          <br />
          <div className="addDataOFStudent">
            <label htmlFor="email">Email</label>
            <br />
            <input type="text" placeholder="Enter your email" />
          </div>
          <br />
          <div className="addDataOFStudent">
            <label htmlFor="dob">Date of Birth</label>
            <br />
            <input type="date" />
          </div>
          <br />
          <div className="addDataOFStudent">
            <label htmlFor="description">Description</label>
            <br />
            <textarea cols="15" rows="2"></textarea>
          </div>
          <div className="addDataOFStudent">
            <button>Submit</button>
          </div>
          <br />
          <div className="addDataOFStudent">
            <p>Cancel</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default StudentDataAdd;
