import React, { Component } from "react";
import InfermedicaApi from "../infermedica-api";
import settings from "../settings";

class Result extends Component {
  constructor() {
    super();
    this.api = new InfermedicaApi(settings["app-id"], settings["app-key"]);
    this.state = {
      conditions: [],
      mentions: [],
      inputValue: ""
    };
  }

  render() {
    //   console.log(this.state.conditions)
    return (
      <div>
        <form onSubmit={event => this.handleSubmit(event)}>
          <input
            type="text"
            value={this.state.inputValue}
            onChange={event => this.handleChange(event)}
          />
          <button>Search</button>
        </form>
        <h1>results</h1>
        {/* display each condition in state */}
        {this.state.conditions.map((condition, i) => {
          return <p key={i}>{condition.common_name}</p>;
        })}
      </div>
    );
  }

  async handleSubmit(event) {
    event.preventDefault();
    const body = {
      sex: "female",
      age: 25,
      evidence: await this.getEvidence(),
      extras: {
        disable_groups: true
      }
    };

    const response = await this.api.diagnosis(body);
    // console.log(response)
    // set state with response.conditions
    this.setState({
      conditions: response.conditions
    });
  }

  async getEvidence() {
    const symptoms = await this.api.parse(this.state.inputValue);
    console.log(symptoms);
    this.setState({
      mentions: symptoms.mentions
    });
    const evidence = symptoms.mentions.map(mention => {
      return { id: mention.id, choice_id: mention.choice_id };
    });

    return evidence;
  }

  handleChange(event) {
    event.preventDefault();
    this.setState({
      inputValue: event.target.value
    });
  }
}

export default Result;
