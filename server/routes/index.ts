import type { RequestHandler, Router } from 'express'
// import crimePortalGateway from '../services/crimePortalGateway'
import asyncMiddleware from '../middleware/asyncMiddleware'
// import {from} from "rxjs";

export default function routes(router: Router): Router {
  const get = (path: string, handler: RequestHandler) => router.get(path, asyncMiddleware(handler))

  get('/', (req, res, next) => {
    res.render('pages/index')
  })

  const post = (path: string, handler: RequestHandler) => router.post(path, asyncMiddleware(handler))
  // const CPG = crimePortalGateway
  // Import the service into here so we can access the methods their in
  post('/', (req, res, next) => {
    // Call the method in the service in order to hit the backend and handle the response

    res.render('pages/index')
  })
  return router
}
