import React from "react";
import PropTypes from "prop-types";
import WorkTableLine from "./WorkTableLine";
import { Link } from "react-router-dom";

import "./Table.css";

const WorkTable = ({ workPlaces, table, onClickAddToTotal }) => {
  return (
    <table className="hourItems">
      <nav>
        <Link to="/workPlace/add">
          Add work to table
        </Link>
      </nav>
      <thead>
        <tr>
          <th>Name</th>
          <th>Location</th>
          <th>Date</th>
          <th>Start hour</th>
          <th>End hour</th>
          <th>Days worked</th>
        </tr>
      </thead>
      <tbody>
        {Object.keys(table).map(id => (
          <WorkTableLine
            key={id}
            id={id}
            aantal={table[id]}
            workPlace={workPlaces[id]}
          />
        ))}
      </tbody>
      <button onClick={onClickAddToTotal}>Bereken</button>
    </table>
  );
};

WorkTable.propTypes = {
  workPlaces: PropTypes.object.isRequired,
  table: PropTypes.object.isRequired,
  onClickAddToTotal: PropTypes.func.isRequired
};

export default WorkTable;
