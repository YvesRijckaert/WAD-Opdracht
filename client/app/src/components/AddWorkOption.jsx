import React from "react";
import { observer } from "mobx-react";
import WorkOption from "../models/WorkOption";
import { PropTypes } from "prop-types";

const AddWorkOption = ({ store }) => {
  const { addWorkOption, add } = store;

  const handleSubmitForm = e => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.name.value) {
      const workOption = new WorkOption(
        form.name.value,
        form.location.value,
        form.pic.value,
        form.startHour.value,
        form.endHour.value,
        form.salary.value
      );
      add(workOption);
      addWorkOption(workOption);
      form.reset();
    }
  };

  return (
    <form className="add-form" onSubmit={handleSubmitForm}>
      <div className="form-add-info">
        <fieldset className="ui-input">
          <input type="text" id="naam" tabIndex="0" name="name" />
          <label htmlFor="naam">
            <span>Naam</span>
          </label>
        </fieldset>
        <fieldset className="ui-input">
          <input type="text" id="locatie" tabIndex="0" name="location" />
          <label htmlFor="locatie">
            <span>Locatie</span>
          </label>
        </fieldset>
        <input name="pic" type="file" accept="image/*" />
      </div>
      <div className="form-add-number">
        <fieldset className="ui-input">
          <input
            type="number"
            id="startuur"
            tabIndex="0"
            name="startHour"
            step="1"
          />
          <label htmlFor="startuur">
            <span>Startuur</span>
          </label>
        </fieldset>
        <fieldset className="ui-input">
          <input
            type="number"
            id="einduur"
            tabIndex="0"
            name="endHour"
            step="1"
          />
          <label htmlFor="einduur">
            <span>Einduur</span>
          </label>
        </fieldset>
        <fieldset className="ui-input">
          <input type="number" id="loon" tabIndex="0" name="salary" step="1" />
          <label htmlFor="loon">
            <span>Loon (€ / uur)</span>
          </label>
        </fieldset>
      </div>
      <input
        id="bttn"
        className="bttn"
        type="submit"
        defaultValue="Toevoegen"
      />
    </form>
  );
};

AddWorkOption.propTypes = {
  store: PropTypes.object.isRequired
};

export default observer(AddWorkOption);
