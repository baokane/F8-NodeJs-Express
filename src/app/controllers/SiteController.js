class SiteController {
    // [GET] / Sides
    index(req, res) {
        res.render('home')
    }

    // [GET] / Search
    search(req, res) {
        res.send('search')
    }
}

module.exports = new SiteController

// export class SiteController {
//     constructor() {
//         this.index = this.test.index(this);
//         // this.search = this.test.search(this);
//     }

//     index(req, res, next) {
//         res.render('home')
//     }

//     // search(req, res, next) {
//     //     res.send('search')
//     // }
// }

// module.exports = SiteController

// module.exports = {
//     index: function (req, res) {
//         res.render('home')
//     }
// };