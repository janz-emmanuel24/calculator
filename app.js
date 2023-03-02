require('dotenv').config()
const path = require('path')
const express = require('express')
const logger = require('./logger/calcLogger')
const mongoose = require('mongoose')

const app = express()

logger.info('Calculator opened')

const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD)

mongoose.connect(DB, {
    useNewUrlParser: true,
}).then(con => {
    console.log(con.connections)
    console.log('DB connection successful')
})

const calcSchema = new mongoose.Schema({
    calResult: Number
})

const Result = mongoose.model('CalculatedResults', calcSchema)

const testResults = new Result({
    calResult: 788
})

testResults.save().then(doc => {
    console.log(doc)
})

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