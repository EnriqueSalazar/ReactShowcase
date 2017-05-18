import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {graphql, compose} from 'react-apollo'
import {Row, Col} from 'react-flexbox-grid'
import LinearProgress from 'material-ui/LinearProgress'
import FlatButton from 'material-ui/FlatButton'
import
SyntaxHighlighter,
{registerLanguage} from 'react-syntax-highlighter/dist/light'
import {darcula} from 'react-syntax-highlighter/dist/styles'
import javascript from 'highlight.js/lib/languages/javascript'
import java from 'highlight.js/lib/languages/java'
import clojure from 'highlight.js/lib/languages/clojure'
import scala from 'highlight.js/lib/languages/scala'

import Header from '../components/MainHeader'
import * as MainActions from '../actions'
import QUIZ_QUESTIONS_QUERY from '../queries/QuizQuestionsQuery.graphql'
import CREATE_ANSWER_ENTRY_MUTATION from
 '../queries/CreateAnswerEntryMutation.graphql'
import {DURATION_SECS} from '../config/'
import {
  orange500,
orange300,
grey300} from 'material-ui/styles/colors'

registerLanguage('javascript', javascript)
registerLanguage('java', java)
registerLanguage('clojure', clojure)
registerLanguage('scala', scala)

class Quiz extends Component {
  constructor (props) {
    super(props)
    this.state = {
      elapsed: 0,
      start: Date.now(),
      duration: DURATION_SECS
    }
  }
  componentDidMount () {
    this.timer = setInterval(this.tick, 999)
  }

  componentWillUnmount () {
    clearInterval(this.timer)
  }

