import type { RequestHandler, Router } from 'express'
import { callTheMirrorGateway } from '../services/crimePortalGatewayController'
import asyncMiddleware from '../middleware/asyncMiddleware'

export default function routes(router: Router): Router {
  const get = (path: string, handler: RequestHandler) => router.get(path, asyncMiddleware(handler))
  const post = (path: string, handler: RequestHandler) => router.post(path, asyncMiddleware(handler))

  post('/crimePortal', async (req, res, next) => {
    await callTheMirrorGateway
    res.render('pages/crimePortal')
  })

  get('/', (req, res, next) => {
    res.render('pages/index')
  })
  return router
}
