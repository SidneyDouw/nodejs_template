const express = require('express')
const app = express()

const fs = require('fs')

// Pug Setup

app.set('view engine', 'pug')
app.set('views', 'src/views/dnamic/')

// Routes

app.use(express.static('dist/'))

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