/* eslint-disable no-async-promise-executor */
import moment from 'moment'

export const findDicci = (dicci, columsDictionary) => {
  return new Promise(async (resolve, reject) => {
    try {
      const ejecucionIngreso = Object.keys(
        dicci.ejecucionIngreso
      )
      const relacionIngreso = Object.keys(
        dicci.relacionIngreso
      )
      const ejecucionGastos = Object.keys(
        dicci.ejecucionGastos
      )
      const relacioncdps = Object.keys(dicci.relacioncdps)
      const relacioncompromiso = Object.keys(
        dicci.relacioncompromiso
      )
      const relacionObligaciones = Object.keys(
        dicci.relacionObligaciones
      )
      const relacionPagos = Object.keys(dicci.relacionPagos)
      const auxliarSaldos = Object.keys(dicci.auxliarSaldos)
      const libroMayor = Object.keys(dicci.libroMayor)
      const estadoFinanciero = Object.keys(
        dicci.estadoFinanciero
      )
      const programasProyectos = Object.keys(
        dicci.estadoFinanciero
      )
      const contratacion = Object.keys(dicci.contratacion)
      const obras = Object.keys(dicci.obras)
      const obrasadicionales = Object.keys(
        dicci.obrasadicionales
      )
      const obrashitos = Object.keys(dicci.obrashitos)

      if (
        columsDictionary.length ===
          ejecucionIngreso.length &&
        columsDictionary.every(function (element) {
          return ejecucionIngreso.includes(element)
        })
      ) {
        resolve('ejecucionIngreso')
      } else if (
        columsDictionary.length ===
          relacionIngreso.length &&
        columsDictionary.every(function (element) {
          return relacionIngreso.includes(element)
        })
      ) {
        resolve('relacionIngreso')
      } else if (
        columsDictionary.length ===
          ejecucionGastos.length &&
        columsDictionary.every(function (element) {
          return ejecucionGastos.includes(element)
        })
      ) {
        resolve('ejecucionGastos')
      } else if (
        columsDictionary.length === relacioncdps.length &&
        columsDictionary.every(function (element) {
          return relacioncdps.includes(element)
        })
      ) {
        resolve('relacioncdps')
      } else if (
        columsDictionary.length ===
          relacioncompromiso.length &&
        columsDictionary.every(function (element) {
          return relacioncompromiso.includes(element)
        })
      ) {
        resolve('relacioncompromiso')
      } else if (
        columsDictionary.length ===
          relacionObligaciones.length &&
        columsDictionary.every(function (element) {
          return relacionObligaciones.includes(element)
        })
      ) {
        resolve('relacionObligaciones')
      } else if (
        columsDictionary.length === relacionPagos.length &&
        columsDictionary.every(function (element) {
          return relacionPagos.includes(element)
        })
      ) {
        resolve('relacionPagos')
      } else if (
        columsDictionary.length === auxliarSaldos.length &&
        columsDictionary.every(function (element) {
          return auxliarSaldos.includes(element)
        })
      ) {
        resolve('auxliarSaldos')
      } else if (
        columsDictionary.length === libroMayor.length &&
        columsDictionary.every(function (element) {
          return libroMayor.includes(element)
        })
      ) {
        resolve('libroMayor')
      } else if (
        columsDictionary.length ===
          estadoFinanciero.length &&
        columsDictionary.every(function (element) {
          return estadoFinanciero.includes(element)
        })
      ) {
        resolve('estadoFinanciero')
      } else if (
        columsDictionary.length ===
          programasProyectos.length &&
        columsDictionary.every(function (element) {
          return programasProyectos.includes(element)
        })
      ) {
        resolve('programasProyectos')
      } else if (
        columsDictionary.length === contratacion.length &&
        columsDictionary.every(function (element) {
          return contratacion.includes(element)
        })
      ) {
        resolve('contratacion')
      } else if (
        columsDictionary.length === obras.length &&
        columsDictionary.every(function (element) {
          return obras.includes(element)
        })
      ) {
        resolve('obras')
      } else if (
        columsDictionary.length ===
          obrasadicionales.length &&
        columsDictionary.every(function (element) {
          return obrasadicionales.includes(element)
        })
      ) {
        resolve('obrasadicionales')
      } else if (
        columsDictionary.length === obrashitos.length &&
        columsDictionary.every(function (element) {
          return obrashitos.includes(element)
        })
      ) {
        resolve('obrashitos')
      } else {
        throw new Error(
          `No se pudo determinar el tipo de matriz, valide que su archivo cumpla con el nombre y numero de columnas especificado en el diccionario de datos.`
        )
      }
    } catch (error) {
      reject(error)
    }
  })
}

