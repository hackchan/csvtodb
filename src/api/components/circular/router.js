import { Router } from 'express'
import {
  listarCircular,
  listarCircularById,
  addCircular,
  updateCircular,
  deleteCircular
} from './controller'
const router = Router()

router.get('/', listarCircular)
router.get('/:id', listarCircularById)
router.post('/', addCircular)
router.patch('/:id', updateCircular)
router.delete('/:id', deleteCircular)
export default router
