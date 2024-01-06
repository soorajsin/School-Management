import React from "react";
import { useContext } from "react";
import { contextNavigate } from "../Context/ContextProvider";

const AddData = () => {
  const { userData } = useContext(contextNavigate);

  if (userData) {
    return <>{userData ? userData.getData.email : ""}</>;
  } else {
    return <div>Loading...</div>;
  }
};

export default AddData;
