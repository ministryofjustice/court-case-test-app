import { RequestHandler } from 'express'

export default class CPGController {
  public view(): RequestHandler {
    return async (req, res) => {
      res.render('pages/crimePortal.njk')
    }
  }
}
