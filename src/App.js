import React from "react";
import Profile from "./Profile/Profile";
import Image from "./Profile/img_avatar.png"

const App = () => {
  const handleAlert = (name) => alert("Hello " + name);

  return (
    <div className="container" style={{ display: "grid", placeItems: "center", height: "100vh"}} >
      <h1 style={{ textAlign: "center" , marginBottom:"0"}}>My Profile</h1>
      <img src={Image} alt="Profile" style={{borderRadius:'50%', height:'200px' , width:'200px' , margin:"auto"  }} />
      <Profile
        fullName="Samer"
        bio="Bio:This is my bio"
        profession="Profession:Web-Dev"
        handleAlert={handleAlert}
      />
    </div>
  );
};

export default App;