export const findColumsExtra = (
  columsFile,
  columsDictionary
) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (columsFile.length > columsDictionary.length) {
        let difference = columsFile.filter(
          (column) =>
            !columsDictionary.includes(column.toLowerCase())
        )
        resolve(difference)
      } else {
        let difference = columsDictionary.filter(
          (column) => !columsFile.includes(column)
        )
        resolve(difference)
      }
    } catch (error) {
      reject(error)
    }
  })
}

export const findDuplicateObject = (reportData) => {
  return new Promise(async (resolve, reject) => {
    try {
      let fila1
      let fila2
      let filtrados = reportData.filter(
        (
          reportDataItem,
          reportDataIndice,
          reportDataArray
        ) => {
          let indice = reportDataArray.findIndex(
            (reportDataArrayItem) => {
              return (
                JSON.stringify(reportDataArrayItem) ===
                JSON.stringify(reportDataItem)
              )
            }
          )
          let isIndx = indice !== reportDataIndice
          if (isIndx) {
            fila1 = indice
            fila2 = reportDataIndice
          }
          return isIndx
        }
      )

      if (filtrados.length > 0) {
        throw new Error(
          `la fila=> ${fila1 + 2} con la fila=> ${
            fila2 + 2
          } error=> se esta repitiendo la siguiente informacion ${JSON.stringify(
            filtrados
          )} `
        )
      }
      resolve(true)
    } catch (error) {
      reject(error)
    }
  })
}

export const removeObjDuplic = (report) => {
  return new Promise(async (resolve, reject) => {
    try {
      let findIndex = 0
      let filtrados = report.filter(
        (actual, indice, arreglo) => {
          if (
            arreglo.findIndex((valorArreglo) => {
              return (
                JSON.stringify(valorArreglo) ===
                JSON.stringify(actual)
              )
            }) !== indice
          ) {
            findIndex = indice
          }
          return (
            arreglo.findIndex((valorArreglo) => {
              return (
                JSON.stringify(valorArreglo) ===
                JSON.stringify(actual)
              )
            }) !== indice
          )
        }
      )

      if (filtrados.length > 0) {
        throw new Error(
          `fila=> ${findIndex} error=> se esta repitiendo la siguiente informacion ${JSON.stringify(
            filtrados
          )} `
        )
      }

      resolve(true)
    } catch (error) {
      reject(error)
    }
  })
}

export const cleanJSON = (fila) => {
  return new Promise(async (resolve, reject) => {
    try {
      let result = Object.keys(fila).reduce(
        (prev, current) => ({
          ...prev,
          [current.toLowerCase()]: fila[current]
        }),
        {}
      )
      resolve(result)
    } catch (error) {
      reject(error)
    }
  })
}

export const findNoExistComas = (
  numeroFila,
  nombreColuma,
  campo,
  regla,
  listaErrores
) => {
  return new Promise(async (resolve) => {
    try {
      const tot = campo.split(',').length
      if (tot > 1) {
        throw new Error(
          `columna => ${nombreColuma}
           fila    => ${numeroFila}
           valor   => ${campo}
           error   => ${regla.message} `
        )
      }

      resolve(true)
    } catch (error) {
      listaErrores.add(error.message)
      resolve(true)
    }
  })
}

export const validFormatDate = (
  numeroFila,
  nombreColuma,
  campo,
  regla,
  listaErrores
) => {
  return new Promise(async (resolve) => {
    try {
      if (
        !moment(
          campo,
          moment.HTML5_FMT.DATE,
          true
        ).isValid()
      ) {
        throw new Error(
          `columna => ${nombreColuma} fila=> ${numeroFila} valor=> ${
            campo ? campo : 'vacio'
          } error=> ${regla.message} `
        )
      }

      resolve(true)
    } catch (error) {
      listaErrores.add(error.message)
      resolve(true)
    }
  })
}

//String
export const validExponencial = (
  numeroFila,
  nombreColuma,
  campo,
  listaErrores
) => {
  return new Promise(async (resolve) => {
    try {
      if (/.*\d*(\.|,)?\d+e[+]+\d.*/gim.test(campo)) {
        throw new Error(
          `columna => ${nombreColuma} fila=> ${numeroFila} valor=> ${
            campo ? campo : 'vacio'
          } error=> no se permite expresar texto en exponencial`
        )
      }

      resolve(true)
    } catch (error) {
      listaErrores.add(error.message)
      resolve(true)
    }
  })
}

export const validStringNoEmpty = (
  numeroFila,
  nombreColuma,
  campo,
  listaErrores
) => {
  return new Promise(async (resolve) => {
    try {
      if (!campo || campo.length === 0) {
        throw new Error(
          `columna => ${nombreColuma} fila=> ${numeroFila} valor=> ${
            campo ? campo : 'vacio'
          } error=> No puede haber campos de texto vacios, recuerde el valor por defecto N/A`
        )
      }
      resolve(true)
    } catch (error) {
      listaErrores.add(error.message)
      resolve(true)
    }
  })
}

