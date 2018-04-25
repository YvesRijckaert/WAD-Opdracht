import React from "react";
import { observer, PropTypes } from "mobx-react";

const OverView = ({ workTotals }) => {
  return (
    <table className="hourItems">
      <thead>
        <tr>
          <th>Naam</th>
          <th>Locatie</th>
          <th>Startuur</th>
          <th>Stopuur</th>
          <th>Aantal dagen</th>
          <th>Totaal loon</th>
        </tr>
      </thead>
      <tbody>
        {workTotals.map(({ work, totalDays, decrement, totalSalary }) => (
          <tr key={work.id} onClick={decrement}>
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
  workTotals: PropTypes.observableArray.isRequired
};

export default observer(OverView);
