'use strict'
const {
  authSchema,
  tableName: tableNameAuth
} = require('../models/Auth')
const {
  userSchema,
  tableName: tableNameUser
} = require('../models/User')
// const {
//   SatelitalSchema,
//   tableName: tableNameSatelital
// } = require('../models/Satelital')
// const {
//   DepartmentSchema,
//   tableName: tableNameDepartment
// } = require('../models/Deparments')
// const {
//   tipoEntidadSchema,
//   tableName: tentidad
// } = require('../models/TipoEntidad')
// const {
//   entidadSchema,
//   tableName: tableNameEntidad
// } = require('../models/Entidad')

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
  },

  down: async (queryInterface) => {
    await queryInterface.droptable(
      tableNameAuth,
      authSchema
    )
    await queryInterface.dropTable(
      tableNameUser,
      userSchema
    )
    // await queryInterface.dropTable(tableNameSatelital)
    // await queryInterface.dropTable(tableNameDepartment)
    // await queryInterface.dropTable(
    //   tentidad,
    //   tipoEntidadSchema
    // )
    // await queryInterface.dropTable(
    //   tableNameEntidad,
    //   entidadSchema
    // )
  }
}
