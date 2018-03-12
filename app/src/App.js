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
    const { name, location, start, end, workDay } = this.state;
    const total = calculateTotal(parseFloat(start), parseFloat(end));
    return (
      <div className="App">
        <form>
          <Input
            value={name}
            type="text"
            name="Name:"
            onChange={e => this.handleInputChange("name", e)}
          />
          <Input
            value={location}
            type="text"
            name="Location:"
            onChange={e => this.handleInputChange("location", e)}
          />
          <Input
            value={start}
            type="number"
            name="Start hour:"
            min="1"
            max="24"
            onChange={e => this.handleInputChange("start", e)}
          />
          <Input
            value={end}
            type="number"
            name="End hour:"
            min="1"
            max="24"
            onChange={e => this.handleInputChange("end", e)}
          />
        </form>
        <HourObject
          name={name}
          location={location}
          startHour={start}
          endHour={end}
        />
        {
        Object.keys(workDay).map(id => (
        <li key={id}>{workDay[id].value}</li>
        ))
        }
        <TotalHours totalHours={total} totalAmount="€ 96" />
      </div>
    );
  }
}

export default App;
