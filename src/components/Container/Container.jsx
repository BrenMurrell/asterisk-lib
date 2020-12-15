// a flex container
import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import './Container.css'

const Container = (props) => {
  return (
    <div 
      className={classNames({
        container: true,
        'container--column': props.column,
        [`container--${props.columnCount}-wide`]: props.columnCount
      })}
    >
      {props.children}
    </div>
  )
}

Container.propTypes = {
  column: PropTypes.bool,
  columnCount: PropTypes.number
}

export default Container