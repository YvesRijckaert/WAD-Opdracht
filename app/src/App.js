import React, { Component } from "react";
import "./App.css";
import HourObject from "./HourObject";

class App extends Component {
  render() {
    return (
      <div className="App">
        <HourObject
          name="Café Devine"
          location="Budafabriek"
          startHour="8:00"
          endHour="19:00"
          total="€ 96"
        />
      </div>
    );
  }
}

export default App;
