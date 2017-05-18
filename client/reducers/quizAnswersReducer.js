import {
  ADD_ANSWER,
  INIT_QUESTIONS,
  SET_SCORE,
  TIME_OUT
} from '../constants/ActionTypes'

const initialState = {
  answers: [],
  remainingQuestions: null,
  activeQuestion: 'not_init',
  startingNumberOfQuestions: null,
  score: null,
  answersReview: null,
  answersCount: 0
}

export default function quizAnswers (state = initialState, action) {
  switch (action.type) {
    case ADD_ANSWER:
      const remainingQuestions = state.remainingQuestions.slice()
      const nextQuestion = remainingQuestions.splice(0, 1)[0]
      const currentAnswer = {
        answer: action.payload,
        question: state.activeQuestion.id
      }
      const answersCount = state.answersCount + 1
      return {
        ...state,
        remainingQuestions,
        activeQuestion: nextQuestion,
        answers: [
          ...state.answers, currentAnswer
        ],
        answersCount
      }
    case INIT_QUESTIONS:
      const newQuestions = action.payload.slice()
      const startingNumberOfQuestions = newQuestions.length
      const firstQuestion = newQuestions.splice(0, 1)[0]
      return {
        ...state,
        activeQuestion: firstQuestion,
        remainingQuestions: newQuestions,
        startingNumberOfQuestions
      }
    case SET_SCORE:
      return {
        ...state,
        ...action.payload
      }
    case TIME_OUT:
      const activeUnanswered = {
        question: state.activeQuestion.id,
        answer: 'NA'
      }
      const remainingUnanswered = state.remainingQuestions.map((question) => {
        return {question: question.id, answer: 'NA'}
      })
      return {
        ...state,
        remainingQuestions: [],
        activeQuestion: undefined,
        answers: [...state.answers, activeUnanswered, ...remainingUnanswered]
      }
    default:
      return state
  }
}
