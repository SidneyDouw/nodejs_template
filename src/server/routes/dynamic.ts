import express from 'express'
const router = express.Router()

router.get('/', (req, res) => {
    res.render('dynamic', {
        buildVersion: req.buildVersion,
    })
})

export default router
