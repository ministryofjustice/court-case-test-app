/*
import express, { RequestHandler, Router } from 'express'
import asyncMiddleware from '../../middleware/asyncMiddleware'

import MirrorGatewayRoutes from './mirrorGateway'

import MirrorGatewayService from '../../services/mirrorGatewayService'

export default function mirrorGatewayRoutes({
  mirrorGatewayService,
}: {
  mirrorGatewayService: MirrorGatewayService
}): Router {
  const router = express.Router({ mergeParams: true })
  let mirrorGateway: mirrorGatewayRoutes;
  // eslint-disable-next-line prefer-const
  mirrorGateway = new MirrorGatewayRoutes(mirrorGatewayService);

  const get = (path: string, handler: RequestHandler) => router.get(path, asyncMiddleware(handler))
  const post = (path: string, handler: RequestHandler) => router.post(path, asyncMiddleware(handler))

  get('/', mirrorGateway.view)
  post('/:crimePortal', mirrorGateway.submit)

  return router
}
* */
