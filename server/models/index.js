const mongoose = require('mongoose')
mongoose.Promise = Promise
const db = require('./connection').default

module.exports = {
  QuizScore: db.model('quizscore', {
    quizId: {type: String, index: true},
    subject: {type: String, index: true},
    score: {type: Number, index: true},
    elapsed: {type: Number, index: true},
    firstname: String,
    lastname: String
  }),
  QuizEntry: db.model('quizentry', {
    termsOfService: Boolean,
    subject: String,
    details: {
      firstname: String,
      lastname: String,
      email: String,
      github: String
    },
    interests: {
      Net: Boolean,
      Android: Boolean,
      Angular: Boolean,
      Clojure: Boolean,
      iOS: Boolean,
      Java: Boolean,
      JavaScript: Boolean,
      Node: Boolean,
      React: Boolean,
      Scala: Boolean
    }
  }),
  QuizQuestion: db.model('quizquestion', {
    subject: {type: String, index: true},
    difficulty: Number,
    text: String,
    code: String,
    answers: [{
      text: String,
      isCorrect: Boolean
    }]
  }),
  QuizAnswer: db.model('quizanswer', {
    quizId: {type: String, index: true},
    subject: String,
    answers: [{
      answer: String,
      question: String
    }]
  })
}
