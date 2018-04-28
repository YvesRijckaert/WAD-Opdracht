import React from "react";
import { observer, PropTypes } from "mobx-react";

const OverView = ({ workTotals }) => {
  if (workTotals.length === 0) {
    return <p>Je hebt nog geen werkdagen.</p>;
  } else {
    return (
      <section className="the-css-at-table">
        <header>
          <p className="tr">
            <span className="th">Naam</span>
            <span className="th">Locatie</span>
            <span className="th">Startuur</span>
            <span className="th">Stopuur</span>
            <span className="th">Aantal dagen</span>
            <span className="th">Totaal loon</span>
          </p>
        </header>
        <div className="tbody">
          {workTotals.map(({ work, totalDays, decrement, totalSalary }) => (
            <p className="tr" key={work.id}>
              <span>
                <span className="title">
                  Naam: <br className="no-style-break" />
                </span>
                {work.name}
              </span>
              <span>
                <span className="title">
                  Loactie: <br className="no-style-break" />
                </span>
                {work.location}
              </span>
              <span>
                <span className="title">
                  Startuur: <br className="no-style-break" />
                </span>
                {work.startHour}
              </span>
              <span>
                <span className="title">
                  Stopuur: <br className="no-style-break" />
                </span>
                {work.endHour}
              </span>
              <span>
                <span className="title">
                  Aantal dagen: <br className="no-style-break" />
                </span>
                {totalDays}
              </span>
              <span>
                <span className="title">
                  Totaal loon: <br className="no-style-break" />
                </span>
                {totalSalary}
              </span>
              <span className="title" onClick={decrement}>
                X
              </span>
            </p>
          ))}
        </div>
      </section>
    );
  }
};

OverView.propTypes = {
  workTotals: PropTypes.observableArray.isRequired
};

export default observer(OverView);
