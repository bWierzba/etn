import React from "react";
import "../css/About.css";
import Jagoda from "../img/J.jpg";
import Krzysztof from "../img/K.jpg";
import Agnieszka from "../img/A.jpg";

let fullDescription = <div className="description-page"><div className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div></div>;
let jagodaDescription = <div className="description-page">
<h1 className='name'>Jagoda Hausmann</h1>
<p className='title'>Architect</p>
<p className='description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
</div>
let krzysztofDescription = <div className="description-page">
<h1 className='name'>Krzysztof Urbaniak</h1>
<p className='title'>Architect</p>
<p className='description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
</div>
let agnieszkaDescription = <div className="description-page">
<h1 className='name'>Agnieszka Wis</h1>
<p className='title'>Architect</p>
<p className='description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
</div>



class About extends React.Component {

  state = {
    description: fullDescription,
  }
  
  MouseHover = (event) => {
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
