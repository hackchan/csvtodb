import TipoEntidadesService from './service'
import { success } from '../../../utils/response'
const serviceTipo = new TipoEntidadesService()

export const listarTipos = async (req, res, next) => {
  try {
    const tipos = await serviceTipo.findAll()
    success(req, res, tipos)
  } catch (error) {
    next(error)
  }
}

export const listarTiposById = async (req, res, next) => {
  try {
    const { id } = req.params
    const tipo = await serviceTipo.findOne(id)
    success(req, res, tipo)
  } catch (error) {
    next(error)
  }
}

export const addTipo = async (req, res, next) => {
  try {
    const user = req.body
    const tipo = await serviceTipo.create(user)
    success(req, res, tipo, 201)
  } catch (error) {
    next(error)
  }
}

export const updateTipo = async (req, res, next) => {
  try {
    const { id } = req.params
    const changes = req.body
    const tipoUpdated = await serviceTipo.update(id, changes)
    success(req, res, tipoUpdated, 202)
  } catch (error) {
    next(error)
  }
}

export const deleteTipo = async (req, res, next) => {
  try {
    const { id } = req.params
    const tipoDeleted = await serviceTipo.delete(id)
    success(req, res, tipoDeleted, 202)
  } catch (error) {
    next(error)
  }
}
