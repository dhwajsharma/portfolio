import React from "react";
import "./GoHome.css";
import homeIconWhite from "./../../assets/home_white.png";
import homeIconBlack from "./../../assets/home_black.png";
import { useHistory, useLocation } from "react-router-dom";

const GoHome = () => {
  let history = useHistory();
  let location = useLocation();
  const navigateToHome = () => {
    history.push("/");
  };

  const whiteBtn = location.pathname === "/";

  return (
    <div className="goHome">
      <button
        onClick={navigateToHome}
        className={`goHome__btn ${
          whiteBtn ? "goHome__whiteBkg" : "goHome__DarkBkg"
        }`}
      >
        <img
          className="goHome__homeIcon"
          src={whiteBtn ? homeIconBlack : homeIconWhite}
          alt="home"
        />
      </button>
    </div>
  );
};

export default GoHome;
