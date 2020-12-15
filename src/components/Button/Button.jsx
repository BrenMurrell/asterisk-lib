import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

import './Button.css'

const Button = (props) => {
  
  const buttonClasses = 
    cn({
      btn: true,
      [`btn--${props.variant}`]: props.variant
    })
  

  return (
    <button className={buttonClasses} onClick={props.click}>{props.buttonText}</button>
  )
}

Button.propTypes = {
  buttonText: PropTypes.string.isRequired,
  click: PropTypes.func,

}

// Button.

export default Button
