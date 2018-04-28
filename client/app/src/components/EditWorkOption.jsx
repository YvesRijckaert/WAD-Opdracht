import React from "react";
import { observer } from "mobx-react";
import { PropTypes } from "prop-types";

const EditWorkOption = ({ workOption }) => {
  return (
    <form>
      <fieldset className="ui-input">
        <input
          type="text"
          defaultValue={workOption.name}
          onChange={e => workOption.updateName(e.target.value)}
          id="naam"
          tabIndex="0"
          name="name"
        />
        <label htmlFor="naam">
          <span>Naam</span>
        </label>
      </fieldset>
      <fieldset className="ui-input">
        <input
          type="text"
          defaultValue={workOption.location}
          onChange={e => workOption.updateLocation(e.target.value)}
          id="locatie"
          tabIndex="0"
          name="location"
        />
        <label htmlFor="locatie">
          <span>Locatie</span>
        </label>
      </fieldset>
      <fieldset className="ui-input">
        <input
          type="number"
          defaultValue={workOption.startHour}
          step="0.5"
          onChange={e => workOption.updateStartHour(e.target.value)}
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
          onChange={e => workOption.updateEndHour(e.target.value)}
          id="einduur"
          tabIndex="0"
          name="endHour"
        />
        <label htmlFor="einduur">
          <span>Einduur</span>
        </label>
      </fieldset>
      <fieldset className="ui-input">
        <input
          type="number"
          id="loon"
          tabIndex="0"
          name="salary"
          step="1"
          onChange={e => workOption.updateSalaryPerHour(e.target.value)}
          defaultValue={workOption.salaryPerHour}
        />
        <label htmlFor="loon">
          <span>Loon (€ / uur)</span>
        </label>
      </fieldset>
    </form>
  );
};

EditWorkOption.propTypes = {
  workOption: PropTypes.object.isRequired
};

export default observer(EditWorkOption);
