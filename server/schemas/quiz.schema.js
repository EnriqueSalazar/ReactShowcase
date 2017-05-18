'use strict'

// mutation{
//   createQuizEntry(firstname:"Enrique", lastname:"Salazar"){
//     id
//   }
// }

// query{quizEntries{
//   id,
//   firstname,
//   lastname
// }}

const makeExecutableSchema = require('graphql-tools').makeExecutableSchema

const resolvers = require('../resolvers/quiz.resolver').resolvers

const typeDefs = `
  type QuizEntry {
    id:ID
    token: String
    termsOfService: Boolean
    subject: String
    details: Details
    interests: Interests
  }

  type Details {
    firstname: String
    lastname: String
    email: String
    github: String
  }

  input DetailsInput {
    firstname: String
    lastname: String
    email: String
    github: String
  }

  type Interests {
    Net: Boolean
    Android: Boolean
    Angular: Boolean
    Clojure: Boolean
    iOS: Boolean
    Java: Boolean
    JavaScript: Boolean
    Node: Boolean
    React: Boolean
    Scala: Boolean
  }

  input InterestsInput {
    Net: Boolean
    Android: Boolean
    Angular: Boolean
    Clojure: Boolean
    iOS: Boolean
    Java: Boolean
    JavaScript: Boolean
    Node: Boolean
    React: Boolean
    Scala: Boolean
  }

  input QuizEntryInput {
    termsOfService: Boolean
    subject: String
    details: DetailsInput
    interests: InterestsInput
  }

  type Score {
    score: Int
    answersReview: [CorrectAnswers]
  }

  type CorrectAnswers {
    question: String
    answer: String
    answeredCorrectly: Boolean
    difficulty: Int
  }

  input AnswerEntryInput{
    token: String!
    subject: String!
    answers: [AnswerInput]
  }

  input AnswerInput{
    question: String!
    answer: String!
  }

  type Question {
    code: String
    id: String
    text: String
    subject: String
    difficulty: Int
    answers: [Answer]
  }

  type Answer {
    text: String
  }

  type ScoreBoard {
    subject:String
    ninjas:[ninjaShot]
  }

  type ninjaShot {
    firstname: String
    lastname: String
    score: Int
    elapsed: Int
  }

  type Query {
    quizQuestions(subject:String!): [Question]
    quizScoreboard:[ScoreBoard]
  }

  type Mutation {
    createAnswerEntry(answerEntry:AnswerEntryInput):Score
    createQuizEntry(quizEntry:QuizEntryInput):QuizEntry
  }
`
const schema = makeExecutableSchema({typeDefs, resolvers})

module.exports.schema = schema
