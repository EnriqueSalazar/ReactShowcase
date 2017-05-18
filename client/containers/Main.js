import React from 'react'
import PropTypes from 'prop-types'
import ToDo from './ToDo'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as MaintActions from '../actions'

const Main = ({toDo, actions, router}) => (
  <div className="App">
    <ToDo
      actions={actions}
      toDo={toDo}
      router={router} />
  </div>
)

Main.propTypes = {
  toDo: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  toDo: state.toDo
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(MaintActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Main)
