/*
import type { RequestHandler, Router } from 'express'
import express from 'express'
// import MirrorGatewayController from './mirrorGatewayController'
import MirrorGatewayService from '../services/mirrorGatewayService'
import asyncMiddleware from '../middleware/asyncMiddleware'

// export default function routes(router: () => Promise<any>): Router {
export default function routes(mirrorGatewayService: e.Router): e.Router {
  const router = express.Router()
  const get = (path: string, handler: RequestHandler) => router.get(path, asyncMiddleware(handler))
  const post = (path: string, handler: RequestHandler) => router.post(path, asyncMiddleware(handler))

  post('/crimePortal', async (req, res, next) => {
    let response: unknown
    // eslint-disable-next-line prefer-const
    response = await Promise
    return response
    res.render('pages/crimePortal')
  })

  get('/crimePortal', async (req, res) => {
    const { token } = res.locals.user
    const response = await new MirrorGatewayService(token).getMirrorGateway()
    console.log(response)
    res.render(response)
  })

  get('/', (req, res, next) => {
    res.render('pages/index')
  })
  return router
}
* */

import type { RequestHandler, Router } from 'express'
import express from 'express'
import asyncMiddleware from '../middleware/asyncMiddleware'

import mirrorGatewayService from '../services/mirrorGatewayService'
import UserService from '../services/userService'

// export default function routes(Router: () => Promise<any>): Router {

export default function routes(userService: Router): Router {
  const router = express.Router()
  const get = (path: string, handler: RequestHandler) => router.get(path, asyncMiddleware(handler))
  const post = (path: string, handler: RequestHandler) => router.post(path, asyncMiddleware(handler))

  post('/crimePortal', async (req, res) => {
    const { token } = res.locals.user
    // eslint-disable-next-line new-cap
    const response = await new mirrorGatewayService(token).getCPG()
    console.log(response, 'RESPONSE')
    if (typeof response === 'string') {
      res.render(response)
    }
  })

  get('/', (req, res, next) => {
    res.render('pages/index')
  })
  return router
}
