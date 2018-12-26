


function forception(people, alphabet){
    var alphabet = "abcdefghijklmnopqrstuvwxyz"
    var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"]
    var arr = [];
    for (i=0; i<people.length;i++){
        arr.push(people[i]+ ',' + alphabet);
    }console.log(arr);
}
forception();