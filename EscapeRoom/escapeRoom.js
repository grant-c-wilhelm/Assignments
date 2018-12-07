// you are going to want to use a while loop for this project 
// its going to continue to prompt you until a conditon has been met
var rs=require('readline-sync');

var keyFound = false
var win = false

while(){
    //prompt the user for various things
    //create the options and put them into an array: hand in hole, search for key, open door
    var options = ['put hand in hole', 'open door', 'search for key'];
    var index = rs.keyInSelect(options, 'what do you choose? Shoose wisely...')

    //based on what value the index is (0,1, or 2, -1) a particular action will be performed
//if 0, then break out of the loop
//if 1, then set keyFound to true
//if 2, check vallue keyFound, if true you win, else try again


    //at some point the player either finds the key and opens the door(WIN!) or he or she dies
}

//print a message based on whther the win var is true or false
//no more while loops in the above, while loops will repeat indefinitely and we only need that to happen once