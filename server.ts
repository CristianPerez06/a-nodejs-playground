import express from 'express'
import baseRoutes from './routes/base'
import filesRoutes from './routes/files'
import dotenv from 'dotenv'
import cors from 'cors'
import ErrorHandler from './middlewares/errorHandler'

dotenv.config()

const app = express()

app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// routes
app.use('/api/', baseRoutes)
app.use('/api/', filesRoutes)

// error handler
app.use(ErrorHandler)

const envPort = process.env.PORT

// -- In case port (or any other env variable is needed) --
// if (!envPort) {
//   throw new Error('PORT env variable must have a value.')
// }

const port = envPort || 4400
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`)
})
server.on('error', console.error)
