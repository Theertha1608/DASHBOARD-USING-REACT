import React from "react";
import rectangle10Image from "../Assets/Rectangle 10.png";
import { Typography } from "@mui/material";

const Profile = () => {
  const profileContainerStyle = {
    display: "flex",
    alignItems: "center",
    position: "fixed",
    top: "20px",
    right: "20px",
    padding: "10px", 
    borderRadius: "8px", 
    backgroundColor: "#ffffff", 
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", 
  };

  const profileTextContainerStyle = {
    marginRight: "10px",
  };

  const profileImageStyle = {
    width: "50px",
    height: "50px",
    borderRadius: "50%",
  };

  const profileNameStyle = {
    color: "#000000",
    fontWeight: "bold",
    marginBottom: "5px",
  };

  const profileEmailStyle = {
    color: "#000000",
    marginBottom: "5px",
  };

  return (
    <div style={profileContainerStyle}>
      <div style={profileTextContainerStyle}>
        <Typography variant="h6" style={profileNameStyle}>
          John Doe
        </Typography>
        <Typography variant="body2" style={profileEmailStyle}>
          johndoe@gmail.com
        </Typography>
      </div>
      <img src={rectangle10Image} alt="Profile" style={profileImageStyle} />
    </div>
  );
};

export default Profile;
