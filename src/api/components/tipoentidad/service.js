import db from '../../../db/sequelize'
import boom from '@hapi/boom'
class TipoEntidadesService {
  constructor() {}

  async create(data) {
    const newTipo = await db.models.tipoentidades.create(
      data
    )
    return newTipo
  }

  async findAll() {
    try {
      const list = await db.models.tipoentidades.findAll()
      return list
    } catch (error) {
      throw error
    }
  }

  async findOne(id) {
    try {
      const tipo = await db.models.tipoentidades.findByPk(
        id
      )
      console.log('tipo:', tipo)
      if (!tipo) {
        throw boom.notFound('tipo not found')
      }
      return tipo
    } catch (error) {
      throw error
    }
  }

  async update(id, changes) {
    const tipo = await this.findOne(id)
    const rta = await tipo.update(changes)
    return rta
  }

  async delete(id) {
    const tipo = await this.findOne(id)
    await tipo.destroy()
    return { id }
  }
}

export default TipoEntidadesService
