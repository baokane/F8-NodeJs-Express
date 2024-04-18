const express = require('express')
const morgan = require('morgan')
const app = express()
const port = 3000

app.use(morgan('combined'))

app.get('/', (req, res) => {
    res.send('Hello World!')
    let a = 1
    let b = 2
    let c = a + b
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})