import React from 'react'
import PropTypes from 'prop-types'
import {Row, Col} from 'react-flexbox-grid'
import Interest from './Interest'
import HeaderTitle from './styled/HeaderTitle'
import RegularText from './styled/RegularText'
// to do receive array and iterate to create all the Interests

const List = props => (
  <div>
    <Row center="xs">
      <Col xs={12}>
        <HeaderTitle>
              Interests
            </HeaderTitle>
        <br />
        <RegularText>
              Please select your interests:
            </RegularText>
      </Col>
    </Row>
    <Row center="xs">
      {props.interests.map((interest, i) =>
        <Interest
          key={i}
          id={i}
          label={interest.text}
          active={interest.selected}
          onTouchTap={props.onInterestToggle} />
            )}
    </Row>
  </div>
)

List.propTypes = {
  interests: PropTypes.array.isRequired,
  onInterestToggle: PropTypes.func.isRequired
}

export default List
