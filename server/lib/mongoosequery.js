const mongoose = require('mongoose')
mongoose.Promise = Promise
mongoose.connect('mongodb://localhost/Quiz2')
const QuizEntry = mongoose.model('quizEntry', {
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
})

const QuizQuestion = mongoose.model('quizQuestion', {
  subject: String,
  questions: [{
    text: String,
    answers: [{
      text: String,
      isCorrect: Boolean
    }]
  }]
})
console.log('querying quizQuestions')

const query = QuizQuestion.find({})
query.exec((err, docs) => {
  console.log(docs)
})
