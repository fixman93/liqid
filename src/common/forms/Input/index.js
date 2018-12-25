import React from 'react'
import PropTypes from 'prop-types'

export const Input = ({ type, placeholder, name, change, value, id }) => {
  return (
    <input type={type} placeholder={placeholder} name={name} onChange={change} value={value} id={id} />
  )
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
  change: PropTypes.func,
  value: PropTypes.string
}

export default Input