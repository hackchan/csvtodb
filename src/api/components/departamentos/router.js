import { Router } from 'express'
import {
  createDepartment,
  listAllDeparts,
  listByIdDepart,
  updateDepartment,
  deleteDepartment
} from './controller'
const router = Router()

router.get('/', listAllDeparts)
router.get('/:id', listByIdDepart)
router.post('/', createDepartment)
router.patch('/:id', updateDepartment)
router.delete('/:id', deleteDepartment)
export default router
