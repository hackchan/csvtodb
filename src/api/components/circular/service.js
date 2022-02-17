import db from '../../../db/sequelize'
import boom from '@hapi/boom'
class Circular {
  construnctor() {}
  async create(data) {
    const newCircular = await db.models.circular.create(
      data
    )
    return newCircular
  }

  async update(id, changes) {
    const circular = await this.findOne(id)
    const rta = await circular.update(changes)
    return rta
  }

  async delete(id) {
    const circular = await this.findOne(id)
    await circular.destroy()
    return { id }
  }

  async findAll() {
    try {
      const list = await db.models.circular.findAll({})
      return list
    } catch (error) {
      throw error
    }
  }

  async findOne(id) {
    try {
      const circular = await db.models.circular.findByPk(id)
      if (!circular) {
        throw boom.notFound('circular no encontrada')
      }
      return circular
    } catch (error) {
      throw error
    }
  }
}

export default Circular
