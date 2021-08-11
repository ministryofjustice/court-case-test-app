# Court Case Test App

# Preamble
#### The app requires:
* `hmpps-auth` for authentication
* `redis` session store and token caching
* 🛎️ make sure you are using >= `Node v14.x`

---

## 🐾 Getting ready
The easiest way to run the app is to use docker compose to create the service and all dependencies. 

- `docker-compose pull`
- `docker-compose up redis hmpps-auth`
- `npm install`
- `env API_CLIENT_ID={{a valid clientid}} npm run start:dev`

##  🏁 Running the app for development

To start the main services (excluding the example typescript template app) and build the assets to start the app with nodemon:
- `docker-compose up`
- `npm install`
- `npm run start:dev`

---

### Running integration tests
For local running, start a test db, redis, and wiremock instance by:
- `docker-compose -f docker-compose-test.yml up`

Then run the server in test mode by:
- `npm run start-feature` (or `npm run start-feature:dev` to run with nodemon)

And then either, run tests in headless mode with:
- `npm run int-test`
 
Or run tests with the cypress UI:
- `npm run int-test-ui`

---

#### Run linter
`npm run lint`

#### Run tests
`npm run test`