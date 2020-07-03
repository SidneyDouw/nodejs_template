import express from 'express'
import fs from 'fs'

export default (req: express.Request, res: express.Response, next: express.NextFunction) => {
    const buildVersion = fs.readFileSync('./gulpconfig/buildVersion', 'utf-8')
    req.buildVersion = buildVersion

    next()
}
