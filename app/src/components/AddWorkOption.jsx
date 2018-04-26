import React from "react";
import { observer } from "mobx-react";
import WorkOption from "../models/WorkOption";
import { PropTypes } from "prop-types";

const AddWorkOption = ({ store }) => {
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
      store.addWorkOption(workOption);
      form.reset();
    }
  };

  return (
    <form className="add-form" onSubmit={handleSubmitForm}>
      <div className="form-add-info">
        <fieldset class="ui-input">
          <input
            type="text"
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
            id="locatie"
            tabindex="0"
            name="location"
            defaultValue=""
          />
          <label for="locatie">
            <span>Locatie</span>
          </label>
        </fieldset>
        <input name="pic" type="file" accept="image/*" />
      </div>
      <div className="form-add-number">
        <fieldset class="ui-input">
          <input
            type="number"
            id="startuur"
            tabindex="0"
            name="startHour"
            defaultValue=""
            step="1"
          />
          <label for="startuur">
            <span>Startuur</span>
          </label>
        </fieldset>
        <fieldset class="ui-input">
          <input
            type="number"
            id="einduur"
            tabindex="0"
            name="endHour"
            defaultValue=""
            step="1"
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
          />
          <label for="loon">
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
