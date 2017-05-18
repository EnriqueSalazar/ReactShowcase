const jsonwebtoken = require('jsonwebtoken')
const config = require('../config/config').config

const models = require('../models')
const QuizEntry = models.QuizEntry

const createQuizEntry = (root, {quizEntry}) => {
  const quizEntryInstance = new QuizEntry()
  Object.assign(quizEntryInstance, quizEntry)
  return quizEntryInstance.save()
  .catch((err) => {
    console.error(err)// eslint-disable-line no-console
  }).then((quizEntry) => {
    quizEntry.token = jsonwebtoken.sign(
    {id: quizEntry.id},
    config.get('SECRET'),
      {
        expiresIn: 10 * 60,
        algorithm: 'HS512'
      }
  )
    return quizEntry
  })
}
module.exports.default = createQuizEntry
