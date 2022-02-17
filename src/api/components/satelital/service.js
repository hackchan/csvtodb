import db from '../../../db/sequelize'
import boom from '@hapi/boom'
class Satelital {
  constructor() {}

  async create(data) {
    const newSatelital = await db.models.Satelital.create(
      data
    )
    return newSatelital
  }

  async findall() {
    try {
      const lista = await db.models.Satelital.findAll()
      return lista
    } catch (error) {
      throw error
    }
  }

  async findOne(id) {
    try {
      const satelital = await db.models.Satelital.findByPk(
        id
      )
      if (!satelital) {
        throw boom.notFound('satelital not found!!')
      }
      return satelital
    } catch (error) {
      throw error
    }
  }

  async update(id, changes) {
    const satelital = await this.findOne(id)
    const rta = await satelital.update(changes)
    return rta
  }

  async delete(id) {
    const satelital = await this.findOne(id)
    await satelital.destroy()
    return { id }
  }
}

export default Satelital
