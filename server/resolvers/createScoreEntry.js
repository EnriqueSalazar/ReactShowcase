'use strict'

const models = require('../models')

const QuizEntry = models.QuizEntry
const QuizScore = models.QuizScore

const createScoreEntry = (userId, score, elapsed) => {
  try {
    return QuizEntry.findOne({_id: userId}).then((quizEntry) => {
      return QuizScore.findOne({quizId: userId}).then((quizScore) => {
        if (quizScore === null) {
          const quizScoreInstance = new QuizScore()
          const quizScore = {
            quizId: userId,
            subject: quizEntry.subject,
            firstname: quizEntry.details.firstname,
            lastname: quizEntry.details.lastname,
            score,
            elapsed
          }
          Object.assign(quizScoreInstance, quizScore)
          return quizScoreInstance.save()
          .then(({score}) => {
            return score
          }).catch((err) => {
            console.error(err.message)// eslint-disable-line no-console
          })
        } else {
          console.log('Duplicated attempt in QuizScore')// eslint-disable-line no-console, max-len
          return 666
        }
      }).catch((err) => {
        console.log('Illegal attempt in QuizScore')// eslint-disable-line no-console, max-len
        console.error(err.message)// eslint-disable-line no-console
        return 666
      })
    }).catch((err) => {
      console.log('Illegal attempt in QuizEntry')// eslint-disable-line no-console, max-len
      console.error(err.message)// eslint-disable-line no-console
      return 666
    })
  } catch (err) {
    console.error(err.message)// eslint-disable-line no-console
  }
  return 0
}
module.exports.default = createScoreEntry
