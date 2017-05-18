'use strict'

const express = require('express')
const graphqlExpress = require('graphql-server-express').graphqlExpress
const graphiqlExpress = require('graphql-server-express').graphiqlExpress
const bodyParser = require('body-parser')

const quizSchema = require('../schemas/quiz.schema').schema

const router = express.Router()

// http://localhost:3000/graphql?query={__schema{types{name}}}
// http://localhost:3000/graphql?query={quizEntries{firstName,lastName}}
router.use('/graphql', bodyParser.json(), graphqlExpress({
  schema:
    quizSchema
}))

// http://localhost:3000/graphiql?query={__schema{types{name}}}
if (process.env.NODE_ENV === 'development') {
  router.use('/graphiql', graphiqlExpress({endpointURL: '/graphql'}))
}
// ===================================server

module.exports = {
  router: router
}
