import { error } from '../../utils/response'
import config from '../../config'
import { ValidationError } from 'sequelize'

export function ormError(err, req, res, next) {
  if (err instanceof ValidationError) {
    const msnError = {
      statusCode: 409,
      message: err.name,
      error: err.errors
    }
    //   if (config.dev) {
    //     msnError.stack = err.stack
    //   }
    error(req, res, msnError, 500)
    next()
  }
  next(err)
}
