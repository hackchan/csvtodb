'use strict'
const { userSchema, tableName } = require('../models/User')
// const {
module.exports = {
  async up(queryInterface) {
    await queryInterface.createTable(tableName, userSchema)
  },

  async down(queryInterface) {
    await queryInterface.dropTable(tableName)
  }
}
