import React, { Component } from "react";
import "./App.css";
import HourObject from "./HourObject";
import TotalHours from "./TotalHours";

class App extends Component {
  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.state = {
      name: "Café Devine",
      location: "Budafabriek",
    };
  }

  handleInputChange(e) {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <div className="App">
        <form>
          <label>Name:</label>
          <input name="name" placeholder={this.state.name} type="text" onChange={this.handleInputChange} />
          
          <label>Location:</label>
          <select name="location" onChange={this.handleInputChange}>
            <option value="Budafabriek">Budafabriek</option>
            <option value="STAM">STAM</option>
            <option value="MSK">MSK</option>
            <option value="Howest">Howest</option>
          </select>
        </form>

        <HourObject name={this.state.name} location={this.state.location} />

        <TotalHours totalHours="11 hours" totalAmount="€ 96" />
      </div>
    );
  }
}

export default App;
