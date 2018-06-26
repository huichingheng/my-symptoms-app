import React, { Component } from "react";
import InfermedicaApi from "../infermedica-api";
import settings from "../settings";

class NLP extends Component {
  constructor() {
    super();
    this.api = new InfermedicaApi(settings["app-id"], settings["app-key"]);
    this.state = {
      factors: [],
      inputValue: ""
    };
  }
  render() {
    console.log();
    return (
      <div>
        <form>
          <input
            type="text"
            value={this.state.inputValue}
            onChange={event => this.handleChange(event)}
          />
          <button onClick={event => this.handleAdd(event)}>Add</button>
          <p>Factor Summary:</p>
          {this.state.factors.map((factor, i) => {
            return <p key={i}>+ {factor}</p>;
          })}
        </form>
      </div>
    );
  }

  handleChange(event) {
    event.preventDefault();
    this.setState({
      inputValue: event.target.value
    });
  }

  handleAdd(event) {
    event.preventDefault();
    this.setState({
      factors: [...this.state.factors, this.state.inputValue],
      inputValue: ""
    });
  }
}

export default NLP;
