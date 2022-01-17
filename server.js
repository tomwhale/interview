const express = require('express')
const app = express()
const port = process.env.ENV || 8080

app.listen(port, () => console.log(`Example app listening on port ${port}!`))