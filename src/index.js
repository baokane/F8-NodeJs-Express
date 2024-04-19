const express = require('express')
const morgan = require('morgan')
const handlebars = require('express-handlebars')
var path = require('path');
const app = express()
const port = 3000

const route = require('./routes')

// dùng cho lib js , code js để submit
app.use(express.json())

// dùng cho form để submit
app.use(express.urlencoded({ extended: true }))

app.use(express.static(path.join(__dirname, 'puplic')))

// HTTP Logger
app.use(morgan('combined'))

// Template engine
app.engine('.hbs', handlebars(
    { extname: '.hbs' }
));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'resources/views'));

// Route init
route(app)

// app.get('/', (req, res) => {
//     res.render('home');
// })

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})