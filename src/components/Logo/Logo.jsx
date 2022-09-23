import React from "react";
import "./Logo.css";
import brain from "./icons8-brain-64.png";
import Tilt from "react-parallax-tilt";

const Logo = () => {
  return (
    <div className="ma4 mt0">
      <Tilt
        style={{
          height: 150,
          width: 150,
        }}
        tiltMaxAngleX={55}
        tiltMaxAngleY={55}
        className="Tilt br2 shadow-2"
      >
        <div className="pa3">
          <img
            src={brain}
            alt="brain"
            style={{ paddingTop: "5px", height: "100px", width: "100px" }}
          />
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;
