import type { RequestHandler, Router } from 'express'
import fs from 'fs'
import path from 'path'

import asyncMiddleware from '../middleware/asyncMiddleware'
import CrimePortalGatewayApi from '../api/cpgApi'
import RestClient from '../data/restClient'
import config from '../config'

export default function routes(router: Router): Router {
  const get = (routePath: string, handler: RequestHandler) => router.get(routePath, asyncMiddleware(handler))
  const post = (routePath: string, handler: RequestHandler) => router.post(routePath, asyncMiddleware(handler))

  post('/crimePortal', async (req, res) => {
    const { token } = res.locals.user
    const soapEnvelope = fs.readFileSync(path.join(process.cwd(), './assets/payloads/cpg-soap-payload.xml'), 'utf-8')
    const restClient = new RestClient('Mirror Gateway API Client', config.apis.cpgApi, this.token)
    const response = await new CrimePortalGatewayApi(restClient).postPayload(soapEnvelope)
    // eslint-disable-next-line new-cap
    res.send(response)
  })

  get('/', (req, res, next) => {
    res.render('pages/index')
  })

  return router
}
