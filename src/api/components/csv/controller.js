import { success } from '../../../utils/response'

export const loadCsv = async (req, res, next) => {
  try {
    const fileEntidad = req.file
    console.log('fileEntidad:', fileEntidad)
    success(req, res, { test: 'load csv file test' }, 200)
  } catch (error) {
    next(error)
  }
}
