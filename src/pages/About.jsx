import React from "react";
import "../css/About.css";
import Jagoda from "../img/J.jpg";
import Krzysztof from "../img/K.jpg";
import Agnieszka from "../img/A.jpg";

let fullDescription = <div>Bylo nas 3</div>;
let jagodaDescription = <div>Jo zech jest Jagoda</div>
let krzysztofDescription = <div>Jo zech jest Krzysztof</div>
let agnieszkaDescription = <div>Jo zech jest Agnieszka</div>


class About extends React.Component {

  state = {
    description: fullDescription,
  }
  
  MouseHover = (event) => {
    console.log(event.target.id)
    switch(event.target.id){
    case 'Jagoda':
      this.setState({description: jagodaDescription});
      break;
    case 'Krzysztof':
      this.setState({description: krzysztofDescription});
      break;
    case 'Agnieszka':
        this.setState({description: agnieszkaDescription});
      break;
    }
  }

  render() {
    return (
    <div className="about-page" id="about">
      <div className="row">
        <div className="column-photos">
          <div className="picture" id="Jagoda" style={{backgroundImage: `url(${Jagoda})`}} onMouseEnter={this.MouseHover} onMouseLeave={()=>this.setState({description: fullDescription})}></div>
          <div className="picture" id="Krzysztof" style={{backgroundImage: `url(${Krzysztof})`}} onMouseEnter={this.MouseHover} onMouseLeave={()=>this.setState({description: fullDescription})}></div>
          <div className="picture" id="Agnieszka" style={{backgroundImage: `url(${Agnieszka})`}} onMouseEnter={this.MouseHover} onMouseLeave={()=>this.setState({description: fullDescription})}></div>
        </div>
        <div className="column-description">{this.state.description}</div>
      </div>
    </div>
  );
};}

export default About;
