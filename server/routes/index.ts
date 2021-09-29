import type { RequestHandler, Router } from 'express'
import fs from 'fs'
import path from 'path'

import asyncMiddleware from '../middleware/asyncMiddleware'
import MirrorGatewayService from '../services/mirrorGatewayService'

export default function routes(router: Router): Router {
  const get = (routePath: string, handler: RequestHandler) => router.get(routePath, asyncMiddleware(handler))
  const post = (routePath: string, handler: RequestHandler) => router.post(routePath, asyncMiddleware(handler))

  post('/crimePortal', async (req, res) => {
    const { token } = res.locals.user
    const soapEnvelope = fs.readFileSync(path.join(process.cwd(), './payloads/cpg-soap-payload.xml'), 'utf-8')
    const response = await new MirrorGatewayService(token).getCPG(soapEnvelope)
    res.send(response)
    // res.status(200).send('Hello world!')
    // res.set(response.req.url).send(response.header.date)
    // res.redirect('/')
  })

  get('/', (req, res, next) => {
    res.render('pages/index')
  })

  return router
}
