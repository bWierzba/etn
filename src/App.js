import React, { Component } from "react";
import "./css/App.css";
import Nav from "./layouts/Nav";
import Header from "./layouts/Header";
import Main from "./layouts/Main";
import Footer from "./layouts/Footer";



class App extends Component {


  render() {
    return (
      <div >
        <Nav />
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
