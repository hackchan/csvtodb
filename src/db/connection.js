import sql from 'mssql'
import config from '../config'
const dbSettings = {
  user: config.db.user,
  password: config.db.password,
  database: config.db.dbName,
  server: config.db.server,
  //port: config.db.port,
  dialect: config.db.dialect,
  options: {
    encrypt: true, // for azure
    trustServerCertificate: true // change to true for local dev / self-signed certs
  }
}

sql.connect(dbSettings)

async function getConnection() {
  try {
    const pool = await sql.connect(dbSettings)
    return pool
    // const result = await pool.request().query('SELECT 1')
    // console.log(result)
  } catch (error) {
    throw error
  }
}

getConnection()
