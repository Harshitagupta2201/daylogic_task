import React from "react";
import "./navbar.css";
import MenuIcon from "@mui/icons-material/Menu";

const navbar = () => {
  return (
    <div className="navbar">
      <div className="left">
        <img src="https://i.ibb.co/bF1DJjY/Logo.png" alt="Logo" border="0" />
      </div>
      <div className="right">
        <div>Home</div>
        <div>About</div>
        <div>Services</div>
        <div>Blogs</div>
        <div>Career</div>
        <div>Our Team</div>
        <div>Contact</div>
      </div>
      <div className={"menuicon"}>
        <MenuIcon />
        <div className="list">
          {" "}
          <div>Home</div>
          <div>About</div>
          <div>Services</div>
          <div>Blogs</div>
          <div>Career</div>
          <div>Our Team</div>
          <div>Contact</div>
        </div>
      </div>
    </div>
  );
};

export default navbar;
