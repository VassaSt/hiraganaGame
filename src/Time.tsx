import React from 'react'
import PropTypes from 'prop-types'
import "./App.css"

const Time = props => {
  return (
    <div className="clockStyles">
      <span className="line line_left"></span>
      <div className="clockImg"></div>
      <div className="time">10</div>
      <span className="line line_right"></span>
    </div>
  );
}

Time.propTypes = {}

export default Time