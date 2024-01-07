import React, { useContext, useEffect } from "react";
import "./Nav.css";
import { NavLink, useNavigate } from "react-router-dom";
import { Avatar } from "@mui/material";
import urlData from "../config";
import { contextNavigate } from "../Context/ContextProvider";

const Nav = () => {
  const history = useNavigate();
  const { userData, setUserData } = useContext(contextNavigate);

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

  const signOut = async () => {
    const token = await localStorage.getItem("userDataToken");
    // console.log(token);

    const data = await fetch(`${api}/signOut`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    });

    const res = await data.json();
    // console.log(res);

    if (res.status === 204) {
      console.log(res);
      localStorage.removeItem("userDataToken");
      history("/");
      window.location.reload();
    } else {
      alert("Error signing out");
    }
  };

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
                <div className="tabAvatar">
                  {userData ? userData.getData.email : ""}
                </div>
                <div className="tabAvatar">
                  <NavLink to={"/student"} className="tabAvatarNavlink">
                    Home
                  </NavLink>
                </div>
                <div className="tabAvatar">
                  <NavLink to={"/student"} className="tabAvatarNavlink">
                    Student
                  </NavLink>
                </div>
                <div className="tabAvatar">
                  <NavLink to={"/teacher"} className="tabAvatarNavlink">
                    Teacher
                  </NavLink>
                </div>
                <div className="tabAvatar">
                  <NavLink to={"addData"} className="tabAvatarNavlink">
                    Profile
                  </NavLink>
                </div>
                <div className="tabAvatar" onClick={signOut}>
                  Log Out
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
