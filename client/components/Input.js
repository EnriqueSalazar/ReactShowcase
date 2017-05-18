import React from 'react'
import PropTypes from 'prop-types'
import {Row, Col} from 'react-flexbox-grid'
import IconButton from 'material-ui/IconButton'
import HardwareVideogameAsset from 'material-ui/svg-icons/hardware/videogame-asset'
import TextField from './TextField'
import HeaderTitle from './styled/HeaderTitle'

const Input = props => (
  <div>
    <Row>
      <Col xs={12}>
        <HeaderTitle>
        ToDo
      </HeaderTitle>
      </Col>
    </Row>
    <Row center="xs">
      <Col
        xsOffset={1}
        xs={9} >
        <TextField
          id='nextToDo'
          hintText="Enter a task."
          floatingLabelText="To Do"
          value={props.value}
          onChange={props.onChange} />
      </Col>
      <Col
        xs={1} >

        <IconButton
          onTouchTap={props.onSubmit}>
          <HardwareVideogameAsset />
        </IconButton>
      </Col>
    </Row>
  </div>
)

Input.propTypes = {
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  value: PropTypes.string
}

export default Input
