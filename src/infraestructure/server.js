import express, { json, urlencoded } from 'express'
import cors from 'cors'
import { filesRoutes } from './routes/filesRoutes.js'
import { errorHandler } from './middlewares/errorhandler.middleware.js'

const app = express()

app.use(json())
app.use(urlencoded({ extended: true }))
app.use(cors())

app.use('/files', filesRoutes)

app.use(errorHandler)

export { app }
