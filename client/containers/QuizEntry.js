import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {graphql} from 'react-apollo'
import {Row, Col} from 'react-flexbox-grid'
import {grey200} from 'material-ui/styles/colors'
import Divider from 'material-ui/Divider'
import validator from 'email-validator'
import CREATE_QUIZ_ENTRY_MUTATION from
  '../queries/CreateQuizEntryMutation.graphql'
import Header from '../components/MainHeader'
import Details from '../components/MainDetails'
import Interests from '../components/MainInterests'
import Start from '../components/MainStart'
import Terms from '../components/MainTerms'

class QuizEntry extends Component {
  constructor (props) {
    super(props)
    this.state = {
      shouldStart: false,
      triedToStart: false,
      check: {
        firstnameNotEmpty: false,
        lastnameNotEmpty: false,
        emailNotEmpty: false,
        emailCorrect: false,
        termsOfServiceTrue: false
      }
    }
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.quizEntry.token) {
      this.props.router.push('/quiz')
    }
    const nextDetails = nextProps.quizEntry.data.details
    const check = {}
    check.firstnameNotEmpty = !this.isEmpty(nextDetails.firstname)
    check.lastnameNotEmpty = !this.isEmpty(nextDetails.lastname)
    check.emailNotEmpty = !this.isEmpty(nextDetails.email)
    check.emailCorrect = validator.validate(nextDetails.email)
    check.termsOfServiceTrue = nextProps.quizEntry.data.termsOfService
    const shouldStart = this.shouldStart(check)
    this.setState({
      check,
      shouldStart
    })
  }

  shouldStart=(check) => {
    return (check.firstnameNotEmpty &&
    check.lastnameNotEmpty &&
    check.emailCorrect &&
    check.termsOfServiceTrue)
  }

  isEmpty = (str) =>
  (!str || str.length === 0)

  onTermsToggle = () => {
    this.props.actions.toggleTerm()
  }

  onInterestToggle=(e) => {
    const subject = e.target.textContent
    this.props.actions.toggleInterest(subject)
  }

  onDetailChange=(e) => {
    const field = e.target.id
    const value = e.target.value
    this.props.actions.updateDetails(field, value)
  }

  onSubmit = (e) => {
    if (this.state.shouldStart) {
      const target = e.target
      const quizEntry = this.props.quizEntry.data
      const subject = target.id
      quizEntry.subject = subject
      this.props.mutate({
        variables: {quizEntry}
      })
      .then(({data}) => {
        const token = data.createQuizEntry.token
        if (token && subject) {
          this.props.actions.setToken(token, subject)
        }
      }).catch((error) => {
        // eslint-disable-next-line no-console
        console.log('there was an error sending the query', error)
      })
    } else {
      this.setState({triedToStart: true})
    }
  }

  render () {
    return (
      <div>
        <Header />

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
            <Details
              onDetailChange={this.onDetailChange}
              check={this.state.check}
              triedToStart={this.state.triedToStart} />
            <Interests
              onInterestToggle={this.onInterestToggle}
              interests={
                      this.props.quizEntry.data.interests
                    } />
            <Divider />
            <Terms
              onTermsToggle={this.onTermsToggle}
              termsOfServiceTrue={
                    this.state.check.termsOfServiceTrue
                  }
              triedToStart={this.state.triedToStart} />
          </Col>
        </Row>
        <Row style={{
          backgroundColor: grey200
        }}>
          <Col xs={12}>
            <Start onSubmit={this.onSubmit} />
          </Col>
        </Row>
      </div>
    )
  }
}

QuizEntry.propTypes = {
  actions: PropTypes.object.isRequired,
  quizEntry: PropTypes.object.isRequired
}

const QuizEntryWithMutation = graphql(CREATE_QUIZ_ENTRY_MUTATION)(QuizEntry)

export default QuizEntryWithMutation
