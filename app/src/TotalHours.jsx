import React, { Component } from "react";
import "./Table.css";

class TotalHours extends Component {
  constructor(props) {
    super(props);
  }
  render = () => {
    const { totalHours, totalAmount } = this.props;
    return (
      <table className="totalHours">
        <thead>
          <tr>
            <th>Total hours worked</th>
            <th>Total money earned</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{totalHours}</td>
            <td>{totalAmount}</td>
          </tr>
        </tbody>
      </table>
    );
  };
}

export default TotalHours;
