import createApp from './app'
import HmppsAuthClient from './data/hmppsAuthClient'
import TokenStore from './data/tokenStore'
import UserService from './services/userService'
// import CrimePortalGatewayApi from './services/mirrorGatewayService'
// import CpgApi from './api/cpgApi'

const hmppsAuthClient = new HmppsAuthClient(new TokenStore())
const userService = new UserService(hmppsAuthClient)
// const mirrorGatewayService = new CrimePortalGatewayApi(hmppsAuthClient, token => new CpgApi(token))

const app = createApp(userService)
// const app = createApp(userService, mirrorGatewayService)

export default app
