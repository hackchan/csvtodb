import { error } from '../../utils/response'
import config from '../../config'

export function errorHandler(err, req, res, next) {
  const msnError = {}
  if (Array.isArray(err)) {
    msnError.statusCode = 500
    msnError.message = err
  } else {
    msnError.statusCode = err.statusCode || 500
    msnError.error = err.descStatus
    msnError.message = err.message
  }
  if (config.dev) {
    msnError.stack = err.stack
  }
  error(req, res, msnError, 500)
  next()
}
