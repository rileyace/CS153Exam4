
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World from Express!')
})

app.get('/demo', (req, res) => {
  res.send(`
    <html>
      <head><title>Demo</title></head>
      <body>
        <h1>Screen Layout Placeholder</h1>
      </body>
    </html>
  `)
})

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`)
})

