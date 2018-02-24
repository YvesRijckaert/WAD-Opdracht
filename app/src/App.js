import React, { Component } from "react";
import "./App.css";
import HourObject from "./HourObject";
import TotalHours from "./TotalHours";

class App extends Component {
  render() {
    return (
      <div className="App">
        <HourObject
          name="Café Devine"
          location="Budafabriek"
          date="13/01/2018"
          startHour="8:00"
          endHour="19:00"
          total="€ 96"
        />
        <TotalHours
          totalHours="11 hours"
          totalAmount ="€ 96"
         />
      </div>
    );
  }
}

export default App;
