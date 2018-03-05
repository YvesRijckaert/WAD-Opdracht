import React from 'react'
import PropTypes from 'prop-types'

const Input = ({ value, name, onChange }) => {

  const changeInput = e => {
    const { value } = e.currentTarget;
    onChange(value);
  }

  return (
     <label>{name}
     <input type="text" onChange={changeInput} />
     </label>
  )

}

Input.propTypes = {
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired
}

export default Input;