export const validStringNA = (
  numeroFila,
  nombreColuma,
  campo,
  listaErrores
) => {
  return new Promise(async (resolve) => {
    try {
      if (
        !campo ||
        campo === 'na' ||
        campo === 'n/a' ||
        campo === 'n/A' ||
        campo === 'n A' ||
        campo === 'N/a'
      ) {
        throw new Error(
          `columna => ${nombreColuma} fila=> ${numeroFila} valor=> ${
            campo ? campo : 'vacio'
          } error=> solo es válido el valor por defecto para texto => N/A`
        )
      }
      resolve(true)
    } catch (error) {
      listaErrores.add(error.message)
      resolve(true)
    }
  })
}

export const validIsNumber = (
  numeroFila,
  nombreColuma,
  campo,
  listaErrores
) => {
  return new Promise(async (resolve) => {
    try {
      if (!/^[0-9]+$/.test(campo)) {
        throw new Error(
          `columna => ${nombreColuma} fila=> ${numeroFila} valor=> ${
            campo ? campo : 'vacio'
          } error=> Debe ser un valor numerico `
        )
      }

      resolve(true)
    } catch (error) {
      listaErrores.add(error.message)
      resolve(true)
    }
  })
}

export const validIsNit = (
  numeroFila,
  nombreColuma,
  campo,
  listaErrores
) => {
  return new Promise(async (resolve) => {
    try {
      if (!/^[0-9]{9,9}$/.test(campo)) {
        throw new Error(
          `columna => ${nombreColuma} fila=> ${numeroFila} valor=> ${
            campo ? campo : 'vacio'
          } error=> Debe ser un numero de 9 digitos`
        )
      }

      resolve(true)
    } catch (error) {
      listaErrores.add(error.message)
      resolve(true)
    }
  })
}

export const isValidData = (
  numeroFila,
  nombreColuma,
  campo,
  regla,
  listaErrores
) => {
  return new Promise(async (resolve) => {
    try {
      if (regla.valid != 0 && Array.isArray(regla.valid)) {
        if (!regla.valid.includes(campo)) {
          throw new Error(
            `columna => ${
              nombreColuma ? nombreColuma : 'vacio'
            } fila=> ${
              numeroFila ? numeroFila : 'vacio'
            } valor=> ${
              campo ? campo : 'vacio'
            } error=> debe contener uno de los siguientes valores ${
              regla.valid
            }`
          )
        }
      }
      resolve(true)
    } catch (error) {
      listaErrores.add(error.message)
      resolve(true)
    }
  })
}

export const findSeparadorComa = (
  numeroFila,
  nombreColuma,
  campo,
  regla,
  listaErrores
) => {
  return new Promise(async (resolve) => {
    try {
      const tot = campo.split(',').length
      if (tot > 2) {
        throw new Error(
          `columna => ${nombreColuma} fila=> ${numeroFila} valor=> ${campo} error=> ${regla.message} `
        )
      }

      resolve(Number(campo.replace(/,/g, '.')))
    } catch (error) {
      listaErrores.add(error.message)
      resolve(true)
    }
  })
}

export const findSeparadorPunto = (
  numeroFila,
  nombreColuma,
  campo,
  regla,
  listaErrores
) => {
  return new Promise(async (resolve) => {
    try {
      const tot = campo.split('.').length
      if (tot > 1) {
        throw new Error(
          `[ columna =>  ${nombreColuma} ]
           [ fila    =>  ${numeroFila}   ]
           [ valor   =>  ${campo}        ]
           [ error   =>  ${regla.message}] `
        )
      }
      resolve(true)
    } catch (error) {
      listaErrores.add(error.message)
      resolve(true)
    }
  })
}

export const validIsValidNumber = (
  numeroFila,
  nombreColumna,
  campo,
  listaErrores
) => {
  return new Promise(async (resolve) => {
    try {
      //if (/^[a-zA-Z\/@$?¡\-_]+$/.test(campo)) {

      if (!/^([-] ?)?[0-9]+(,[0-9]+)?$/gim.test(campo)) {
        throw new Error(
          `columna => ${nombreColumna} fila=> ${numeroFila} valor=> ${
            campo ? campo : 'vacio'
          } error=> Debe ser un número válido, el valor por defecto es el 0`
        )
      }

      resolve(true)
    } catch (error) {
      listaErrores.add(error.message)
      resolve(true)
    }
  })
}

export const validCampoIsNotNull = (
  numeroFila,
  nombreColuma,
  campo,
  regla,
  listaErrores
) => {
  return new Promise(async (resolve) => {
    try {
      const tot = campo.length
      if (tot <= 0) {
        throw new Error(
          `[ columna =>  ${nombreColuma} ]
           [ fila    =>  ${numeroFila}   ]
           [ valor   =>  ${campo}        ]
           [ error   =>  (Campo Vacio) ${regla.message}] `
        )
      }
      resolve(true)
    } catch (error) {
      listaErrores.add(error.message)
      resolve(true)
    }
  })
}
