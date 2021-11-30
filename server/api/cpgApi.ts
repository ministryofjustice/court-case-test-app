import RestClient from '../data/restClient'

interface CrimePortalResponse {
  status: number
}

export default class CrimePortalGatewayApi {
  constructor(private readonly restClient: RestClient) {}

  async postPayload(soapEnvelope: string): Promise<CrimePortalResponse> {
    return this.restClient
      .post({
        path: '/mirrorgateway/service/cpmgwextdocapi',
        headers: { 'Content-Type': 'application/soap+xml' },
        data: soapEnvelope,
        raw: true,
      })
      .then(response => {
        return response as CrimePortalResponse
      })
  }
}
