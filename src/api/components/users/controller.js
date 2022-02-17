import UserService from './service'
import { success } from '../../../utils/response'
const serviceUser = new UserService()

export const listarUsuarios = async (req, res, next) => {
  try {
    const usuarios = await serviceUser.findAll()
    success(req, res, usuarios)
  } catch (error) {
    next(error)
  }
}

export const listarUsuarioById = async (req, res, next) => {
  try {
    const { id } = req.params
    const usuario = await serviceUser.findOne(id)
    success(req, res, usuario)
  } catch (error) {
    next(error)
  }
}

export const addUser = async (req, res, next) => {
  try {
    const user = req.body
    const usuario = await serviceUser.create(user)
    success(req, res, usuario, 201)
  } catch (error) {
    next(error)
  }
}

export const updateUser = async (req, res, next) => {
  try {
    const { id } = req.params
    const changes = req.body
    const usuarioUpdated = await serviceUser.update(id, changes)
    success(req, res, usuarioUpdated, 202)
  } catch (error) {
    next(error)
  }
}

export const deleteUser = async (req, res, next) => {
  try {
    const { id } = req.params
    const usuarioDeleted = await serviceUser.delete(id)
    success(req, res, usuarioDeleted, 202)
  } catch (error) {
    next(error)
  }
}
