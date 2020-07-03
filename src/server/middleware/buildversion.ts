import express from 'express'
import fs from 'fs'

export default (req: express.Request, res: express.Response, next: express.NextFunction) => {
    req.buildVersion = fs.readFileSync('./gulpconfig/buildVersion', 'utf-8')
    next()
}
