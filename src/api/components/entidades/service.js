import db from '../../../db/sequelize'

class EntidadService {
  constructor() {}

  async find() {
    try {
      const list = await db.models.Entidad.findAll()
      return list
    } catch (error) {
      throw error
    }
  }
}

export default EntidadService
