import { success } from '../../../utils/response'
import CircularService from './service'

const serviceCircular = new CircularService()
export const listarCircular = async (req, res, next) => {
  try {
    const listaCirular = await serviceCircular.findAll()
    success(req, res, listaCirular, 200)
  } catch (error) {
    next(error)
  }
}

export const listarCircularById = async (req, res, next) => {
  try {
    const { id } = req.params
    const circular = await serviceCircular.findOne(id)
    success(req, res, circular, 200)
  } catch (error) {
    next(error)
  }
}

export const addCircular = async (req, res, next) => {
  try {
    const data = req.body
    const circular = await serviceCircular.create(data)
    success(req, res, circular, 201)
  } catch (error) {
    next(error)
  }
}

export const updateCircular = async (req, res, next) => {
  try {
    const changes = req.body
    const { id } = req.params
    const circular = await serviceCircular.update(id, changes)
    success(req, res, circular, 202)
  } catch (error) {
    next(error)
  }
}

export const deleteCircular = async (req, res, next) => {
  try {
    const { id } = req.params
    const circular = await serviceCircular.delete(id)
    success(req, res, circular, 202)
  } catch (error) {
    next(error)
  }
}
