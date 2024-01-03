import React, { useState } from "react";
import "./Mix.css";
import { NavLink } from "react-router-dom";
import apiURL from "../config";

const Register = () => {
  const api = apiURL.url;
  const [sendData, setSendData] = useState({
    uname: "",
    email: "",
    password: "",
    cpassword: "",
  });

  const changeData = (e) => {
    setSendData({
      ...sendData,
      [e.target.name]: e.target.value,
    });
  };

  console.log(sendData);

  const submitRegister = async (e) => {
    e.preventDefault();

    const { uname, email, password, cpassword } = sendData;
    if (uname === "") {
      alert("Please enter username");
    } else if (email === "") {
      alert("Please enter your email ...");
    } else if (!email.includes("@")) {
      alert("Invalid Email, with @");
    } else if (password === "") {
      alert("please enter the Password");
    } else if (password.length < 6) {
      alert("Password should be at least 6 characters long!");
    } else if (cpassword === "") {
      alert("Confirm your password");
    } else if (cpassword.length < 6) {
      alert("Confirm password should be at least 6 characters long!");
    } else if (password !== cpassword) {
      alert("Both passwords are not same.");
    } else {
      console.log("done");

      // const backend = api;
      // console.log(backend);
      const data = await fetch(`${api}/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ sendData }),
      });

      const res = await data.json();
      console.log(res);
    }
  };

  return (
    <>
      <div className="register">
        <div className="container">
          <h1>Welcome to Register</h1>
          <br />
          <div className="boxregister">
            <label htmlFor="uname">Name</label>
            <br />
            <input
              type="text"
              name="uname"
              value={sendData.uname}
              onChange={changeData}
              placeholder="Enter your name ..."
            />
          </div>
          <br />
          <div className="boxregister">
            <label htmlFor="email">Email</label>
            <br />
            <input
              type="email"
              name="email"
              value={sendData.email}
              onChange={changeData}
              placeholder="Enter your email ..."
            />
          </div>
          <br />
          <div className="boxregister">
            <label htmlFor="password">Password</label>
            <br />
            <input
              type="password"
              name="password"
              value={sendData.password}
              onChange={changeData}
              placeholder="Enter your password ..."
            />
          </div>
          <br />
          <div className="boxregister">
            <label htmlFor="cpassword">Confirm Password</label>
            <br />
            <input
              type="password"
              name="cpassword"
              value={sendData.cpassword}
              onChange={changeData}
              placeholder="Enter your confirm password ..."
            />
          </div>
          <br />
          <div className="boxregister">
            <button onClick={submitRegister}>Register</button>
          </div>
          <br />
          <div className="boxregister">
            <p>
              Have Already Account?{" "}
              <NavLink to={"/"} className={"registerlink"}>
                Login
              </NavLink>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
