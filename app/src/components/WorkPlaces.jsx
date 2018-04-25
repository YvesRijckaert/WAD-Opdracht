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
        <p>StartHour</p>
        <input
          type="number"
          name="startHour"
          defaultValue={workOption.startHour}
        />
        <p>EndHour</p>
        <input type="number" name="endHour" defaultValue={workOption.endHour} />
      </div>
      <button onClick={() => addToWorkTotal(workOption)}>Add To Table</button>
    </article>
  ));
};

WorkPlaces.propTypes = {
  store: PropTypes.object.isRequired
};

export default observer(WorkPlaces);
