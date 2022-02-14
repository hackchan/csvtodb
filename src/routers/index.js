import { Router } from 'express'
import routerCsv from '../api/components/csv/router'
import routerEstructuracion from '../api/components/estructuracion/router'

const routers = (app) => {
  const router = Router()
  app.use('/api/v1', router)
  router.use('/csv', routerCsv)
  router.use('/estructuracion', routerEstructuracion)
}

export default routers
