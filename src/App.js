import React, { Component } from "react";
import InfermedicaApi from "./infermedica-api";
import settings from "./settings";
// import DemoController from "./controller"
import Welcome from "./components/Welcome";
// import SymptomsList from "./components/SymptomsList";
import Nlp from "./components/Nlp";
import Search from "./components/Search";

class App extends Component {
  constructor() {
    super();
    this.api = new InfermedicaApi(settings["app-id"], settings["app-key"]);
  }

  // async componentDidMount() {
  //   const response = await fetch("https://api.infermedica.com/v2/")
  //   const data = await response.json();
  //   this.setState({
  //     sympton: data
  //   })
  // }

  render() {
    // console.log(this.views)
    return (
      <div>
        <Welcome />
        <Nlp />
        <Search />
        {/* <SymptomsList /> */}
      </div>
    );
  }
}

export default App;
