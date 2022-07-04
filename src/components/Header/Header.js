import React from "react";
import "./Header.css";
import earth from "../../images/earth.svg";

const Header = () => {
  return (
    <div className="nav">
      {/* <div> */}
      <div className="earth-and-title">
        <img src={earth} alt="earth-icon" />
        <p>my travel journal.</p>
      </div>
      {/* </div> */}
    </div>
  );
};

export default Header;
