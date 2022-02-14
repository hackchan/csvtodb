import { error } from '../../utils/response'

export function boomErroHandler(err, req, res, next) {
  if (err.isBoom) {
    const {
      output: { statusCode, payload }
    } = err
    error(req, res, payload, statusCode)
  } else {
    next(err)
  }
}
