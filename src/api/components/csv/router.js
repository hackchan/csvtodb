import { Router } from 'express'
import upload from '../../../middlewares/multer'
// import validatorHandler from '../../../middlewares/joi/validator.schema'
// import { uploadschema } from '../../../middlewares/joi/schemas/uploadSchema'
import { loadCsv } from './controller'
const router = Router()

router.post('/upload', upload.single('file'), loadCsv)

export default router
