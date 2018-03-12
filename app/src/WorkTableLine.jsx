import React from "react";
import PropTypes from "prop-types";

const WorkTableLine = ({ aantal, workPlace, ...props }) => {
  return (
    <tr>
      <td>{workPlace.name}</td>
      <td>{workPlace.location}</td>
      <td>{workPlace.date}</td>
      <td>{workPlace.startHour}</td>
      <td>{workPlace.endHour}</td>
      <td>{aantal}</td>
    </tr>
  );
};

WorkTableLine.propTypes = {
  aantal: PropTypes.number.isRequired,
  workPlace: PropTypes.object.isRequired
};

export default WorkTableLine;
