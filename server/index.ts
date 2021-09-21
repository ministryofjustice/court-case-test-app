import createApp from './app'
import HmppsAuthClient from './data/hmppsAuthClient'
import TokenStore from './data/tokenStore'
import UserService from './services/userService'
// import MirrorGatewayService from './services/mirrorGatewayService'
// import CpgApi from './api/cpgApi'

const hmppsAuthClient = new HmppsAuthClient(new TokenStore())
const userService = new UserService(hmppsAuthClient)
// const mirrorGatewayService = new MirrorGatewayService(hmppsAuthClient, token => new CpgApi(token))

const app = createApp()
// const app = createApp(userService, mirrorGatewayService)

export default app
