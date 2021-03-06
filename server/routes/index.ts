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
  const todayDate = new Intl.DateTimeFormat('en-GB').format(new Date())

  post('/crimePortal', async (req, res) => {
    const soapEnvelope = fs
      .readFileSync(path.join(process.cwd(), './assets/payloads/cpg-soap-payload.xml'), 'utf-8')
      .replace('TODAY_DATE', todayDate)
    const restClient = new RestClient('Mirror Gateway API Client', config.apis.cpgApi, 'no_auth')
    const response = await new CrimePortalGatewayApi(restClient).postPayload(soapEnvelope)
    res.locals.responseStatus = response.status
    res.locals.todayDate = todayDate
    // res.send(response)
    res.render('pages/crimePortal')
  })

  get('/', (req, res, next) => {
    res.render('pages/index')
  })

  return router
}
