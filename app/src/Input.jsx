import React from 'react'
import PropTypes from 'prop-types'

const Input = ({ value, name, type, onChange }) => {

  const changeInput = e => {
    const { value } = e.currentTarget;
    onChange(value);
  }

  return (
     <label>{name}
     <input type={type} onChange={changeInput} />
     </label>
  )

}

Input.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}

export default Input;