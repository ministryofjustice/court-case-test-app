import type { RequestHandler, Router } from 'express'
// import CPGController from '../services/crimePortalGatewayController'
import { post } from 'superagent'
import asyncMiddleware from '../middleware/asyncMiddleware'

export default function routes(router: Router): Router {
  const get = (path: string, handler: RequestHandler) => router.get(path, asyncMiddleware(handler))
  // const cpgController = new CPGController(1,2,3)
  post(
    'https://crime-portal-gateway-dev.apps.live-1.cloud-platform.service.justice.gov.uk/mirrorgateway/service/cpmgwextdocapi'
  )

  get('/', (req, res, next) => {
    res.render('pages/index')
  })
  return router
}
