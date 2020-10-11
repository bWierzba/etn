import React from "react";
import "../css/Header.css";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

import image1 from "../img/1.jpg";
import image2 from "../img/2.jpg";
import image3 from "../img/3.jpg";
import image4 from "../img/3.jpg";

const Header = () => {
  return (
    <div id='header'>
      <AliceCarousel buttonsDisabled={true} autoPlay autoPlayInterval={3000}>
        <img src={image1} className="sliderimg" />
        <img src={image2} className="sliderimg" />
        <img src={image3} className="sliderimg" />
        <img src={image4} className="sliderimg" />
      </AliceCarousel>
    </div>
  );
};

export default Header;
