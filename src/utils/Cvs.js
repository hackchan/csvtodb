import csvtojson from 'csvtojson'
import path from 'path'
import fs from 'fs'
class Csv {
  constructor() {}

  csvtojson({ file }) {
    return new Promise(async (resolve, reject) => {
      try {
        const rutaFile = path.join(
          __dirname,
          '../../',
          'public/uploads',
          file
        )

        let dataJON = []
        const readStream = fs.createReadStream(rutaFile)
        await csvtojson({
          delimiter: '|',
          checkColumn: false,
          noheader: false,
          ignoreEmpty: false,
          trim: true,
          defaultEncoding: 'utf8',
          output: 'json',
          downstreamFormat: 'json',
          workerNum: 2
        })
          .preFileLine((fileLine, idx) => {
            let invalidLinePattern = /^['"].*[^"']/
            if (invalidLinePattern.test(fileLine)) {
              throw new Error(
                `datos invalidos en la linea ${idx} campo: ${fileLine}`
              )
            }

            if (idx === 0) {
              return fileLine.toLowerCase()
            }
            return fileLine
          })
          .fromStream(readStream)
          .subscribe(
            (json, lineNumber) => {
              dataJON.push(json)
            },
            (err) => {
              reject(err)
            },
            () => {
              resolve(dataJON)
            }
          )
      } catch (error) {
        reject(error)
      }
    })
  }

  async csvtojsonBigFile({ file, dest }) {
    try {
      const rutaFile = path.join(
        __dirname,
        this.relative,
        this.ruta,
        file
      )
      const rutaFileDest = path.join(
        __dirname,
        this.relative,
        this.ruta,
        dest
      )
      const readStream =
        require('fs').createReadStream(rutaFile)
      const writeStream =
        require('fs').createWriteStream(rutaFileDest)

      readStream
        .pipe(
          csvtojson({
            delimiter: '|',
            checkColumn: false,
            noheader: false,
            ignoreEmpty: false,
            trim: true,
            defaultEncoding: 'utf8',
            output: 'json',
            downstreamFormat: 'json'
          })
        )
        .pipe(writeStream)
    } catch (error) {
      throw error
    }
  }
}

export default Csv
