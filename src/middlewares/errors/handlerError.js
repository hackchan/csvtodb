import { error } from '../../utils/response'
import config from '../../config'

export function errorHandler(err, req, res, next) {
  const msnError = {
    statusCode: err.statusCode || 500,
    error: err.descStatus,
    message: err.message
  }
  if (config.dev) {
    msnError.stack = err.stack
  }
  error(req, res, msnError, 500)
  next()
}
