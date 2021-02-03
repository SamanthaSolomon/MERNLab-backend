const Sign = require("../models/sign")
const { Router } = require("express")
const router = Router()

//index (read) route
router.get("/", async (req, res) => {
    res.json(await Sign.find({}))
})

//create route - to add signs
router.post("/", async (req, res) => {
    res.json(await Sign.create(req.body))
})

module.exports = router