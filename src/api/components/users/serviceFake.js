import faker from 'faker'
import boom from '@hapi/boom'
//import ResourceService from '../../../db/driver/ResourceService'
//const UserDB = new ResourceService('users')
//import Users from '../../../db/orm/models/Users'
class UserService {
  constructor() {
    this.usuarios = []
    this.init()
  }
  init() {
    for (let index = 0; index < 50; index++) {
      this.usuarios.push({
        id: faker.datatype.uuid(),
        name: `${faker.name.firstName()} ${faker.name.lastName()}`,
        avatar: faker.image.imageUrl(),
        email: faker.internet.email(),
        password: faker.internet.password()
      })
    }
  }
  async findAll() {
    try {
      //const rta = await Users.findAll()
      //const rta = UserDB.findAll()
      //return rta
      //return this.usuarios
      //return rta
    } catch (error) {
      throw error
    }
  }
  async findOne(id) {
    try {
      const index = this.usuarios.findIndex((user) => user.id === id)
      if (index === -1) {
        throw boom.notFound('Usuario no encontrado')
      }
      return this.usuarios[index]
    } catch (error) {
      throw error
    }
  }

  async create(user) {
    try {
      if (!user) {
        throw boom.notImplemented('se requiere datos de usuario para su creacion')
      }
      const id = faker.datatype.uuid()
      const userCreate = {
        id,
        ...user
      }
      this.usuarios.push(userCreate)
      return { message: 'usuario creado con exito' }
    } catch (error) {
      throw error
    }
  }

  async update(id, changes) {
    const index = this.usuarios.findIndex((user) => user.id === id)
    if (index === -1) {
      throw boom.notFound('usario no encontrado')
    }
    const user = this.usuarios[index]
    const userUpdate = {
      ...user,
      ...changes
    }
    this.usuarios[index] = userUpdate
    return userUpdate
  }

  async delete(id) {
    try {
      const index = this.usuarios.findIndex((user) => user.id === id)
      if (index === -1) {
        throw boom.notFound('usario no encontrado')
      }
      this.usuarios.splice(index, 1)
      return { message: `usuario con id ${id} eliminado con exito` }
    } catch (error) {
      throw error
    }
  }
}

export default UserService
