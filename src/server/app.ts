import express from 'express'
import dotenv from 'dotenv'

// Middlewares
import buildversion from './middleware/buildversion'

// Routes
import route_dynamic from './routes/dynamic'

dotenv.config()

const app = express()

// Pug Setup

app.set('view engine', 'pug')
app.set('views', 'dist/views/dynamic/')

// Middlewares

app.use(buildversion)

// Routes

app.use(express.static('dist/client/'))
app.use('/dynamic', route_dynamic)

// Start app

const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 8080

app.listen(PORT, () => {
    console.log(`Server started. Listening on Port ${PORT}`)
})
