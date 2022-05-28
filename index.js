import express from 'express'
import path from 'path'

const app = express()
const __dirname = path.resolve()
const PORT = 3000

// app.use(express.static(__dirname, 'client'))

app.listen(PORT, () =>
  console.log(`Server has been started on port ${PORT}...`),
)
