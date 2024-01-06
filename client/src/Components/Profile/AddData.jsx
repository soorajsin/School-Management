import React, { useContext } from "react";
import { contextNavigate } from "../Context/ContextProvider";
import "./AddData.css";

const AddData = () => {
  const { userData } = useContext(contextNavigate);

  if (userData) {
    return (
      <>
        <div className="addData">
          <div className="addDataContainer">
            <h1>Welcome to Profile</h1>
            <div className="addClass">
              <h1>
                Name : {userData ? userData.getData.uname.toUpperCase() : ""}
              </h1>
              <h1>Email : {userData ? userData.getData.email : ""}</h1>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    <h1>Loading</h1>;
  }
};

export default AddData;
