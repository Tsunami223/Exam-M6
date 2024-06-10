const express = require('express')
const { initDatabaseConnection } = require('./db')
const cors = require('cors')
require('dotenv').config()
const PORT = 3030

const app = express()

initDatabaseConnection()

// import routes
const usersRoute = require('./routes/users/users')
const emailRoute = require('./routes/email/sendEmail')

//middleware
app.use(cors())
app.use(express.json())
app.use('/', usersRoute)
app.use('/', emailRoute)

app.listen(PORT, () => console.log(`Server and running on port ${PORT}`))

