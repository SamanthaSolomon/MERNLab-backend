const Person = require("../models/person")
const { Router } = require("express")
const router = Router()

//index
router.get("/", async (req, res) => {
    res.json(await Person.find({}))
})

//create
router.post("/", async (req, res) => {
    res.json(await Person.create(req.body))
})

//update
router.put("/:id", async (req, res) => {
    res.json(await Person.findByIdAndUpdate(req.params.id, req.body, { new: true }))
})

//delete
router.delete("/:id", async (req, res) => {
    res.json(await Person.findByIdAndRemove(req.params.id))
})

module.exports = router