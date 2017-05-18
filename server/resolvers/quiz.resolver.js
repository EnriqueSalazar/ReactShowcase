'use strict'

const quizQuestions = require('./quizQuestions').default
const quizScoreboard = require('./quizScoreboard').default
const createQuizEntry = require('./createQuizEntry').default
const createAnswerEntry = require('./createAnswerEntry').default

module.exports.resolvers = {
  Query: {
    quizQuestions,
    quizScoreboard
  },
  Mutation: {
    createQuizEntry,
    createAnswerEntry
  }
}
