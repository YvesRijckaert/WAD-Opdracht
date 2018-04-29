import { decorate, observable, action, computed } from "mobx";
import WorkOption from "../models/WorkOption";
import WorkTotal from "../models/WorkTotal";
import Api from "../api/workOptions";

class Store {
  workTotals = [];
  workOptions = [];

  constructor() {
    this.api = new Api();
    this.api.getAll().then(workOptions => this._add(...workOptions));
    // this.addWorkOption(
    //   new WorkOption(
    //     `Budacafé`,
    //     `Kortrijk`,
    //     `assets/img/buda.jpg`,
    //     9,
    //     17,
    //     11,
    //     this.removeWorkOption
    //   )
    // );
    // this.addWorkOption(
    //   new WorkOption(
    //     `Howest`,
    //     `Kortrijk`,
    //     `assets/img/howest.jpg`,
    //     9,
    //     17,
    //     10,
    //     this.removeWorkOption
    //   )
    // );
    // this.addWorkOption(
    //   new WorkOption(
    //     `Bal infernal`,
    //     `Gent`,
    //     `assets/img/infernal.jpg`,
    //     9,
    //     17,
    //     11,
    //     this.removeWorkOption
    //   )
    // );
  }

  _add = (...workOptions) => {
    workOptions.forEach(workOption => {
      const {
        name,
        location,
        src,
        startHour,
        endHour,
        salaryPerHour,
        _id
      } = workOption;
      this.workOptions.push(
        new WorkOption(
          name,
          location,
          src,
          startHour,
          endHour,
          salaryPerHour,
          this.removeWorkOption,
          _id
        )
      );
    });
  };

  add = value => {
    console.log(value);
    this.api.create(value).then(workOption => this._add(workOption));
  };

  update = workOption => {
    this.api.update(workOption).then(workOption => this._update(workOption));
  };

  _update = workOption => {
    const index = this.workOptions.findIndex(
      check => check.id === workOption.id
    );
    this.workOptions[index] = workOption;
  };

  addWorkOption = workOption => {
    this.workOptions.push(workOption);
  };

  addToWorkTotal = work => {
    const workOptie = this.workTotals.find(check => check.work.id === work.id);
    if (workOptie) {
      workOptie.increment();
    } else {
      this.workTotals.push(new WorkTotal(work, this.removeWork));
    }
  };

  removeWork = work => {
    this.workTotals.remove(work);
  };

  removeWorkOption = workOption => {
    this.workOptions.remove(workOption);
  };

  get totalSalary() {
    //hier berekening doen om de totale salary van alle werkplaatsen te hebben
    return 0;
  }
}
decorate(Store, {
  workTotals: observable,
  workOptions: observable,
  addWorkOption: action, //enforceActions: true
  addToWorkTotal: action, //enforceActions: true
  totalSalary: computed,
  add: action
});

const store = new Store();
export default store;
