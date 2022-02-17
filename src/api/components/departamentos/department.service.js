//import sequelize from '../../../db/orm/sequelize'
import boom from '@hapi/boom'
//import DataBase from '../../../db/orm/DataBase'
import db from '../../../db/sequelize'
class DeparmentService {
  constructor() {}

  // async getModel() {
  //   this.db = await DataBase.getModels()
  // }

  // static async getInstance() {
  //   if (!DeparmentService._departmentsServiceInstance) {
  //     DeparmentService._departmentsServiceInstance = new DeparmentService()
  //     await DeparmentService._departmentsServiceInstance.getModel()
  //   }
  //   return DeparmentService._departmentsServiceInstance
  // }

  async create(data) {
    try {
      //db.models.d
      //const db = await DataBase.getDB()
      const model = db.models.Department
      const newUser = await model.create(data)
      return newUser
    } catch (error) {
      throw error
    }
  }
  async findAll() {
    try {
      //const db = await DataBase.getDB()
      const model = await db.models.Department
      return await model.findAll({
        include: ['user'],
        order: [['id', 'ASC']]
      })
    } catch (error) {
      throw error
    }
  }

  async findOne(id) {
    try {
      //const db = await DataBase.getDB()
      const model = db.models.Department
      const department = await model.findByPk(id, {
        include: ['user']
      })
      if (!department) {
        throw boom.notFound(
          `Departamento con id ${id} no encontrado!!!`
        )
      }
      return department
    } catch (error) {
      throw error
    }
  }

  async update(id, changes) {
    try {
      //const db = await DataBase.getDB()
      //const model = db.models.department
      const deparment = await this.findOne(id)
      const rta = deparment.update(changes)
      delete rta.user
      return rta
    } catch (error) {
      throw error
    }
  }

  async delete(id) {
    try {
      //const db = await DataBase.getDB()
      //const model = db.models.department
      const deparment = await this.findOne(id)
      deparment.destroy()
      return {
        message: `el departmento ${deparment.name} fue eliminado con exito`
      }
    } catch (error) {
      throw error
    }
  }
}

export default DeparmentService
