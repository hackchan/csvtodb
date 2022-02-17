import { Router } from 'express'
import { listAuths, listAuthsById, addAuth, updateAuth, deleteAuth } from './controller'
const router = Router()

router.get('/', listAuths)
router.get('/:id', listAuthsById)

router.post('/', addAuth)
router.patch('/:id', updateAuth)
router.delete('/:id', deleteAuth)
export default router
