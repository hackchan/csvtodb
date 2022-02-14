import { success } from '../../../utils/response'
import Csv from '../../../utils/Cvs'
import File from '../../../utils/File'
export const loadCsv = async (req, res, next) => {
  try {
    const serviceCsv = new Csv()
    const serviceFile = new File()
    const fileEntidad = req.file
    const jsonData = await serviceCsv.csvtojson({
      file: fileEntidad.filename
    })
    await serviceFile.deleteFile({
      file: fileEntidad.filename
    })
    console.log('req:', req)
    console.log('fileEntidad:', fileEntidad)
    console.log('json:', jsonData)
    success(req, res, { test: 'load csv file test' }, 200)
  } catch (error) {
    console.log(' OOOOOO MY GOODNESSs')
    next(error)
  }
}
