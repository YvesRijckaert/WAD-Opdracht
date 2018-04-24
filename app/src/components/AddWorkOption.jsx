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
    <form onSubmit={handleSubmitForm}>
      <input name="name" defaultValue="" type="text" />
      <input name="location" defaultValue="" type="text" />
      <input name="pic" type="file" accept="image/*" />
      <input name="startHour" type="number" defaultValue="0" step="1" />
      <input name="endHour" type="number" defaultValue="0" step="1" />
      <input name="salary" type="number" defaultValue="0" step="1" />
      <input type="submit" value="Toevoegen" />
    </form>
  );
};

AddWorkOption.propTypes = {
  store: PropTypes.object.isRequired
};

export default observer(AddWorkOption);
