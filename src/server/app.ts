import express from 'express'

import route_dynamic from './routes/dynamic'

import dotenv from 'dotenv'
dotenv.config()

const app = express()

// Pug Setup

app.set('view engine', 'pug')
app.set('views', 'dist/views/dynamic/')

// Routes

app.use(express.static('dist/client/'))
app.use('/dynamic', route_dynamic)

// Start app

const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 8080

app.listen(8080, 'localhost', () => {
    console.log('Server started. Listening on Port 8080')
})
