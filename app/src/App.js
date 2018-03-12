import React, { Component } from "react";
import "./App.css";
import PropTypes from "prop-types";

import WorkPlaces from "./WorkPlaces";
import WorkTable from "./WorkTable";
import TotalHours from "./TotalHours";

import { calculateTotalHours } from "./utils";

class App extends Component {

  constructor() {
    super();
    this.state = {workPlaces: {}, table: {}, total: 0};
  }

  componentDidMount = () => {
    fetch('./data/workOptions.json')
      .then(responseObject => responseObject.json())
      .then(this.parseJSON);
  }

  parseJSON = data => {
    this.setState({ workPlaces: data });
  }

  handleAddItem = id => {
    const { table } = this.state;

    const updatedTable = { ...table };
    updatedTable[id] = updatedTable[id] + 1 || 1;

    this.setState({ table: updatedTable })
  }

  handleChangeAnimal = (id, workPlace) => {
    const workPlaces = { ...this.state.workPlaces };
    workPlaces[id] = workPlace;
    this.setState({ workPlaces });
  }

  handleClickToTotal = () => {
    this.setState(({ table, workPlaces, total }) => {
      const newTotal = calculateTotalHours();
      return { total: newTotal }
    });
  }

  render() {
    const { workPlaces, table, total } = this.state;
    return (
      <div className="App">
        <WorkPlaces workPlaces={workPlaces} onAddToTable={this.handleAddItem} onChangeWorkPlace={this.handleChangeWorkPlace}  />
        <WorkTable workPlaces={workPlaces} table={table} onClickAddToTotal={this.handleClickToTotal} />
        <TotalHours totalHours={total} totalAmount="currency calculator from total here" />
      </div>
    );
  }
}

export default App;
