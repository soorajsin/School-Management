import React from "react";

const Register = () => {
  return (
    <>
      <div className="register">
        <div className="container">
          <h1>Welcome to Login</h1>
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
            <p>Have not Account? Register</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
