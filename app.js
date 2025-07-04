const express = require('express')
const app = express()
const port = 3000

const question1 = require('./routes/question1')
const question2 = require('./routes/question2')
const question3 = require('./routes/question3')

// Base
app.get('/', (req, res) => {
  res.send('Welcome to the NodeJS/Express Assignment')
})

// Question routes
app.use('/question1', question1)
app.use('/question2', question2)
app.use('/question3', question3)

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`)
})