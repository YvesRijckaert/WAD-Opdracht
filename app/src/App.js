import React, { Component } from "react";
import "./App.css";
import HourObject from "./HourObject";
import TotalHours from "./TotalHours";
import Input from "./Input";

class App extends Component {
  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);

    this.state = {
      name: "Café Devine",
      location: "Budafabriek",
      start: "7",
      end: "19"
    };
  }

  handleInputChange = (name, value) => {
    this.setState({ [name]: value });
  };

  calculateTotal = (start, end) => {
    return start + end;
  }

  render() {
    const { name, location, start, end } = this.state;
    const total = this.calculateTotal(start, end);
    return (
      <div className="App">
        <form>
          <Input
            value={name}
            name="Name:"
            onChange={e => this.handleInputChange("name", e)}
          />
          <Input
            value={location}
            name="Location:"
            onChange={e => this.handleInputChange("location", e)}
          />
        </form>

        <HourObject name={name} location={location} />

        <TotalHours totalHours={total} totalAmount="€ 96" />
      </div>
    );
  }
}

export default App;
