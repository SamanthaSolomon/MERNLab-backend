const { Schema, model } = require("mongoose")

const signSchema = new Schema (
    {
        sign: String,
        img: String,
        traits: String 
    }
)

const Sign = model("sign", signSchema)

module.exports = Sign