import uniqid from "uniqid";
import { decorate, observable, action, computed } from "mobx";

class WorkTotal {
  constructor(workTotal, removeWork) {
    this.id = uniqid();
    this.work = workTotal;
    this.totalDays = 1;
    this.killMe = removeWork;
  }

  increment = () => {
    this.totalDays++;
  };

  decrement = () => {
    this.totalDays--;
    if (this.totalDays === 0) {
      this.killMe(this);
    }
  };

  get totalSalary() {
    //berekening om de salary van die dag te doen
  }
}
decorate(WorkTotal, {
  work: observable,
  totalDays: observable,
  increment: action, //enforceActions: true
  decrement: action, //enforceActions: true
  totalSalary: computed
});

export default WorkTotal;
