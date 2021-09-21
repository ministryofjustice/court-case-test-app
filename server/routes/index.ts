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
import fs from 'fs'
import path from 'path'

import asyncMiddleware from '../middleware/asyncMiddleware'
import MirrorGatewayService from '../services/mirrorGatewayService'

export default function routes(): Router {
  const router = express.Router()
  const get = (routePath: string, handler: RequestHandler) => router.get(routePath, asyncMiddleware(handler))
  const post = (routePath: string, handler: RequestHandler) => router.post(routePath, asyncMiddleware(handler))

  post('/crimePortal', async (req, res) => {
    const { token } = res.locals.user
    const soapEnvelope = fs.readFileSync(path.join(process.cwd(), './payloads/cpg-soap-payload.xml'), 'utf-8')
    const response = await new MirrorGatewayService(token).getCPG(soapEnvelope)
    res.send(response)
    // res.redirect('/')
  })

  get('/', (req, res, next) => {
    res.render('pages/index')
  })

  return router
}
