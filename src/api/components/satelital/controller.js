import { success } from '../../../utils/response'
import SatelitalService from './service'

const serviceSatelital = new SatelitalService()

export const listarSatelitales = async (req, res, next) => {
  try {
    const lista = await serviceSatelital.findall()
    success(req, res, lista, 200)
  } catch (error) {
    next(error)
  }
}

export const listarSatelitalesById = async (req, res, next) => {
  try {
    const { id } = req.params
    const satelital = await serviceSatelital.findOne(id)
    success(req, res, satelital, 200)
  } catch (error) {
    next(error)
  }
}

export const addSatelital = async (req, res, next) => {
  try {
    const data = req.body
    const lista = await serviceSatelital.create(data)
    success(req, res, lista, 200)
  } catch (error) {
    next(error)
  }
}

export const updateSatelital = async (req, res, next) => {
  try {
    const data = req.body
    const { id } = req.params
    const satelital = await serviceSatelital.update(id, data)
    success(req, res, satelital, 200)
  } catch (error) {
    next(error)
  }
}

export const deleteSatelital = async (req, res, next) => {
  try {
    const { id } = req.params
    const satelital = await serviceSatelital.delete(id)
    success(req, res, satelital, 200)
  } catch (error) {
    next(error)
  }
}
