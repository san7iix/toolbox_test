import express, { json, urlencoded } from 'express'
import cors from 'cors'
import { filesRoutes } from './routes/filesRoutes.mjs'
import { errorHandler } from './middlewares/errorhandler.middleware.mjs'

const app = express()

app.use(json())
app.use(urlencoded({ extended: true }))
app.use(cors())

app.use('/files', filesRoutes)

app.use(errorHandler)

export { app }
