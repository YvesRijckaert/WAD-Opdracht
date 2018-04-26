import React from "react";
import { observer } from "mobx-react";
import { PropTypes } from "prop-types";

const EditWorkOption = ({ workOption }) => {
  return (
    <form>
      <fieldset class="ui-input">
        <input
          type="text"
          value={workOption.name}
          onChange={e => workOption.updateName(e.target.value)}
          id="naam"
          tabindex="0"
          name="name"
          defaultValue=""
        />
        <label for="naam">
          <span>Naam</span>
        </label>
      </fieldset>
      <fieldset class="ui-input">
        <input
          type="text"
          value={workOption.location}
          onChange={e => workOption.updateLocation(e.target.value)}
          id="locatie"
          tabindex="0"
          name="location"
          defaultValue=""
        />
        <label for="locatie">
          <span>Locatie</span>
        </label>
      </fieldset>
      <fieldset class="ui-input">
        <input
          type="number"
          value={workOption.startHour}
          step="0.5"
          onChange={e => workOption.updateStartHour(e.target.value)}
          id="startuur"
          tabindex="0"
          name="startHour"
          defaultValue=""
        />
        <label for="startuur">
          <span>Startuur</span>
        </label>
      </fieldset>
      <fieldset class="ui-input">
        <input
          type="number"
          value={workOption.endHour}
          step="0.5"
          onChange={e => workOption.updateEndHour(e.target.value)}
          id="einduur"
          tabindex="0"
          name="endHour"
          defaultValue=""
        />
        <label for="einduur">
          <span>Einduur</span>
        </label>
      </fieldset>
      <fieldset class="ui-input">
        <input
          type="number"
          id="loon"
          tabindex="0"
          name="salary"
          defaultValue=""
          step="1"
          onChange={e => workOption.updateSalaryPerHour(e.target.value)}
          value={workOption.salaryPerHour}
        />
        <label for="loon">
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
