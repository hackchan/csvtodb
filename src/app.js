import express, { json, urlencoded } from 'express'
import routers from './routers'
import {
  boomErroHandler,
  errorHandler,
  ormError
} from './middlewares/errors'
import cors from 'cors'
import morgan from 'morgan'
import config from './config'
const app = express()

const port = config.port

//settings
app.set('port', port || 3000)

//Middlewares
app.use(cors())
app.use(morgan('dev'))
app.use(express.static('public'))
app.use(urlencoded({ extended: true }))
app.use(json())

//routers
routers(app)

//midlewares error
//app.use(logError)
app.use(ormError)
app.use(boomErroHandler)
app.use(errorHandler)
export default app
