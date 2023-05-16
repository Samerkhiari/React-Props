import React from "react";
import PropTypes from "prop-types";

const Profile = ({ fullName, bio, profession, handleAlert, children }) => (
  <div style={{ textAlign: "center"}} >
    <p style={{ fontSize: "24px", fontWeight: "bold" }}>{fullName}</p>
    <p style={{ fontSize: "16px", marginTop: "10px" }}>{bio}</p>
    <p style={{ fontSize: "18px", marginTop: "10px" }}>{profession}</p>
    {children }
    <button id="btn" style={{
        backgroundColor: "#4158D0",
        color: "#fff",
        padding: "10px 20px",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer",
        marginTop: "20px",
        
      }} onClick={() => handleAlert(fullName)}>Click me!</button>
  </div>
);

Profile.propTypes = {
  fullName: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
  profession: PropTypes.string.isRequired,
  handleAlert: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
};

export default Profile;
