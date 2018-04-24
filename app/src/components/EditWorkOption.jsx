import React from "react";
import { observer } from "mobx-react";
import { PropTypes } from "prop-types";

const EditWorkOption = ({ workOption }) => {
  return (
    <form>
      <input
        type="text"
        value={workOption.name}
        onChange={e => workOption.updateName(e.target.value)}
      />
      <input
        type="text"
        value={workOption.location}
        onChange={e => workOption.updateLocation(e.target.value)}
      />
      <input
        type="number"
        value={workOption.startHour}
        step="0.5"
        onChange={e => workOption.updateStartHour(e.target.value)}
      />
    </form>
  );
};

EditWorkOption.propTypes = {
  workOption: PropTypes.object.isRequired
};

export default observer(EditWorkOption);
