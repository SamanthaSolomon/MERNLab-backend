const { Schema, model } = require("mongoose")

const personSchema = new Schema(
    {
        name: String,
        sign: String
    }
)

const Person = model("person", personSchema)

module.exports = Person 