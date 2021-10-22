import RestClient from '../data/restClient'

export default class CrimePortalGatewayApi {
  constructor(private readonly restClient: RestClient) {}

  async postPayload(soapEnvelope: string): Promise<unknown> {
    return this.restClient.post({
      path: '/mirrorgateway/service/cpmgwextdocapi',
      headers: { 'Content-Type': 'application/soap+xml' },
      data: soapEnvelope,
      raw: true,
    })
  }
}
