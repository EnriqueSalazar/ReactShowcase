const models = require('../models')
const QuizQuestion = models.QuizQuestion

const _ = require('lodash')

const maxAnswers = 3
const difficultyDistribution = [
  {difficulty: 0, quantity: 1},
  {difficulty: 1, quantity: 3},
  {difficulty: 2, quantity: 3},
  {difficulty: 3, quantity: 3}
]

const quizQuestions = (root, {subject}) => {
  if (!subject || subject === 'not_init') {
    return []
  }
  return QuizQuestion.find({subject}).then((questions) => {
    const randomizedQuestions = _.shuffle(questions)
    const reducedQuestions = []
    difficultyDistribution.map(({difficulty, quantity}) => {
      for (let i = 0; i < quantity; i++) {
        const getQuestion = (howhard) => {
          const position = _.findIndex(
            randomizedQuestions,
            ['difficulty', howhard]
          )
          if (position !== -1) {
            return randomizedQuestions.splice(
              position,
              1
            )[0]
          } else {
            if (howhard > 0) {
              return getQuestion(howhard - 1)
            }
          }
        }
        const removedQuestion = getQuestion(difficulty)
        const reducedAnswers = []
        const correctAnswerIndex =
        removedQuestion.answers.findIndex((element) => {
          return element.isCorrect
        })
        if (correctAnswerIndex >= 0) {
          reducedAnswers.push(
            removedQuestion.answers.splice(correctAnswerIndex, 1)[0]
          )
          const answersSample = _.sampleSize(
            removedQuestion.answers, maxAnswers - 1
          )
          reducedAnswers.push(...answersSample)
          delete removedQuestion.answers
          removedQuestion.answers = _.shuffle(reducedAnswers)
            // reducedAnswers.code = ''
          // console.log('removedQuestion', typeof removedQuestion)
          // console.log('code', typeof removedQuestion.code)
          // console.dir(removedQuestion, {
          //   showHidden: true,
          //   depth: 10,
          //   colors: true
          // })

          reducedQuestions.push(removedQuestion)
        }
      }
    })
    // console.log(reducedQuestions)
    return (reducedQuestions)
    // return _.sortBy(reducedQuestions, ['difficulty'])
  })
}
// console.log(quizScoreboard().then((scores) => {
//   console.dir(scores, {
//     showHidden: true,
//     depth: 10,
//     colors: true
//   })
// }))
module.exports.default = quizQuestions
