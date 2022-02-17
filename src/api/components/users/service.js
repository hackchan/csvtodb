import db from '../../../db/sequelize'
import boom from '@hapi/boom'
class UserService {
  constructor() {}

  async create(data) {
    const newUser = await db.models.User.create(data, {
      include: ['auth']
    })
    return newUser
  }

  async findAll() {
    try {
      const list = await db.models.User.findAll({
        include: ['auth']
      })
      return list
    } catch (error) {
      throw error
    }
  }

  async findOne(id) {
    try {
      const user = await db.models.User.findByPk(id)
      if (!user) {
        throw boom.notFound('user not found')
      }
      return user
    } catch (error) {
      throw error
    }
  }

  async update(id, changes) {
    const user = await this.findOne(id)
    const rta = await user.update(changes)
    return rta
  }

  async delete(id) {
    const user = await this.findOne(id)
    await user.destroy()
    return { id }
  }
}

export default UserService
