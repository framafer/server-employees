const express = require('express')
const morgan = require('morgan')
const cors = require('cors');

const app = express()

app.use(cors())
app.use(morgan('dev'))


app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use("/api/employees", require('./routes/employees.routes'))

app.set('port', process.env.PORT || 4000);

module.exports = app;
