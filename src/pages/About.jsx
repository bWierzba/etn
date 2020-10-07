import React from "react";
import "../css/About.css";
import Jagoda from "../img/Jagoda.jpg";
import Krzysztof from "../img/Krzysztof.jpg";
import Agnieszka from "../img/Agnieszka.jpg";

const About = () => {
  return (
    <div className="about-page" id="about">
      <div className="row">
        <div className="column-photos">
          <div className="picture" ></div>
          <div className="picture" ></div>
          <div className="picture" ></div>
        </div>
        <div className="column-description">opis</div>
      </div>
    </div>
  );
};

export default About;
