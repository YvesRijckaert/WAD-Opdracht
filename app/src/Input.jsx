import React from 'react'
import PropTypes from 'prop-types'

const Input = ({ value, name, type, min, max, onChange }) => {

  const changeInput = e => {
    const { value } = e.currentTarget;
    onChange(value);
  }

  return (
     <label>{name}
     <input type={type} onChange={changeInput} min={min} max={max}  />
     </label>
  )

}

Input.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}

export default Input;