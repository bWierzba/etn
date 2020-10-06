import React, { Component } from "react";
import "./css/App.css";
import Nav from "./layouts/Nav";
import Header from "./layouts/Header";
import Main from "./layouts/Main";
import Footer from "./layouts/Footer";

class App extends Component {
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  handleScroll = (event) => {
    console.log("They see me scrollin, they hatin");
    window.scrollBy(0, window.innerHeight / 2);
  };

  render() {
    return (
      <div onScroll={this.handleScroll}>
        <Nav />
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
