import CrimePortalGatewayApi from './cpgApi'
import RestClient from '../data/restClient'
import config from '../config'

jest.mock('../data/restClient')

describe('Crime Portal Gateway Api', () => {
  let restClient: jest.Mocked<RestClient>
  let cpgApi: CrimePortalGatewayApi

  const token = 'Token'

  beforeEach(() => {
    restClient = new RestClient('Mirror Gateway API Client', config.apis.cpgApi, token) as jest.Mocked<RestClient>
    cpgApi = new CrimePortalGatewayApi(restClient)
  })

  it('should post successfully', async () => {
    restClient.post.mockResolvedValue({ status: 200 })
    const actual = cpgApi.postPayload('fancy data')
    expect(restClient.post).toHaveBeenCalledWith({
      path: '/mirrorgateway/service/cpmgwextdocapi',
      headers: { 'Content-Type': 'application/soap+xml' },
      data: 'fancy data',
      raw: true,
    })
    await expect(actual).resolves.toEqual({ status: 200 })
  })
})
