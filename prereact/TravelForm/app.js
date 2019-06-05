
const dogs = ['lab', 'frenchie', 'greyhound', 'corgi']
function mapper() {
    dogs.map((dog) => {
        console.log(dog + "'s are pretty awesome")
    })
}
const letters = ['qail', 'weather', 'elephant', 'raptor', 'toranto', 'yellow', 'umnrella', 'igloo', 'occulus', 'petty', 'alligator', 'sweet', 'delightful', 'fforever', 'grounded', 'hexagon', 'jubilee', 'kangaroo', 'lemur', 'zebra', 'xylaphone', 'cannabis', 'violin', 'becuase', 'neglect', 'moreover']



function doubler(arr) {
    arr.map((arrs) => {
        arrs += ' '
        console.log(arrs * 2)
    })
}
doubler([1, 2, 3])
const name = 'grant'
console.log(name.charAt(0).toUpperCase())

function upperCaseIt(arr) {
    for (i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].substr(1)
    }
    console.log(arr)
}
upperCaseIt(['grant', 'ralph', 'wallace', 'bernard', 'Ali'])

function namesOnly(arr) {
    for (i = 0; i < arr.length; i++) {
        let names = []
        names += (arr[i].name)
        console.log(names)
    }
}
namesOnly([
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    },
])

function makeStrings(arr) {
    newArr = []
    for (i = 0; i < arr.length; i++) {
        if (arr[i].age >= 18) {
            console.log(arr[i].name + " can go to the Matrix")
        } else {
            console.log(arr[i].name + " CANNOT go to the Matrix")
        }
    }
}

makeStrings([
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]); 