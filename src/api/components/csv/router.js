import { Router } from 'express'
import upload from '../../../middlewares/multer'
import multer from 'multer'

import { loadCsv } from './controller'
const router = Router()

router.post('/upload', (req, res, next) => {
  try {
    upload(req, res, async function (err) {
      if (err instanceof multer.MulterError) {
        return next(err)
      } else if (err) {
        return next(err)
      }
      await loadCsv(req, res, next)
    })
  } catch (error) {
    next(error)
  }
})

export default router
