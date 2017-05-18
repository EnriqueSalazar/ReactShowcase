'use strict'

const express = require('express')
const path = require('path')

const webpack = require('./server/lib/webpack')

const app = express()

app.disable('x-powered-by')

// eslint-disable-next-line no-console
console.log('process.env.NODE_ENV', process.env.NODE_ENV)

// app.use((req, res, next) => {
//   // eslint-disable-next-line no-console
//   console.error('req.path :', req.hostname, req.path)
//   next()
// })

app.use(webpack.router)

app.use('/static', express.static(path.resolve(__dirname, 'dist')))

app.get(['/'], (req, res) => {
  res.sendFile('./dist/index.html', {root: __dirname})
})
function redirectUnmatched (req, res) {
  res.redirect('/')
}
app.use(redirectUnmatched) // redirect if nothing else sent a response

const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`App listening on port ${PORT}`)
  // eslint-disable-next-line no-console
  console.log('Press Ctrl+C to quit.')
})
