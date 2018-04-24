import React from "react";
import { observer, PropTypes } from "mobx-react";

const OverView = ({ workTotals }) => {
  return (
    <table className="hourItems">
      <thead>
        <tr>
          <th>Name</th>
          <th>Location</th>
          <th>Start</th>
          <th>End</th>
          <th>Days</th>
          <th>Money earned</th>
        </tr>
      </thead>
      <tbody>
        {workTotals.map(({ work, totalDays, decrement, totalSalary }) => (
          <tr onClick={decrement}>
            <td>{work.name}</td>
            <td>{work.location}</td>
            <td>{work.startHour}</td>
            <td>{work.endHour}</td>
            <td>{totalDays}</td>
            <td>{totalSalary}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

OverView.propTypes = {
  orders: PropTypes.observableArray.isRequired
};

export default observer(OverView);
