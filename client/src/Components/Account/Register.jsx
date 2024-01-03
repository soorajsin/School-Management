import React from "react";
import "./Mix.css";

const Register = () => {
  return (
    <>
      <div className="register">
        <div className="container">
          <h1>Welcome to Register</h1>
          <br />
          <div className="boxregister">
            <label htmlFor="name">Name</label>
            <br />
            <input type="text" placeholder="Enter your name ..." />
          </div>
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
            <label htmlFor="cpassword">Confirm Password</label>
            <br />
            <input
              type="password"
              placeholder="Enter your confirm password ..."
            />
          </div>
          <br />
          <div className="boxregister">
            <button>Register</button>
          </div>
          <br />
          <div className="boxregister">
            <p>Have Already Account? Login</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
