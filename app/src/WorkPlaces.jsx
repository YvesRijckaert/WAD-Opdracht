import React from "react";
import PropTypes from "prop-types";
import "./WorkPlaces.css";

const WorkPlaces = ({ workPlaces, onAddToTable, onChangeWorkPlace }) => {
  const handleClickButton = id => {
    console.log(id);
    onAddToTable(id);
  };

  const handleChange = (e, id) => {
    const { value, name } = e.currentTarget;
    const workPlace = { ...workPlaces[id] };
    workPlace[name] = value;
    onChangeWorkPlace(id, workPlace);
  };

  const renderWorkPlace = (workPlace, id) => {
    return (
      <article className="work-item" key={id}>
        <img
          src={workPlace.src}
          alt={workPlace.name}
          className="work-item-image"
          width="150"
          height="150"
        />
        <div className="work-item-info">
          <h3 className="work-item-title">{workPlace.name}</h3>
          <input
            type="date"
            name="date"
            defaultValue={workPlace.date}
            onChange={e => handleChange(e, id)}
          />
          <p>StartHour</p>
          <input
            type="number"
            name="startHour"
            defaultValue={workPlace.startHour}
            onChange={e => handleChange(e, id)}
          />
          <p>EndHour</p>
          <input
            type="number"
            name="endHour"
            defaultValue={workPlace.endHour}
            onChange={e => handleChange(e, id)}
          />
        </div>
        <button onClick={() => handleClickButton(id)}>Add To Table</button>
      </article>
    );
  };

  return (
    <section className="workPlaces">
      <h2>Your work places:</h2>
      {Object.keys(workPlaces).map(id => renderWorkPlace(workPlaces[id], id))}
    </section>
  );
};

WorkPlaces.propTypes = {
  workPlaces: PropTypes.object.isRequired,
  onAddToTable: PropTypes.func.isRequired,
  onChangeWorkPlace: PropTypes.func.isRequired
};

export default WorkPlaces;
