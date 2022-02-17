import AuthService from './service'
import { success } from '../../../utils/response'
const serviceAuth = new AuthService()

export const listAuths = async (req, res, next) => {
  try {
    const auths = await serviceAuth.findAll()
    success(req, res, auths)
  } catch (error) {
    next(error)
  }
}

export const listAuthsById = async (req, res, next) => {
  try {
    const { id } = req.params
    const auth = await serviceAuth.findOne(id)
    success(req, res, auth)
  } catch (error) {
    next(error)
  }
}

export const addAuth = async (req, res, next) => {
  try {
    const data = req.body
    const auth = await serviceAuth.create(data)
    success(req, res, auth)
  } catch (error) {
    next(error)
  }
}

export const updateAuth = async (req, res, next) => {
  try {
    const { id } = req.params
    const changes = req.body
    const auth = await serviceAuth.update(id, changes)
    success(req, res, auth)
  } catch (error) {
    next(error)
  }
}

export const deleteAuth = async (req, res, next) => {
  try {
    const { id } = req.params
    const auth = await serviceAuth.delete(id)
    success(req, res, auth)
  } catch (error) {
    next(error)
  }
}
