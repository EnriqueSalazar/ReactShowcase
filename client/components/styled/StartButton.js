import React from 'react'
import PropTypes from 'prop-types'
import 'tachyons'

const StartButton = props => (
  <div
    id={props.subject}
    onClick={props.onSubmit}
    style={{
      minWidth: 200
    }}
    className='link dim grow mw4 bg-white ma2 pa3 shadow-1'>
    <center>
      <img
        id={props.subject}
        src={props.children}
        alt={props.subject}
        style={{
          maxHeight: 100
        }} />
      <div
        id={props.subject}
        className='gray tc'>
        {props.subject}
      </div>
    </center>
  </div>
)

StartButton.propTypes = {
  subject: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired
}

export default StartButton
