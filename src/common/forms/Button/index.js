import React from 'react'
import PropTypes from 'prop-types'

export const Button = ({ text, className, type, disabled, click }) => {
  return (
    <button className={`btn ${className}`.trim()} type={type} disabled={disabled} onClick={click}>
      {text}
    </button>
  )
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  click: PropTypes.func
}

export default Button