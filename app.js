require('dotenv').config()
const path = require('path')
const express = require('express')
const logger = require('./logger/calcLogger')

const app = express()

logger.info('Calculator opened')

//pug config
app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'views'))

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('calc')
})


const port = process.env.PORT
const host = '0.0.0.0'

app.listen(port, host, () => {
    console.log(`App is listening on port ${port}`)
})