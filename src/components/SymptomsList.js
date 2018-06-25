import React, { Component } from "react";
import InfermedicaApi from "../infermedica-api";
import settings from "../settings";

class SymptomsList extends Component {
  constructor() {
    super();
    this.api = new InfermedicaApi(settings["app-id"], settings["app-key"]);
    this.state = {
      symptoms: []
    };
  }

  render() {
    console.log("rendering");
    return (
      <div>
        {this.state.symptoms.map((symptom, i) => {
          return <li key={i}>{symptom.name}</li>;
        })}
      </div>
    );
  }

  async componentDidMount() {
    const symptoms = await this.api.getSymptoms();

    // use only 10 symptoms to simplify problem
    const firstTenSymptoms = symptoms.slice(0, 10);
    this.setState({
      symptoms: firstTenSymptoms
    });
  }
}

export default SymptomsList;
