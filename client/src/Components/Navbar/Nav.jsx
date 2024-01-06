import React, { useEffect, useState } from "react";
import "./Nav.css";
import { NavLink } from "react-router-dom";
import { Avatar } from "@mui/material";
import urlData from "../config";

const Nav = () => {
  const [userData, setUserData] = useState();

  const api = urlData.url;
  const navbarData = async () => {
    const token = await localStorage.getItem("userDataToken");
    // console.log(token);

    const data = await fetch(`${api}/validator`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    });

    const res = await data.json();
    // console.log(res);

    if (res.status === 205) {
      console.log(res);
      setUserData(res);
    } else {
      console.log("user not found");
    }
  };

  useEffect(() => {
    navbarData();
  });

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
            <Avatar className="avatarChar">
              {" "}
              {userData ? userData.getData.email.charAt(0).toUpperCase() : ""}
            </Avatar>
            <div className="navcontainerShow">
              <div className="classHand">
                <div className="tabAvatar">Email</div>
                <div className="tabAvatar">Home</div>
                <div className="tabAvatar">Student</div>
                <div className="tabAvatar">Teacher</div>
                <div className="tabAvatar">Profile</div>
                <div className="tabAvatar">Log Out</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
