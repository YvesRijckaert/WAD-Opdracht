import React, { Component } from "react";

class HourObject extends Component {
  constructor(props) {
    super(props);
    this.state = { clicked: false };
  }

  handleClickItem = e => {
    this.setState((prevState, props) => ({ clicked: !prevState.clicked }));
  };

  render = () => {
    const { name, location, startHour, endHour } = this.props;
    const { clicked } = this.state;
    return (
      <ul className="hourItems">
        <li onClick={this.handleClickItem} className={`hourItem ${clicked ? `clicked` : ``}`}>
          <p>{name}</p>
          <p>{location}</p>
          <p>{startHour}</p>
          <p>{endHour}</p>
        </li>
      </ul>
    );
  };
}

export default HourObject;
