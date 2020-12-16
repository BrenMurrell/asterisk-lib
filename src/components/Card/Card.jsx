import React from 'react'
import PropTypes from 'prop-types';
import './Card.css'

const Card = (props) => {
  return (
    <div className={`card${props.alignment ? (` card--align-${props.alignment}`) : ''}`}>
      <div className="card__wrapper">
        {props.headerText && (
          <div className={`card__header`}>
            <h2 className="card__title">{props.headerText}</h2>
          </div>
        )}
        <div className="card__inner">
          {props.children}
        </div>
      </div>
    </div>
  )
}

Card.propTypes = {
  headerText: PropTypes.string,
  alignment: PropTypes.string
}

export default Card
