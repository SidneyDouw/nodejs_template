import express from 'express'
import fs from 'fs'

const app = express()


// Pug Setup

app.set('view engine', 'pug')
app.set('views', 'dist/views/dynamic/')


// Routes

app.use(express.static('dist/client/'))

app.get('/dynamic', (req, res) => {

	let buildVersion = fs.readFileSync('./gulpconfig/buildVersion', 'utf-8')

	res.render('dynamic', {
		buildVersion: buildVersion
	})

})


// Start app

app.listen(8080, 'localhost', () => {
	console.log('Server started. Listening on Port 8080')
})