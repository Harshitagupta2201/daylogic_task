import React from "react";
import "./body.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Center = () => {
  return (
    <div className="body">
      <div className="container">
        <div>Marketing</div>
        <div>Development</div>
        <div>Contact Us</div>
      </div>
      <div className="desc">
        <h1>WE PROVIDE</h1>
        <span className="span"></span>
      </div>
      <div>
        <h3>
          GET A QUOTE <ArrowForwardIcon className="icon" />
        </h3>
      </div>
    </div>
  );
};

export default Center;
