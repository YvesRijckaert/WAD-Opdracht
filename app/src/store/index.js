import { decorate, observable, action, computed, configure } from "mobx";
import WorkOption from "../models/WorkOption";
import WorkTotal from "../models/WorkTotal";

configure({ enforceActions: true });

class Store {
  workTotals = [];
  workOptions = [];

  constructor() {
    this.addWorkOption(
      new WorkOption(`Budacafé`, `Kortrijk`, `assets/img/buda.jpg`, 9, 17, 11)
    );
  }

  addWorkOption = workOption => {
    this.workOptions.push(workOption);
  };

  addToWorkTotal = workOption => {
    const workOptie = this.workTotals.find(
      check => check.workOption.id === workOption.id
    );
    if (workOptie) {
      workOptie.increment();
    } else {
      this.workTotals.push(new WorkTotal(workOption, this.removeOrder));
    }
  };

  removeOrder = work => {
    this.workTotals.remove(work);
  };

  get totalSalary() {
    //hier berekening doen om de totale salary van alle werkplaatsen te hebben
    return 1;
  }
}
decorate(Store, {
  workTotals: observable,
  workOptions: observable,
  addWorkOption: action, //enforceActions: true
  addToWorkTotal: action, //enforceActions: true
  totalSalary: computed
});

const store = new Store();
export default store;
