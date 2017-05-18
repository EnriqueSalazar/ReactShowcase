import React from 'react'
import PropTypes from 'prop-types'
import {Row, Col} from 'react-flexbox-grid'
import TextField from './TextField'
import HeaderTitle from './styled/HeaderTitle'

const MainDetails = props => (
  <div>
    <Row>
      <Col xs={12}>
        <HeaderTitle>
        Details
      </HeaderTitle>
      </Col>
    </Row>
    <Row center="xs">
      <Col
        xsOffset={1}
        xs={10} smOffset={0} sm={6}>
        <TextField
          id='firstname'
          hintText="your given name."
          floatingLabelText="First name*"
          onDetailChange={props.onDetailChange}
          errorText={
      (props.triedToStart &&
        !props.check.firstnameNotEmpty) ? 'Required' : null} />
      </Col>
      <Col
        xsOffset={1}
        xs={10} smOffset={0}
        sm={6}>
        <TextField
          id='lastname'
          hintText="your surname."
          floatingLabelText="Last name*"
          onDetailChange={props.onDetailChange}
          errorText={
          (props.triedToStart &&
            !props.check.lastnameNotEmpty) ? 'Required' : null} />
      </Col>
    </Row>
    <Row center="xs">
      <Col
        xsOffset={1}
        xs={10} smOffset={0} sm={12}>
        <TextField
          id='email'
          hintText="your email address."
          floatingLabelText="Email*"
          onDetailChange={props.onDetailChange}
          errorText={
            (props.triedToStart &&
            !(props.check.emailNotEmpty && props.check.emailCorrect))
            ? (props.check.emailNotEmpty ? 'Incorrect format' : 'Required')
            : null} />
      </Col>
    </Row>
  </div>
)

MainDetails.propTypes = {
  onDetailChange: PropTypes.func.isRequired,
  check: PropTypes.object.isRequired,
  triedToStart: PropTypes.bool.isRequired
}

export default MainDetails
