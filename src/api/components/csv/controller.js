import { success } from '../../../utils/response'
import Csv from '../../../utils/Cvs'
import File from '../../../utils/File'
import DictionaryValidate from '../../../utils/DictionaryValidate'
export const loadCsv = async (req, res, next) => {
  try {
    const serviceCsv = new Csv()
    const serviceFile = new File()
    const serviceDictionary = new DictionaryValidate()
    const fileEntidad = req.file
    const jsonData = await serviceCsv.csvtojson({
      file: fileEntidad.filename
    })
    await serviceFile.deleteFile({
      file: fileEntidad.filename
    })
    const dicciFile =
      await serviceDictionary.detectarDiccionario(jsonData)
    console.log('diccionario sel:', dicciFile)
    // console.log('req:', req)
    // console.log('fileEntidad:', fileEntidad)
    // console.log('json:', jsonData)
    success(req, res, { test: 'load csv file test' }, 200)
  } catch (error) {
    next(error)
  }
}
