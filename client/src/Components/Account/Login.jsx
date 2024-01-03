import React from "react";
import "./Mix.css";
import { NavLink } from "react-router-dom";

const Register = () => {
  return (
    <>
      <div className="register">
        <div className="container">
          <h1 className="h1handle">Welcome to Login</h1>
          <br />
          <div className="boxregister">
            <label htmlFor="email">Email</label>
            <br />
            <input type="email" placeholder="Enter your email ..." />
          </div>
          <br />
          <div className="boxregister">
            <label htmlFor="password">Password</label>
            <br />
            <input type="password" placeholder="Enter your password ..." />
          </div>
          <br />
          <div className="boxregister">
            <button>Login</button>
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
