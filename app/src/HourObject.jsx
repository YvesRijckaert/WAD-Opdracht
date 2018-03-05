import React from "react";
import "./Table.css";

const HourObject = ({ name, location, date, startHour, endHour, total }) => {
  return(
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
          <tr>
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

export default HourObject;
