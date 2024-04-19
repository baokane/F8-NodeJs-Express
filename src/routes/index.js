const newRoute = require('./news')
const siteRoute = require('./site')

function route(app) {
    app.get('/', (req, res) => {
        res.render('home');
    })

    // Mới nhất

    // app.get('/news', (req, res) => {
    //     res.render('newss');
    // })
    app.use('/news', newRoute)

    // 
    app.use('/', siteRoute)


    app.get('/search', (req, res) => {
        res.render('search');
    })


}

module.exports = route