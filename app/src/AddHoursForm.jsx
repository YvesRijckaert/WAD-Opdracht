import React from "react";

const AddHoursForm = ({ }) => {
  return (
    <form>
    <Input
      value={name}
      type="text"
      name="Name:"
      onChange={e => this.handleInputChange("name", e)}
    />
    <Input
      value={location}
      type="text"
      name="Location:"
      onChange={e => this.handleInputChange("location", e)}
    />
    <Input
      value={start}
      type="number"
      name="Start hour:"
      min="1"
      max="24"
      onChange={e => this.handleInputChange("start", e)}
    />
    <Input
      value={end}
      type="number"
      name="End hour:"
      min="1"
      max="24"
      onChange={e => this.handleInputChange("end", e)}
    />
  </form>
  );
};

export default AddHoursForm;
