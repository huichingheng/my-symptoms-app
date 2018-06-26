import React, { Component } from "react";
import InfermedicaApi from "../infermedica-api";
import settings from "../settings";

class Search extends Component {
  constructor() {
    super();
    this.api = new InfermedicaApi(settings["app-id"], settings["app-key"]);
    this.state = {
      mentions: [],
      inputValue: ""
    };
    // const handleFeelChange = async(event) => {
    //     const response = await this.context.api.parse(event.target.value);
    //     this.updateObservations(response.mentions)
    // }
  }

  render() {
    //   console.log(this.state.mentions)
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
        <div>
            {/* for each mention, display name and type */}
            {this.state.mentions.map((mention, i)=>{
                console.log(mention)
               return <p key={i}>{mention.type}{mention.name}</p> 
            })}

        </div>
      </div>
    );
  }

  async handleSubmit(event) {
    event.preventDefault();
    const response = await this.api.parse(this.state.inputValue);
    this.setState({
      mentions: response.mentions
    });
  }

  handleChange(event) {
    event.preventDefault();
    this.setState({
      inputValue: event.target.value
    });
  }
}

export default Search;
