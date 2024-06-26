const express = require('express')
const router = express.Router()
const siteController = require('../app/controllers/SiteController')


router.use('/search', siteController.search)

//
// router.use('/', siteController.index)
router.get("/", siteController.index);

module.exports = router