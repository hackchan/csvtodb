import db from '../../../db/sequelize'
import boom from '@hapi/boom'
class AuthService {
  constructor() {}

  async create(data) {
    const newAuth = await db.models.Auth.create(data)
    return newAuth
  }

  async findAll() {
    try {
      const list = await db.models.Auth.findAll({
        include: ['user']
      })
      return list
    } catch (error) {
      throw error
    }
  }

  async findOne(id) {
    try {
      const auth = await db.models.Auth.findByPk(id)
      if (!auth) {
        throw boom.notFound('auth not found')
      }
      return auth
    } catch (error) {
      throw error
    }
  }

  async update(id, changes) {
    const auth = await this.findOne(id)
    const rta = await auth.update(changes)
    return rta
  }

  async delete(id) {
    const auth = await this.findOne(id)
    await auth.destroy()
    return { id }
  }
}

export default AuthService
