import React from "react";
import { observer } from "mobx-react";
import { PropTypes } from "prop-types";

const WorkPlaces = ({ store }) => {
  const { workOptions, addToWorkTotal } = store;
  return workOptions.map(workOption => (
    <article className="work-item" key={workOption.id}>
      <img
        src={workOption.src}
        alt={workOption.name}
        className="work-item-image"
        width="150"
        height="150"
      />
      <div className="work-item-info">
        <h3 className="work-item-title">{workOption.name}</h3>
        <fieldset className="ui-input">
          <input
            type="number"
            defaultValue={workOption.startHour}
            step="0.5"
            id="startuur"
            tabIndex="0"
            name="startHour"
          />
          <label htmlFor="startuur">
            <span>Startuur</span>
          </label>
        </fieldset>
        <fieldset className="ui-input">
          <input
            type="number"
            defaultValue={workOption.endHour}
            step="0.5"
            id="einduur"
            tabIndex="0"
            name="endHour"
          />
          <label htmlFor="einduur">
            <span>Einduur</span>
          </label>
        </fieldset>
      </div>
      <a className="bttn" onClick={() => addToWorkTotal(workOption)}>
        Toevoegen
      </a>
    </article>
  ));
};

WorkPlaces.propTypes = {
  store: PropTypes.object.isRequired
};

export default observer(WorkPlaces);
