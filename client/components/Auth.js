
import React from 'react'
import PropTypes from 'prop-types'
import Col from 'react-bootstrap/lib/Col'
import Row from 'react-bootstrap/lib/Row'

const Auth = props => {
  let profileHTML = null
  if (props.session.uuid) {
    const uuid = props.session.uuid
    const logout = <a href='/auth/logout'>Logout</a>
    profileHTML = <div>{uuid}<br />{logout}</div>
  } else {
    profileHTML = <a href='/auth/login'>Login</a>
  }

  return (
    <Row>
      <Col md={5}>
        {profileHTML}
      </Col>
    </Row>
  )
}

Auth.propTypes = {
  session: PropTypes.object.isRequired
}

export default Auth
