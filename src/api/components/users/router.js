import { Router } from 'express'
import {
  listarUsuarios,
  listarUsuarioById,
  addUser,
  updateUser,
  deleteUser
} from './controller'
import validatorHandler from '../../../middlewares/joi/validator.schema'
import {
  createUserSchema,
  getUserSchema,
  updateUserSchema
} from '../../../middlewares/joi/schemas/userSchema'
const router = Router()

router.get('/', listarUsuarios)
router.get('/:id', validatorHandler(getUserSchema, 'params'), listarUsuarioById)
router.post('/', validatorHandler(createUserSchema, 'body'), addUser)
router.patch(
  '/:id',
  validatorHandler(getUserSchema, 'params'),
  validatorHandler(updateUserSchema, 'body'),
  updateUser
)
router.delete('/:id', deleteUser)
export default router
