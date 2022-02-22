'use strict'
const { authSchema, tableName } = require('../models/Auth')

module.exports = {
  async up(queryInterface) {
    await queryInterface.createTable(tableName, authSchema)
  },

  async down(queryInterface) {
    await queryInterface.dropTable(tableName)
  }
}
