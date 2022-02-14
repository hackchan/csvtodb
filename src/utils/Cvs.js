import csvtojson from 'csvtojson'
import path from 'path'

class Csv {
  constructor(ruta) {
    this.ruta = ruta
    this.relative = '../../'
  }

  async csvtojson({ file }) {
    return new Promise((resolve, reject) => {
      try {
        const rutaFile = path.join(
          __dirname,
          this.relative,
          this.ruta,
          file
        )
        let dataJON = []
        const readStream =
          require('fs').createReadStream(rutaFile)
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
          .preFileLine((fileLine, idx) => {
            if (idx === 0) {
              return fileLine.toLowerCase()
            }
            return fileLine
          })
          .fromStream(readStream)
          .subscribe(
            (json) => {
              dataJON.push(json)
            },
            () => {
              reject()
            },
            () => {
              resolve(dataJON)
            }
          )
      } catch (error) {
        throw error
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
