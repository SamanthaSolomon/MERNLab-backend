const { Schema, model } = require("mongoose")

const personSchema = new Schema(
    {
        name: String,
        sign: [{
            ref: 'Sign',
            type: mongoose.Schema.Types.ObjectID
        }]
    }
)

const Person = model("person", personSchema)

module.exports = person