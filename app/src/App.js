import React, { Component } from "react";
import PropTypes from "prop-types";
import "./App.css";
import HourObject from "./HourObject";
import TotalHours from "./TotalHours";
import Input from "./Input";

const calculateTotal = (start, end) => {
  return end - start;
};

calculateTotal.propTypes = {
  start: PropTypes.number.isRequired,
  end: PropTypes.number.isRequired
};

class App extends Component {
  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);

    this.state = {
      name: "Café Devine",
      location: "Budafabriek",
      start: "9",
      end: "19",
      workDay: {}
    };
  }

  handleAddToCart = id => {
    const { workDay } = this.state;

    const updatedWorkDay = { ...workDay };
    updatedWorkDay[id] = updatedWorkDay[id] + 1 || 1;

    this.setState({ workDay: updatedWorkDay });
  };

  handleInputChange = (name, value) => {
    this.setState({ [name]: value });
  };

  render() {
    const { workDay } = this.state;
    return (
      <div className="App">
      <AddHoursForm workDay={workDay} />
        <HourObject workDay={workDay} />
        <TotalHours totalHours="test" totalAmount="€ 96" />
      </div>
    );
  }
}

export default App;
