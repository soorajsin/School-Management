import React, { useState } from "react";
import "./Mix.css";
import { NavLink, useNavigate } from "react-router-dom";
import backendURl from "../config";

const Register = () => {
  const history = useNavigate();
  const api = backendURl.url;

  const [sendData, setSendData] = useState({
    email: "",
    password: "",
  });

  const changeData = (e) => {
    setSendData({
      ...sendData,
      [e.target.name]: e.target.value,
    });
  };
  console.log(sendData);

  const submitLogin = async (e) => {
    e.preventDefault();

    const { email, password } = sendData;

    if (email === "") {
      alert("Please enter your email ...");
    } else if (!email.includes("@")) {
      alert("Invalid Email");
    } else if (password === "") {
      alert("Password is required.");
    } else if (password.length < 6) {
      alert("Your Password must be at least 6 characters long.");
    } else {
      console.log("login");

      const data = await fetch(`${api}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const res = await data.json();
      // console.log(res);

      if (res.status === 201) {
        console.log(res);
        history("/choose");
      } else if (res.status === 202) {
        alert("Email not found");
      } else if (res.status === 203) {
        alert("Password not matched ");
      }
    }
  };

  return (
    <>
      <div className="register">
        <div className="container">
          <h1 className="h1handle">Welcome to Login</h1>
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
            <button onClick={submitLogin}>Login</button>
          </div>
          <br />
          <div className="boxregister">
            <p>
              Have not Account?{" "}
              <NavLink to={"/register"} className={"registerlink"}>
                Register
              </NavLink>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
