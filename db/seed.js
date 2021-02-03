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
        img: "https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2020/04/horoscope-1586110496.jpg",
        traits: "no filter, bored easily, competative",
    },
    {
        sign: "Taurus",
        img: "https://www.astrologyzone.com/wp-content/themes/JointsWP-master/assets/images/horoscopes/horoscope-article-hero/az_img_horoscope_taurus.png",
        traits: "cuddly, homebody, hates change",
    },
    {
        sign: "Gemini",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTaEih0u75Veg5qXEPf4st6ti1ZBx0_sFpiw&usqp=CAU",
        traits: "charismatic, outgoing, makes lots of jokes",
    },
    {
        sign: "Cancer",
        img: "https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2020/04/horoscope-1587316875.jpg",
        traits: "sensitive, few boundaries, seeks comfort",
    },
    {
        sign: "Leo",
        img: "https://imgk.timesnownews.com/story/Leo_Horoscope_April_8_2020.jpg?tr=w-1200,h-900",
        traits: "warm, big personality, vain",
    },
    {
        sign: "Virgo",
        img: "https://www.sheenmagazine.com/wp-content/uploads/2017/09/shutterstock_1120385594.jpg",
        traits: "lots of ideas, judgemental, fixer",
    },
    {
        sign: "Scorpio",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGQpy9gVtIr-cu0KEnfVhgmDyvk_oE4VP00Q&usqp=CAU",
        traits: "Always feels betrayed, cool with silence, piercing stare",
    },
    {
        sign: "Sagittarius",
        img: "https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2019/11/horoscope-1575045927.jpg",
        traits: "loud, loves self-improvement, friendly",
    },
    {
        sign: "Capricorn",
        img: "https://resize.indiatvnews.com/en/resize/newbucket/715_-/2020/01/pjimage-10-1578504015.jpg",
        traits: "responsible, success driven, motivated by duty",
    },
    {
        sign: "Pisces",
        img: "https://resize.indiatvnews.com/en/resize/newbucket/715_-/2020/02/pisces-1582820526.jpg",
        traits: "romantic, thinks everything is a sign, no boundaries",
    },
    {
        sign: "Libra",
        img: "https://resize.indiatvnews.com/en/resize/newbucket/715_-/2020/03/libra-1584281273.jpg",
        traits: "cooperative, fair-minded, indecisive",
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
