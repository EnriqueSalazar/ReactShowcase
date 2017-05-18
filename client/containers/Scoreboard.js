import React, {Component} from 'react'
import PropTypes from 'prop-types'
// import {Link} from 'react-router'
import {graphql, compose} from 'react-apollo'

import QUIZ_SCOREBOARD_QUERY from '../queries/QuizScoreboardQuery.graphql'

class Scoreboard extends Component {
  RenderBoard=(props) => {
    const board = this.props.data.quizScoreboard
    return (<div>{
      board && board.map((subject, i) => {
        return (<div key={i}>
          <h1>{subject.subject}</h1>
          {subject.ninjas && subject.ninjas.map((ninja, k) => {
            return (<div key={k}>
              <strong>firstname: </strong>{ninja.firstname}<br />
              <strong>lastname: </strong>{ninja.lastname}<br />
              <strong>score: </strong>{ninja.score}<br />
              <strong>elapsed: </strong>{ninja.elapsed}<br />
            </div>)
          })}
        </div>)
      })
    }</div>)
  }

  render () {
    const data = this.props.data
    if (data) {
      return <this.RenderBoard />
    }
    return <br />
  }
}

Scoreboard.propTypes = {
  data: PropTypes.object.isRequired
}

export default compose(
  graphql(QUIZ_SCOREBOARD_QUERY, {
    options: {pollInterval: 3000}
  })
)(Scoreboard)
