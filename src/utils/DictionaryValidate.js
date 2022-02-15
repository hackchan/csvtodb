/* eslint-disable no-async-promise-executor */
import rulerDictionary from './dictionary.json'
import { findDicci } from './validate'
class DictionaryValidate {
  constructor() {}
  async validaNoDataEmpty(dataJson) {
    try {
      if (dataJson.length <= 0) {
        throw new Error('Archivo vácio!!!')
      }
      return true
    } catch (error) {
      throw error
    }
  }
  async detectarDiccionario(dataJson) {
    try {
      await this.validaNoDataEmpty(dataJson)
      const campos = Object.keys(dataJson[0])
      const determinaDicci = await findDicci(
        rulerDictionary,
        campos
      )

      if (!rulerDictionary[determinaDicci]) {
        throw new Error(
          'no se pudo establecer un diccionario'
        )
      }

      return rulerDictionary[determinaDicci]
    } catch (error) {
      throw error
    }
  }
}

export default DictionaryValidate
