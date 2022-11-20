const router = require("express").Router()
const fetchController = require("../Controller/FetchController")


router.get("/fetchData",fetchController.fetch)
router.post("/addAds",fetchController.addAds)
router.post("/addCompanies",fetchController.addCompanies)

module.exports = router


