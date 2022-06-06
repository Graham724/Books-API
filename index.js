// DEPENDENCIES
const express = require('express')
const mongoose = require('mongoose')
const booksRoutes = require('./controllers/books')

// CONFIGURATION
require('dotenv').config()
const PORT = process.env.PORT
const app = express()
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true}, 
    () => { console.log('connected to mongo: ', process.env.MONGO_URI) }
)

// middleware
app.use(express.json())

// ROUTES
app.get('/', (req, res) => {
    res.send('Welcome to the Books API')
  })

  app.use('/books', booksRoutes)

  app.listen(PORT, () => {
    console.log('Greetings! From port: ', PORT);
  })