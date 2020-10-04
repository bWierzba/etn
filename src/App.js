import React from "react";
import "./css/App.css";
import Nav from './layouts/Nav'
import Header from './layouts/Header'
import Main from './layouts/Main'
import Footer from './layouts/Footer'

function App() {
  return (
    <div>
      <Nav />
      <Header />
      <Main />
      <Footer />
    </div>
  )
}

export default App;
