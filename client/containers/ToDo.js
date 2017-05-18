import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Row, Col} from 'react-flexbox-grid'
import Input from '../components/Input'
import List from '../components/List'

class ToDo extends Component {
  componentWillReceiveProps (nextProps) {

  }

  onInterestToggle=(e) => {
    const index = e.target.offsetParent.id
    this.props.actions.toggle(index)
  }

  onInputChange=(e) => {
    const value = e.target.value
    this.props.actions.update(value)
  }

  onInputSubmit = () => {
    this.props.actions.add()
  }

  render () {
    return (
      <div>
        <Row style={{
          paddingBottom: 20
        }}>
          <Col
            xs={12}
            smOffset={1}
            sm={10}
            mdOffset={2}
            md={8}
            lgOffset={3}
            lg={6}>
            <Input
              onChange={this.onInputChange}
              onSubmit={this.onInputSubmit}
              value={this.props.toDo.textField} />
            <List
              onInterestToggle={this.onInterestToggle}
              interests={
                      this.props.toDo.toDos
                    } />
          </Col>
        </Row>
      </div>
    )
  }
}

ToDo.propTypes = {
  actions: PropTypes.object.isRequired,
  toDo: PropTypes.object.isRequired
}

export default ToDo
