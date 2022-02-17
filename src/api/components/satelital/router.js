import { Router } from 'express'
import {
  listarSatelitales,
  addSatelital,
  listarSatelitalesById,
  updateSatelital,
  deleteSatelital
} from './controller'
const router = Router()

router.get('/', listarSatelitales)
router.get('/:id', listarSatelitalesById)
router.post('/', addSatelital)
router.patch('/:id', updateSatelital)
router.delete('/:id', deleteSatelital)

export default router
