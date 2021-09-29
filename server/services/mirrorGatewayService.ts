/*
import type HmppsAuthClient from '../data/hmppsAuthClient'
eslint-disable-next-line import/no-cycle
import cpgApi from '../api/cpgApi'
eslint-disable-next-line import/prefer-default-export
export function MirrorGatewayService(): Promise<any> {
  return fetch(
    'https://crime-portal-gateway-dev.apps.live-1.cloud-platform.service.justice.gov.uk/mirrorgateway/service/cpmgwextdocapi'
  )
}
-----------------------------------------------------------
export default class MirrorGatewayService {
  constructor(private readonly hmppsAuthClient: HmppsAuthClient, private readonly cpgApiAll: () => cpgApi) {}
  public async getMirrorGateway(): Promise<any> {
    await this.hmppsAuthClient.getSystemClientToken()
    await this.cpgApiAll().getMirrorGateway()
    return this.getMirrorGateway()
  }
}
* */

import RestClient from '../data/restClient'
import config from '../config'

export default class MirrorGatewayService {
  constructor(private readonly token: string) {}

  private restClient(): RestClient {
    return new RestClient('Mirror Gateway API Client', config.apis.cpgApi, this.token)
  }

  async getCPG(soapEnvelope: string): Promise<unknown> {
    return this.restClient().post({
      path: '/mirrorgateway/service/cpmgwextdocapi',
      headers: { 'Content-Type': 'application/soap+xml' },
      data: soapEnvelope,
      raw: true,
    })
  }
}
