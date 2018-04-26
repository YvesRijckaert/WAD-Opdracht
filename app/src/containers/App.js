import React, { Component } from "react";
import { observer } from "mobx-react";
import "../css/App.css";
import WorkPlaces from "../components/WorkPlaces";
import OverView from "../components/OverView";
import EditWorkOption from "../components/EditWorkOption";
import AddWorkOption from "../components/AddWorkOption";

class App extends Component {
  render() {
    const { store } = this.props;
    return (
      <div className="App">
        <section className="werkplaatsen">
          <h2>Voeg nieuwe werkdag toe</h2>
          <WorkPlaces store={store} />
        </section>
        <section>
          <h2>Totaal werkuren</h2>
          <OverView workTotals={store.workTotals} />
          <p>Totaal loon: €{store.totalSalary}</p>
        </section>
        <section>
          <h2>Beheer jouw werk plaatsen</h2>
          <article>
            <h3>Verander bestaande werkplaats</h3>
            <div className="work-option-wrap">
              {store.workOptions.map(workOption => (
                <EditWorkOption key={workOption.id} workOption={workOption} />
              ))}
            </div>
          </article>
          <article>
            <h3>Voeg werkplaats toe</h3>
            <AddWorkOption store={store} />
          </article>
        </section>
      </div>
    );
  }
}

export default observer(App);
