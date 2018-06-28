import React, { Component } from "react";
import Header from "./components/Header";
import Result from "./components/Result";
import Footer from "./components/Footer";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <Result />
        <Footer />
      </div>
    );
  }
}

export default App;
