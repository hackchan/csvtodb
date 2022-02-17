import config from '../config'

const USER = encodeURIComponent(config.db.user)
const PASSWORD = encodeURIComponent(config.db.password)
const URI = `${config.db.dialect}://${USER}:${PASSWORD}@${config.db.server}:${config.db.port}/${config.db.dbName}`

module.exports = {
  development: {
    url: URI,
    dialect: config.db.dialect
  },
  production: {
    url: URI,
    dialect: config.db.dialect
  }
}
