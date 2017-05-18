const questions = require('./data.json')
// console.dir(data, {depth: null})

const mongoose = require('mongoose')
mongoose.Promise = Promise
mongoose.connect('mongodb://localhost/Quiz2')
const Question = mongoose.model('quizquestion', {
  subject: String,
  questions: [{
    text: String,
    answers: [{
      text: String,
      isCorrect: Boolean
    }]
  }]
})
const truncate = Question.remove({})
truncate.remove(() => {
  Question.collection.insert(questions, (err, questions) => {
    if (err) {
      console.err(err)// eslint-disable-line no-console
    } else {
      console.info('stored', questions.insertedCount)// eslint-disable-line no-console, max-len
    }
    process.exit()
  })
})
