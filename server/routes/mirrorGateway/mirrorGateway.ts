/*
import { RequestHandler, Router } from 'express'
import asyncMiddleware from '../middleware/asyncMiddleware'
import CrimePortalGatewayApi from '../services/mirrorGatewayService'

export default class mirrorGatewayController {
  public constructor(private readonly mirrorGatewayService: CrimePortalGatewayApi) {}

  public view(): RequestHandler{
    return async (req, res) => {
      const mirrorGateway = await this.mirrorGatewayService
      return res.render('pages/crimePortal.njk', { mirrorGateway })
    }
  }
}
-----------------------------------------------------------------------------
import { RequestHandler, Router } from 'express'

import asyncMiddleware from '../../middleware/asyncMiddleware'
// import CrimePortalGatewayApi from '../services/mirrorGatewayService'

export default function Index(): Router {
  const router = Router()
  const get = (path: string, handler: RequestHandler) => router.get(path, asyncMiddleware(handler))

  router.use((req, res, next) => {
    res.locals.render = 'Short format pre-sentence report'
    next()
  })

  get('/crimePortal', (req, res, next) => {
    res.render('crimePortal')
  })

  return router
}
------------------------------------------------------------------------------------------------------
import { request, response } from 'express'

export default class mirrorGatewayRoutes {
  private renderView = async (req: Request, res: Response): Promise<void> => {
    return res.render('./pages/crimePortal')
  }

  view = async (req: Request, res: Response): Promise<void> => this.renderView(req, res)

  submit = async (req: Request, res: Response): Promise<ReadableStream<Uint8Array>> => {
    return req.body
  }
}
* */
