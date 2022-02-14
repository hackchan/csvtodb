import { Router } from 'express'
import { listAll } from './controller'
const router = Router()
router.get('/', listAll)
export default router
