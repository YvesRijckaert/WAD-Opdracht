import uniqid from "uniqid";
import { decorate, observable, action } from "mobx";

class WorkOption {
  constructor(name, location, src, startHour, endHour, salaryPerHour) {
    this.id = uniqid();
    this.name = name;
    this.location = location;
    this.src = src;
    this.startHour = startHour;
    this.endHour = endHour;
    this.salaryPerHour = salaryPerHour;
  }

  updateName = value => {
    this.name = value;
  };

  updateLocation = value => {
    this.location = value;
  };

  updateSrc = value => {
    this.src = value;
  };

  updateStartHour = value => {
    this.startHour = value;
  };

  updateEndHour = value => {
    this.endHour = value;
  };

  updateSalaryPerHour = value => {
    this.salaryPerHour = value;
  };
}
decorate(WorkOption, {
  name: observable,
  location: observable,
  src: observable,
  startHour: observable,
  endHour: observable,
  salaryPerHour: observable,
  updateName: action,
  updateLocation: action,
  updateSrc: action,
  updateStartHour: action,
  updateEndHour: action,
  updateSalaryPerHour: action
});

export default WorkOption;
