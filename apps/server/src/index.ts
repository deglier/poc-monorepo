import express from 'express'
import { PrismaClient, User } from '@prisma/client'

const prisma = new PrismaClient()
const app = express()
const port = 4000

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World haha!')
})

app.post('/user', async (req, res) => {
  const { email, name } = req.body as User
  try {
    await prisma.user.create({
      data: {
        email,
        name,
      },
    })
    res.status(201).send({})
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    res.status(500).json({ error: error.message })
  }
})

app.get('/users', async (req, res) => {
  const users = await prisma.user.findMany()
  res.json(users)
})

app.listen(port, () => {
  // show console log whith rocket emoji
  console.log(`🚀 Server is running on port ${port}`)
})
