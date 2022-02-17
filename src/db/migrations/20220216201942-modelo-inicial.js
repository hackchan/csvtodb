'use strict'
const {
  authSchema,
  tableName: tableNameAuth
} = require('../models/Auth')
const {
  userSchema,
  tableName: tableNameUser
} = require('../models/User')
const {
  SatelitalSchema,
  tableName: tableNameSatelital
} = require('../models/Satelital')
const {
  DepartmentSchema,
  tableName: tableNameDepartment
} = require('../models/Deparments')
const {
  tipoEntidadSchema,
  tableName: tentidad
} = require('../models/TipoEntidad')
const {
  entidadSchema,
  tableName: tableNameEntidad
} = require('../models/Entidad')

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.createTable(
      tableNameAuth,
      authSchema
    )
    await queryInterface.createTable(
      tableNameUser,
      userSchema
    )
    await queryInterface.createTable(
      tableNameSatelital,
      SatelitalSchema
    )
    await queryInterface.createTable(
      tableNameDepartment,
      DepartmentSchema
    )
    await queryInterface.createTable(
      tentidad,
      tipoEntidadSchema
    )
    await queryInterface.createTable(
      tableNameEntidad,
      entidadSchema
    )
  },

  down: async (queryInterface) => {
    // await queryInterface.dropTable(tableNameEntidad)
    // await queryInterface.dropTable(tipoEntidadSchema)
    // await queryInterface.dropTable(tableNameDepartment)
    // await queryInterface.dropTable(tableNameSatelital)
    // await queryInterface.dropTable(tableNameUser)
    // await queryInterface.dropTable(tableNameAuth)
    await queryInterface.dropAllTables()
  }
}
