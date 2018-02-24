import React, { Component } from "react";
import "./Table.css";

class HourObject extends Component {
  constructor(props) {
    super(props);
    this.state = { clicked: false };
  }

  handleClickItem = e => {
    this.setState((prevState, props) => ({ clicked: !prevState.clicked }));
  };

  render = () => {
    const { name, location, date, startHour, endHour, total } = this.props;
    const { clicked } = this.state;
    return (
      <table className="hourItems">
        <thead>
          <tr>
            <th>Name</th>
            <th>Location</th>
            <th>Date</th>
            <th>Start</th>
            <th>End</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          <tr
            onClick={this.handleClickItem}
            className={`hourItem ${clicked ? `clicked` : ``}`}
          >
            <td>{name}</td>
            <td>{location}</td>
            <td>{date}</td>
            <td>{startHour}</td>
            <td>{endHour}</td>
            <td>{total}</td>
          </tr>
        </tbody>
      </table>
    );
  };
}

export default HourObject;
