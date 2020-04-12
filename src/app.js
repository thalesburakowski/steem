require('dotenv').config({
  path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env'
})

require('./database')

const express = require('express')
const app = express()

app.use(express.json())

module.exports = app
