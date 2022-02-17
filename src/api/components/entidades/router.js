import { Router } from 'express'
import validatorHandler from '../../../middlewares/joi/validator.schema'
import { createEntidadSchema, getEntidadSchema } from '../../../middlewares/joi/schemas/entidadSchema'
import { crearEntidad, getEntidad, getAllEntidad } from './controller'
const router = Router()

router.get('/', getAllEntidad)
router.get('/:id', validatorHandler(getEntidadSchema, 'params'), getEntidad)
router.post('/', validatorHandler(createEntidadSchema, 'body'), crearEntidad)

export default router
