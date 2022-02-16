/* eslint-disable no-async-promise-executor */
import rulerDictionary from './dictionary.json'
import {
  findDicci,
  isValidData,
  validExponencial,
  validCampoIsNotNull,
  findSeparadorPunto,
  validIsValidNumber,
  validIsNit,
  validIsNumber,
  findNoExistComas,
  validFormatDate,
  validStringNoEmpty,
  validStringNA
} from './validateMasive'
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

  async validarInformacion(dataJson, dictionary) {
    return new Promise(async (resolve, reject) => {
      try {
        const listaErrores = new Set()
        let numeroFila = 2
        for (let fila of dataJson) {
          const filaKeys = Object.keys(fila)
          for (let columna of filaKeys) {
            const campo = fila[columna]
            const regla = dictionary[columna]

            await isValidData(
              numeroFila,
              columna,
              campo,
              regla,
              listaErrores
            )
            await validExponencial(
              numeroFila,
              columna,
              campo,
              regla,
              listaErrores
            )
            if (regla.tipo === 'Number' && regla.coma) {
              await validCampoIsNotNull(
                numeroFila,
                columna,
                campo,
                regla,
                listaErrores
              )
              // await findSeparadorPunto(
              //   numeroFila,
              //   columna,
              //   campo,
              //   regla,
              //   listaErrores
              // )
              // await findSeparadorComa(
              //   numeroFila,
              //   columna,
              //   campo,
              //   regla,
              //   listaErrores
              // )
              await validIsValidNumber(
                numeroFila,
                columna,
                campo,
                listaErrores
              )
            } else if (
              regla.tipo === 'Number' &&
              !regla.coma
            ) {
              if (regla.nit) {
                await validIsNit(
                  numeroFila,
                  columna,
                  campo,
                  listaErrores
                )
              }
              await validIsNumber(
                numeroFila,
                columna,
                campo,
                listaErrores
              )
              await findNoExistComas(
                numeroFila,
                columna,
                campo,
                regla,
                listaErrores
              )
              await findSeparadorPunto(
                numeroFila,
                columna,
                campo,
                regla,
                listaErrores
              )
            } else if (regla.tipo === 'Date') {
              await validFormatDate(
                numeroFila,
                columna,
                campo,
                regla,
                listaErrores
              )
            } else if (regla.tipo === 'String') {
              await validStringNoEmpty(
                numeroFila,
                columna,
                campo,
                regla,
                listaErrores
              )
              await validStringNA(
                numeroFila,
                columna,
                campo,
                regla,
                listaErrores
              )
            }
          }
          numeroFila++
        }
        if (listaErrores.size > 0) {
          const err = Array.from(listaErrores)
          console.log('errore:', err)
          reject(err)
        }
        resolve({ msn: 'archivo validado con exito!!' })
      } catch (error) {
        reject(error)
      }
    })
  }
}

export default DictionaryValidate
