import express from 'express'

const app = express()
const port = 4000

app.get('/', (_req, res) => {
  res.send('Hello World haha!')
})

app.listen(port, () => {
  // show console log whith rocket emoji
  console.log(`🚀 Server is running on port ${port}`)
})
