const bodyParser = require('body-parser')
const cors = require('cors')
const express = require('express')
const port = process.env.PORT || 9000
const app = express()

//register middleware
app.use(bodyParser.json(), cors())
app.listen(port, () => console.log(`server is up and running at ${port}`))