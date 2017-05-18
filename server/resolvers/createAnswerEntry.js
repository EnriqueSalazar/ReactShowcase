const createScoreEntry = require('./createScoreEntry').default
const _ = require('lodash')
const models = require('../models')

const QuizQuestion = models.QuizQuestion
const QuizAnswer = models.QuizAnswer
const config = require('../config/config').config
const jsonwebtoken = require('jsonwebtoken')

const calculateScore = (quizId, answerEntry, elapsed) => {
  // checks unique try per quiz entry
  return QuizAnswer.findOne({quizId}).then((answer) => {
    if (!answer) {
      const quizAnswerInstance = new QuizAnswer()
      const quizAnswer = {
        quizId,
        subject: answerEntry.subject,
        answers: answerEntry.answers
      }
      // create answers entry
      Object.assign(quizAnswerInstance, quizAnswer)
      return quizAnswerInstance.save()
      .catch((err) => {
        console.error(err)// eslint-disable-line no-console
      }).then((quizAnswer) => {
        // once stored retreives all the questions from a subject
        const subject = quizAnswer.subject
        return QuizQuestion.find({subject})
        // questions of the subject
        .then((questions) => {
          // array of correct answers for review
          const correctAnswers = []
          // quizAnswer.answers are the answers submitted
          const quizScore = quizAnswer.answers.reduce(
            (score, reviewedAnswer) => {
              // stored questions is the whole object of the question stored
              // reviewedAnswer is each answer checked
              const storedQuestion = _.find(questions, {
                id: reviewedAnswer.question
              })
              if (storedQuestion && storedQuestion.answers) {
                //
                const correctAnswer = _.find(
                  storedQuestion.answers, {
                    isCorrect: true
                  }
                )
                const answeredCorrectly =
                correctAnswer.text === reviewedAnswer.answer
                correctAnswers.push({
                  question: storedQuestion.text,
                  answer: reviewedAnswer.answer,
                  answeredCorrectly
                })

                if (answeredCorrectly) {
                  return score + 1
                } else { return score }
              }
            }, 0)
          return {
            score: createScoreEntry(quizId, quizScore, elapsed),
            answersReview: correctAnswers
          }
        })
      })
    } else {
      return {score: 666}
    }
  })
}

const createAnswerEntry = (root, {answerEntry}) => {
  try {
    const verified = jsonwebtoken.verify(
      answerEntry.token,
      config.get('SECRET'),
      {
        algorithm: ['HS512']
      }
    )
    const elapsed = Math.floor(Date.now() / 1000) - verified.iat
    return calculateScore(verified.id, answerEntry, elapsed)
  } catch (err) {
    console.error(err.message)// eslint-disable-line no-console
    return {score: 666}
  }

  // const verified = {
  //   id: answerEntry.token + Math.floor((Math.random() * 1000))
  // }
}

module.exports.default = createAnswerEntry
