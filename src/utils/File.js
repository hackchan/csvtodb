import fs from 'fs/promises'
import path from 'path'

class File {
  constructor(path = '../../') {
    this.path = path
  }

  async readFile({ encode = 'latin1', file }) {
    try {
      const rutaFile = path.join(
        __dirname,
        this.path,
        'public/uploads',
        file
      )
      return await fs.readFile(rutaFile, encode)
    } catch (error) {
      throw error
    }
  }

  async deleteFile({ file }) {
    try {
      const rutaFile = path.join(
        __dirname,
        this.path,
        'public/uploads',
        file
      )
      await fs.unlink(rutaFile)
    } catch (error) {
      throw error
    }
  }

  async rename({ file, renameFile }) {
    try {
      const rutaFile = path.join(
        __dirname,
        this.path,
        'public/uploads',
        file
      )
      const rutaRenameFile = path.join(
        __dirname,
        this.path,
        'public/uploads',
        renameFile
      )
      await fs.rename(rutaFile, rutaRenameFile)
    } catch (error) {
      throw error
    }
  }

  async appendText({ file, texto }) {
    try {
      const rutaFile = path.join(
        __dirname,
        this.path,
        'public/uploads',
        file
      )
      await fs.appendFile(rutaFile, `\n${texto}`)
    } catch (error) {
      throw error
    }
  }

  async copyFile({ file, fileDestino }) {
    try {
      const rutaFile = path.join(
        __dirname,
        this.path,
        'public/uploads',
        file
      )
      const rutaFileDestino = path.join(
        __dirname,
        this.path,
        'public/uploads',
        fileDestino
      )
      await fs
        .createReadStream(rutaFile)
        .pipe(fs.createWriteStream(rutaFileDestino))
    } catch (error) {
      throw error
    }
  }
}

export default File
