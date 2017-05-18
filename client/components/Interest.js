import React from 'react'
import PropTypes from 'prop-types'
import {
  grey400,
  grey900
} from 'material-ui/styles/colors'
import FlatButton from 'material-ui/FlatButton'

const flatButtonStyles = {
  inactivelabelStyle: {
    color: grey400,
    minWidth: 150
  },
  activelabelStyle: {
    color: grey900
  },
  style: {
    width: 150
  }
}

const Interest = props => (
  <FlatButton
    id={props.id}
    name={props.id}
    label={props.label}
    labelStyle={props.active
? flatButtonStyles.activelabelStyle
: flatButtonStyles.inactivelabelStyle}
    onTouchTap={props.onTouchTap}
    style={flatButtonStyles.style} />
)

Interest.propTypes = {
  label: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
  onTouchTap: PropTypes.func.isRequired,
  id: PropTypes.integer
}

export default Interest
