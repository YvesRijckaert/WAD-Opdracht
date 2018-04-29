import React from "react";
import { observer } from "mobx-react";
import { PropTypes } from "prop-types";

const AddWorkOption = ({ store }) => {
  const { add } = store;

  const handleSubmitForm = e => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.name.value) {
      const workOptionContent = {
        name: form.name.value,
        location: form.location.value,
        startHour: form.startHour.value,
        endHour: form.endHour.value,
        salaryPerHour: form.salary.value
      };
      add(workOptionContent);
      form.reset();
      store.showFlash(`Nieuwe werkdag toegevoegd!`, `flash-info`);
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
      </div>
      <div className="form-add-number">
        <fieldset className="ui-input">
          <input
            type="number"
            id="startuur"
            tabIndex="0"
            name="startHour"
            step="0.5"
            min="0"
            max="24"
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
            step="0.5"
            min="0"
            max="24"
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
            step="0.5"
            min="0"
            max="99"
          />
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
