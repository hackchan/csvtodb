import multer from 'multer'
import { v4 as uuidv4 } from 'uuid'
import path from 'path'

const storage = multer.diskStorage({
  destination: 'public/uploads/',
  filename: (req, file, cb) => {
    cb(
      null,
      uuidv4() +
        path.extname(file.originalname).toLocaleLowerCase()
    )
  }
})

const upload = multer({
  storage,
  dest: 'public/uploads/',
  limits: { fileSize: 25 * 1024 * 1024 },
  fileFilter: function (req, file, cb) {
    const ext = path.extname(file.originalname)
    if (ext !== '.csv') {
      cb(new Error('Solo se permite archivos csv'), null)
    }
    cb(null, true)
  },
  onError: function (err, next) {
    next(err)
  }
})

export default upload
