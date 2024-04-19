class NewController {
    // [GET] / news
    index(req, res) {
        res.render('news')
    }

    show(req, res) {
        res.send('news details')
    }
}

module.exports = new NewController

// class Animal {

//     constructor(name) {
//         this.name = name;
//     }

// }