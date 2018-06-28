import React, { Component } from "react";
import InfermedicaApi from "../infermedica-api";
import EmailForm from "./EmailForm";

class Result extends Component {
  constructor() {
    super();
    this.api = new InfermedicaApi();
    this.state = {
      conditions: [],
      mentions: [],
      inputValue: ""
    };
  }

  render() {
    return (
      <div className="main">
        <form className="left" onSubmit={event => this.handleSubmit(event)}>
          <h4>
            <strong>Tell us what you feel.</strong>
          </h4>
          <p>
            We will try to recognize your symptoms using Natural Language
            Processing algorithms.
          </p>
          <textarea
            id="text"
            cols="40"
            rows="10"
            placeholder="Text here"
            value={this.state.inputValue}
            onChange={event => this.handleChange(event)}
          />
          <button className="button">Get Report</button>
        </form>

        <div className="right">
          {this.state.conditions.length !== 0 && (
            <h3>
              <strong>Report:</strong>
            </h3>
          )}
          {this.state.conditions.map((condition, i) => {
            return (
              <ol className="fontsize" key={i}>
                + {condition.common_name}{" "}
              </ol>
            );
          })}
          <EmailForm />
        </div>
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
    this.setState({
      conditions: response.conditions
    });
  }

  async getEvidence() {
    const symptoms = await this.api.parse(this.state.inputValue);
    this.setState({
      mentions: symptoms.mentions,
      symptoms: symptoms.symptoms
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
