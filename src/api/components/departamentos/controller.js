import { success } from '../../../utils/response'
//import dataBase from '../../../db/orm/DataBase'
import DepartmentService from './department.service'
const serviceDepart = new DepartmentService()
export const createDepartment = async (req, res, next) => {
  try {
    //const services = await DepartmentService.getInstance()
    const datos = req.body
    const newDepart = await serviceDepart.create(datos)
    success(req, res, newDepart, 201)
  } catch (error) {
    next(error)
  }
}

export const listAllDeparts = async (req, res, next) => {
  try {
    //const services = await DepartmentService.getInstance()
    const lista = await serviceDepart.findAll()
    success(req, res, lista, 201)
  } catch (error) {
    next(error)
  }
}

export const listByIdDepart = async (req, res, next) => {
  try {
    const { id } = req.params
    const department = await serviceDepart.findOne(id)
    success(req, res, department, 201)
  } catch (error) {
    next(error)
  }
}

export const updateDepartment = async (req, res, next) => {
  try {
    const { id } = req.params
    const changes = req.body
    const department = await serviceDepart.update(id, changes)
    success(req, res, department, 201)
  } catch (error) {
    next(error)
  }
}

export const deleteDepartment = async (req, res, next) => {
  try {
    const { id } = req.params
    const department = await serviceDepart.delete(id)
    success(req, res, department, 201)
  } catch (error) {
    next(error)
  }
}
