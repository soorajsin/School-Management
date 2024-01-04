import React from "react";
import "./Nav.css";
import { NavLink } from "react-router-dom";
import { Avatar } from "@mui/material";

const Nav = () => {
  return (
    <>
      <div className="navbar">
        <div className="navContainer">
          <div className="tab">
            <NavLink to={"/student"}>
              <img
                src="https://shopping-app-xx1p.vercel.app/static/media/Sooraj-logo.4ea9ba32a0c93354b8a8.png"
                alt="logo"
              />
            </NavLink>
          </div>
          <div className="tab">
            <NavLink to={"/student"} className={"tabcontent"}>
              Student
            </NavLink>
          </div>
          <div className="tab">
            <NavLink to={"/teacher"} className={"tabcontent"}>
              Teacher
            </NavLink>
          </div>
          <div className="tab">
            <NavLink className={"tabcontent"}>
              <Avatar />
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
