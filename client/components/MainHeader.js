import React from 'react'
import {Row} from 'react-flexbox-grid'
import {
  grey900,
  white
} from 'material-ui/styles/colors'
import sytac from '../assets/sytac-hexagon-long.png'

const MainHeader = props => (
  <Row
    style={{
      backgroundColor: grey900,
      height: 250,
      color: white
    }}>
    <div style={{
      margin: 'auto'
    }}>
      <img src={sytac} alt="Sytac" height="250" />
    </div>
  </Row>
)

export default MainHeader
