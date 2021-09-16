/*
import config, { ApiConfig } from '../config'
import RestClient from '../data/restClient'
import logger from '../../logger'
// eslint-disable-next-line import/no-cycle
import type mirrorGatewayController from '../routes/mirrorGateway/mirrorGateway'

type CpgApi = {}

export default class CpgApi {
  restClient: RestClient

  constructor(token: string) {
    this.restClient = new RestClient('Crime Portal Gateway API', config.apis.CpgApi as ApiConfig, token)
  }

  async getMirrorGateway(): Promise<mirrorGatewayController[]> {
    logger.info(`cpgApi: getMirrorGateway`)
    return (await this.restClient.get({
      path: 'https://crime-portal-gateway-dev.apps.live-1.cloud-platform.service.justice.gov.uk/mirrorgateway/service/cpmgwextdocapi',
    })) as Promise<mirrorGatewayController[]>
  }
}
* */
