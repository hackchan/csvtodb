import { success } from '../../../utils/response'
import EntidadService from './service'

const entidadService = new EntidadService()
export const crearEntidad = async (req, res, next) => {
  try {
    success(req, res, {}, 200)
  } catch (error) {
    next(error)
  }
}

export const getEntidad = async (req, res, next) => {
  try {
    success(req, res, {}, 200)
  } catch (error) {
    next(error)
  }
}

export const getAllEntidad = async (req, res, next) => {
  try {
    const listaEntidades = await entidadService.find()
    success(req, res, listaEntidades, 200)
  } catch (error) {
    next(error)
  }
}
