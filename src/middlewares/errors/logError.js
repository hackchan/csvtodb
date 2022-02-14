

export function logError(err, req, res, next) {
  console.log(err)
  next(err)
}
