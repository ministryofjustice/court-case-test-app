import type { Express } from 'express'
import request from 'supertest'
import appWithAllRoutes from './testutils/appSetup'

let app: Express

beforeEach(() => {
  app = appWithAllRoutes({})
})

afterEach(() => {
  jest.resetAllMocks()
})

describe('GET /', () => {
  it('should render index page', () => {
    return request(app)
      .get('/')
      .expect('Content-Type', /html/)
      .expect(res => {
        expect(res.text).toContain('This site is under construction...')
      })
  })
})

// TODO: Test with Wiremock back-end
describe('POST /', () => {
  it('should render the date of hearing', () => {
    const todayDate = new Intl.DateTimeFormat('en-GB').format(new Date())
    return request(app)
      .post('/crimePortal')
      .expect('Content-Type', /html/)
      .expect(res => {
        expect(res.text).toContain(todayDate)
      })
  })
})