  tick=() => {
    if (this.state.elapsed >= this.state.duration) {
      this.props.actions.timeout()
    }
    this.setState({elapsed: Math.floor((new Date() - this.state.start) / 1000)})
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.token === 'not_init') {
      console.log('Redirecting...')// eslint-disable-line no-console
      window.location.replace('/')
    } else {
      if (nextProps.data.quizQuestions &&
        nextProps.quiz.activeQuestion === 'not_init') {
        this.props.actions.initQuestions(nextProps.data.quizQuestions)
      }
      const activeQuestion = nextProps.quiz.activeQuestion
      const score = nextProps.quiz.score
      const gotQuestions = !!nextProps.quiz.startingNumberOfQuestions
      if (activeQuestion === undefined &&
         score === null && gotQuestions) {
        clearInterval(this.timer)
        const answerEntry = {
          token: nextProps.token,
          subject: nextProps.subject,
          answers: nextProps.quiz.answers
        }
        this.props.mutate({
          variables: {answerEntry}
        })
        .then(({data}) => {
          const score = data.createAnswerEntry
          this.props.actions.setScore(score)
        }).catch((error) => {
          // eslint-disable-next-line no-console
          console.log('there was an error sending the query', error)
        })
      }
    }
  }
  shouldComponentUpdate (nextProps, nextState) {
    const isStarted = nextProps.quiz.activeQuestion !== 'not_init'
    return isStarted
  }
  onAnswer = (e) => {
    const t = e.target
    this.props.actions.addAnswer(t.textContent)
  }

  RenderQuestion=(props) => {
    const elapsed = this.state.elapsed
    const remaining = this.state.duration - elapsed
    const minutes = Math.floor(remaining / 60)
    const seconds = remaining % 60
    const activeQuestion = this.props.quiz.activeQuestion
    const min = 0
    const max = this.state.duration
    const subject = this.props.subject.toLowerCase()
    const demo = {}
    demo.javascript = `
function createElement({ node, style, useInlineStyles, key }) {
  const { properties, type, tagName, value } = node;
  if (type === "text") {
    return value;
  } else if (tagName) {
    const children = childrenCreator(node.children);
    return <TagName key={key} {...props}>{children}</TagName>;
  }
}
`
    demo.java = `
public class SimpleFrame
{
  JFrame frame;
  SimpleFrame()
  {
    frame = new JFrame("Welcome to HubberSpot frame");
    frame.setSize(200,100);
    frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
    frame.setVisible(true);
   }
  public static void main(String[] args)
  {
 new SimpleFrame();
  }
}
`
    demo.scala = `
object FoldMapable {
  def apply[F[_] : FoldMapable]: FoldMapable[F] =
    implicitly[FoldMapable[F]]
  implicit object ListFoldMapable extends FoldMapable[List] {
    def foldMap[A, B : Monoid](fa: List[A])(f: A => B): B =
      fa.foldLeft(mzero[B]){ _ |+| f(_) }
  }
}
`
    const showCode = !!activeQuestion.code
    let code
    if (showCode) {
      code = activeQuestion.code === 'demo-code'
       ? demo[subject]
       : activeQuestion.code
    }
    return (
      <Row >
        <Col
          xsOffset={1}
          xs={10}
          smOffset={1.5}
          sm={9}
          mdOffset={2}
          md={8}
          lgOffset={2.5}
          lg={7}>
          <Row >
            <Col
              xs={10}
              sm={11}>
              <LinearProgress
                color={orange500}
                mode="determinate"
                value={remaining}
                style={{height: '10px',
                  margin: '0 auto',
                  varticalAlign: 'middle',
                  overflow: 'hidden',
                  animation: 'start .3s ease-in'
                }}
                max={max}
                min={min} />
            </Col>
            <Col
              xs={2}
              sm={1}>
              <center>
                {minutes}:{seconds}
              </center>
            </Col>
          </Row >
          {showCode &&
            <Row >
              <Col xs={12}>
                <SyntaxHighlighter
                  language={subject}
                  style={darcula}>
                  {code}
                </SyntaxHighlighter>
              </Col>
            </Row >
          }
          <Row >
            <Col xs={12}>
              {activeQuestion && activeQuestion.text}
            </Col>
          </Row >
          <Row >
            <Col xs={12}>
              {(activeQuestion &&
            activeQuestion !== 'not_init') &&
            activeQuestion.answers.map((answer, i) => {
              // debugger
              return (
                <div key={i}>
                  <FlatButton
                    backgroundColor={grey300}
                    hoverColor={orange300}
                    label={answer.text}
                    onClick={this.onAnswer}
                    fullWidth />
                </div>)
            })}
            </Col>
          </Row>
        </Col>
      </Row >
    )
  }
  RenderScore=(props) => {
    const {score, answersReview} = this.props.quiz
    return (
      <div>
        <h1>{score}</h1>
        <br /><br />
        {answersReview && answersReview.map((item, i) => {
          return (<div key={i}>
            <strong>question </strong>{item.question}<br />
            <strong>your answer</strong>
            {item.answer || 'NA'}<br />
            <strong>answeredCorrectly </strong>
            {item.answeredCorrectly ? 'True' : 'False'}<br />
          </div>)
        })}
      </div>
    )
  }

  render () {
    const subject = this.props.subject
    const score = this.props.quiz.score
    const activeQuestion = this.props.quiz.activeQuestion
    let body
    if (subject !== 'not_init' &&
      activeQuestion !== 'not_init') {
      if (score === null) {
        body = <this.RenderQuestion />
      } else {
        body = <this.RenderScore />
      }
    }
    return (<div>
      <Header />
      <div style={{
        paddingTop: 20
      }} >
        {body}
      </div>
    </div>)
  }
}

Quiz.propTypes = {
  actions: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  quiz: state.quizAnswers,
  token: state.quizEntry.token || 'not_init',
  subject: state.quizEntry.subject || 'not_init'
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(MainActions, dispatch)
})

const QuizWithData = compose(
  graphql(QUIZ_QUESTIONS_QUERY, {
    options: ({subject}) => ({variables: {subject}})
    // options: {pollInterval: 3000}
  }),
  graphql(CREATE_ANSWER_ENTRY_MUTATION)
)(Quiz)

export default connect(mapStateToProps, mapDispatchToProps)(QuizWithData)
