import { Sequelize } from 'sequelize'
import config from '../config'
import setupModel from './models'

const USER = encodeURIComponent(config.db.user)
const PASSWORD = encodeURIComponent(config.db.password)
const URI = `${config.db.dialect}://${USER}:${PASSWORD}@${config.db.server}:${config.db.port}/${config.db.dbName}`

const sequelize = new Sequelize(URI, {
  dialect: config.db.dialect,
  loggin: config.dev,
  pool: {
    max: 20,
    min: 20,
    require: 30000,
    idle: 10000
  }
})

sequelize
  .authenticate()
  .then(() => {
    setupModel(sequelize)
    //sequelize.sync()
    console.log(
      'Connection has been established successfully.'
    )
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err)
  })

export default sequelize
