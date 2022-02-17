import { Router } from 'express'
import {
  listarTipos,
  listarTiposById,
  addTipo,
  updateTipo,
  deleteTipo
} from './controller'

import validatorHandler from '../../../middlewares/joi/validator.schema'
import {
  createTipoEntidadSchema,
  getTipoEntidadSchema,
  updateTipoEntidadSchema
} from '../../../middlewares/joi/schemas/tipoEntidadSchema'
const router = Router()

router.get('/', listarTipos)
router.get('/:id', validatorHandler(getTipoEntidadSchema, 'params'), listarTiposById)
router.post('/', validatorHandler(createTipoEntidadSchema, 'body'), addTipo)
router.patch(
  '/:id',
  validatorHandler(getTipoEntidadSchema, 'params'),
  validatorHandler(updateTipoEntidadSchema, 'body'),
  updateTipo
)
router.delete('/:id', deleteTipo)

export default router
