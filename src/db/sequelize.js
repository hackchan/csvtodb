import { Sequelize, Op } from 'sequelize'
import config from '../config'
import setupModel from './models'

const USER = encodeURIComponent(config.db.user)
const PASSWORD = encodeURIComponent(config.db.password)
const URI = `${config.db.dialect}://${USER}:${PASSWORD}@${config.db.server}:${config.db.port}/${config.db.dbName}`

const sequelize = new Sequelize(URI, {
  dialect: config.db.dialect,
  dialectOptions: {
    instanceName: 'instancename',
    trustServerCertificate: true
  },
  // options: {
  //   encrypt: true, // for azure
  //   trustServerCertificate: true // change to true for local dev / self-signed certs
  // },
  loggin: config.dev,
  operatorsAliases: {
    $eq: Op.eq,
    $ne: Op.ne,
    $gte: Op.gte,
    $gt: Op.gt,
    $lte: Op.lte,
    $lt: Op.lt,
    $not: Op.not,
    $in: Op.in,
    $notIn: Op.notIn,
    $is: Op.is,
    $like: Op.like,
    $notLike: Op.notLike,
    $iLike: Op.iLike,
    $notILike: Op.notILike,
    $regexp: Op.regexp,
    $notRegexp: Op.notRegexp,
    $iRegexp: Op.iRegexp,
    $notIRegexp: Op.notIRegexp,
    $between: Op.between,
    $notBetween: Op.notBetween,
    $overlap: Op.overlap,
    $contains: Op.contains,
    $contained: Op.contained,
    $adjacent: Op.adjacent,
    $strictLeft: Op.strictLeft,
    $strictRight: Op.strictRight,
    $noExtendRight: Op.noExtendRight,
    $noExtendLeft: Op.noExtendLeft,
    $and: Op.and,
    $or: Op.or,
    $any: Op.any,
    $all: Op.all,
    $values: Op.values,
    $col: Op.col
  },
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
