const Person = require('../models/person')
const Sign = require('../models/sign')

const pArry = [Sign.deleteMany({})]

Promise.all(pArry).then(results => {
    console.log(results)
})
