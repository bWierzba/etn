import React from "react";
import "../css/About.css";
import Jagoda from "../img/Jagoda.jpg";
import Krzysztof from "../img/Krzysztof.jpg";
import Agnieszka from "../img/Agnieszka.jpg";

const About = () => {
  return (
    <div className="about-page" id="about">
      <div class="row">
        <div class="column-photos">
          <img id="img1" src={Jagoda}></img>
          <img id="img2" src={Krzysztof}></img>
          <img id="img3" src={Agnieszka}></img>
        </div>
        <div class="column-description">opis</div>
      </div>
    </div>
  );
};

export default About;
