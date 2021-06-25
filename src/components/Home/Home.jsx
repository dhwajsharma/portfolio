import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import homeAnime from "./../../assets/home_anime.gif";

const Home = () => {
  return (
    <div className="home">
      <div className="home__headerText">
        <h1>Welcome to my Portfolio!</h1>
        <p>This is Dhwaj Sharma, a Front-End dev.</p>
      </div>
      <div className="home__headBtns">
        <Link to="/about" className="home__btn home__btnWhite">
          <p className="home__btnText">Know more about me.</p>
        </Link>
        <Link to="/contact" className="home__btn home__btnTransparent">
          <p className="home__btnText">Connect with me.</p>
        </Link>
      </div>
      <div className="home__splashImage">
        <img src={homeAnime} alt="animation" className="home__anime" />
      </div>
    </div>
  );
};

export default Home;
