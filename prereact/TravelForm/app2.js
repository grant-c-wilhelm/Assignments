function doubler(arr) {
    arr.map((arrs) => {
        console.log(arrs * 2)
    })
}
doubler([1, 2, 3])

function upperCaseIt(arr) {
    arr.map((name) => {
        name = name.charAt(0).toUpperCase() + name.substr(1)
        console.log(name)
    })

}
function namePuller(arr) {
    arr.map((person) => {
        const fName = person.name
        person.gender === 'female' ?
            console.log(fName + ' is a female') : console.log(fName + ' is a male')
    })
}
function ageChecker(arr) {
    arr.map((person) => {
        const fName = person.name
        person.age >= 18 ?
            console.log(fName + ' can go to the Matrix') : console.log(fName + ' CANNOT go to the Matrix')
    })
}
[{
    name: "Angelina Jolie",
    gender: 'female',
    age: 80
},
{
    name: "Eric Jones",
    gender: 'male',
    age: 2
},
{
    name: "Paris Hilton",
    gender: 'female',
    age: 5
},
{
    name: "Kayne West",
    gender: 'male',
    age: 16
},
{
    name: "Bob Ziroll",
    gender: 'male',
    age: 100
}
]
ageChecker([{
    name: "Angelina Jolie",
    gender: 'female',
    age: 80
},
{
    name: "Eric Jones",
    gender: 'male',
    age: 2
},
{
    name: "Paris Hilton",
    gender: 'female',
    age: 5
},
{
    name: "Kayne West",
    gender: 'male',
    age: 16
},
{
    name: "Bob Ziroll",
    gender: 'male',
    age: 100
}
])

//Matrix checker reqs: state male/female, age, allowed into matrix if age > 18
function matrixChecker(arr) {
    const fName = arr.name
    const age = arr.age
    const gender = arr.gender


}

function numberFilter(arr) {
    arr.filter((number) => {
        number >= 25 ?
            console.log(number) :
            console.log('under 25')
    })
}
function evenFilter(arr) {
    arr.filter((number) => {
        number % 2 === 0 ?
            console.log(number) :
            console.log("I am odd :)")
    })
}
function fiveCharactersOrFewerOnly(arr) {
    arr.filter((string) => {
        string.length > 3 ?
            console.log(string) :
            console.log("I am too short :( ")
    })
}
function peopleWhoBelongToTheIlluminati(arr) {
    arr.filter((memberStatus) => {
        memberStatus.member ?
            console.log("I am a member, of what, I will not say") :
            console.log("I do not know what youre talking about...")
    })
}


peopleWhoBelongToTheIlluminati([
    {
        name: "Angelina Jolie",
        member: true
    },
    {
        name: "Eric Jones",
        member: false
    },
    {
        name: "Paris Hilton",
        member: true
    },
    {
        name: "Kayne West",
        member: false
    },
    {
        name: "Bob Ziroll",
        member: true
    }
])