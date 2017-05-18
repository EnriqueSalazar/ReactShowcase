const models = require('../models')
const QuizScore = models.QuizScore
const _ = require('lodash')
const numberOfNinjas = 4
const quizScoreboard = (root) => {
  return QuizScore.find().then((scores) => {
    const scoreboard = (_.uniqBy(scores, 'subject')).map((subject) => {
      return _.pick(subject, 'subject')
    })
    scoreboard.forEach((eachSubject) => {
      const subject = eachSubject.subject
      const subjectFiltered = _.filter(
        _.reject(scores, {elapsed: undefined}), {subject})
      const sorted = _.sortBy(subjectFiltered, ['score', 'elapsed'])
      const trimed = sorted.map((each) => {
        return _.pick(each, ['score', 'elapsed', 'firstname', 'lastname'])
      })
      eachSubject.ninjas = _.reverse(trimed).slice(0, numberOfNinjas)
    })
    return scoreboard
  })
}

// console.log(quizScoreboard().then((scores) => {
//   console.dir(scores, {
//     showHidden: true,
//     depth: 10,
//     colors: true
//   })
// }))

module.exports.default = quizScoreboard
