import React, { Component } from "react";
import "./App.css";
import HourObject from "./HourObject";
import TotalHours from "./TotalHours";

class App extends Component {
  constructor(props) {
    super(props);
    this.handleChangeName = this.handleChangeName.bind(this);
    this.state = { name: "" };
  }

  handleChangeName = e => {
    this.setState({ name: e.target.value });
  };

  render() {
    const name = this.state.name;
    return (
      <div className="App">
        <label>
          Name
          <input
            value={name}
            onChange={this.handleChangeName}
          />
        </label>

        <HourObject
          name={(name)}
        />
        
        <TotalHours totalHours="11 hours" totalAmount="€ 96" />
      </div>
    );
  }
}

export default App;
