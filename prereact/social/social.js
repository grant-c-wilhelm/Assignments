 var skier = {
    name: "Grant",
    age: 28,
    numFriends () {
        (for i=0; i < this.skiingFriends.length; i++) //trying to create a for loop to fund num of friends
        this.skiingFriends.length
    }
    favoriteRuns: [
        {
            runName: "Gad II",
            difficulty: "black Diamond"
        },
    ]
    ,
    favoriteResorts: [
        "SnowBird", "Park City"
    ],
    skiingFriends: [
        {
            name: "Ali",
                age: 26,
                favoriteRuns: [
                    {
                    runName: "Gad II",
                    difficulty: "red Diamond",}],
                favoriteResorts: ["right ", "left"],
            name: "jeff",
            age: 33,
            favoriteRuns: 
            [
                {
                runName: "Gad 3",
                difficulty: "blue Diamond",
            }
        ]
        ,
            favoriteResorts: ["Alta ", "Brighton"],
            name: "ray",
            age: 42,
            favoriteRuns: 
            [
                {
                runName: "Gad 9",
                difficulty: "yellow Diamond",
            }
        ]
        ,
            favoriteResorts: ["sundance ", "canyons"],
        }
        ,
    ]
    ,
}
var index = skier.name.toUpperCase();
console.log(index);