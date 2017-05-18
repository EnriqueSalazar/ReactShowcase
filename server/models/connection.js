const mongoose = require('mongoose')

const db = mongoose.createConnection('mongodb://localhost/Quiz2')

db.on('error', function (err) {
  if (err) throw err
})

db.once('open', function callback () {
  console.info('Mongo db connected successfully')// eslint-disable-line no-console, max-len
})

module.exports.default = db
