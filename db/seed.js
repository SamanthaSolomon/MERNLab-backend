const Person = require('../models/person')
const Sign = require('../models/sign')

const zodiac = [
    {
        sign: "Aquarious",
        img: "https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2020/02/capricorn-1580578764.jpg",
        traits: "assertive, analytical, original",
    },
    {
        sign: "Aries",
        img: "https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2020/02/capricorn-1580578764.jpg",
        traits: "no filter, bored easily, competative",
    },
    {
        sign: "Taurus",
        img: "https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2020/02/capricorn-1580578764.jpg",
        traits: "cuddly, homebody, hates change",
    },
    {
        sign: "Gemini",
        img: "https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2020/02/capricorn-1580578764.jpg",
        traits: "charismatic, outgoing, makes lots of jokes",
    },
    {
        sign: "Cancer",
        img: "https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2020/02/capricorn-1580578764.jpg",
        traits: "sensitive, few boundaries, seeks comfort",
    },
    {
        sign: "Leo",
        img: "https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2020/02/capricorn-1580578764.jpg",
        traits: "warm, big personality, vain",
    },
    {
        sign: "Virgo",
        img: "https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2020/02/capricorn-1580578764.jpg",
        traits: "lots of ideas, judgemental, fixer",
    },
    {
        sign: "Scorpio",
        img: "https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2020/02/capricorn-1580578764.jpg",
        traits: "Always feels betrayed, cool with silence, piercing stare",
    },
    {
        sign: "Sagittarius",
        img: "https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2020/02/capricorn-1580578764.jpg",
        traits: "loud, loves self-improvement, friendly",
    },
    {
        sign: "Capricorn",
        img: "https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2020/02/capricorn-1580578764.jpg",
        traits: "responsible, success driven, motivated by duty",
    },
    {
        sign: "Pisces",
        img: "https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2020/02/capricorn-1580578764.jpg",
        traits: "romantic, thinks everything is a sign, no boundaries",
    },
]

const people = [
    {
        name: "Sam",
        sign: "Aquarious",
    },
    {
        name: "Chuck",
        sign: "Capricorn",
    },
    {
        name: "Mickey",
        sign: "Leo",
    },

]
const seed = async() => {
    try{
        const results2 = await Sign.insertMany(zodiac)
        const results = await Person.insertMany(people)
        console.log(results, results2) 
    }
    catch(error){
        console.log('error-', error)
    }
}
seed()

// console.log(people, zodiac)
