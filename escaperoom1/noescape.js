var readlineSync = require('readline-sync');

var keyFound = false;
var gameWon = false;
var endGame = false;

while (gameWon==false){
    var choices = ['Put hand in hole.', 'Find the key.', 'Open the door.'];
    index = readlineSync.keyInSelect(choices, 'Pick you Destiny');
    

    switch(index){
        case 0: //hand in hole you will die
            endGame = true;
            break;
        case 1:  //
            if (!keyFound) { //if you look for the key and dont have it youll find it
                keyFound = true;
                console.log('WHOA! An old skeleton key!')
            }
            else  {
                console.log('Theres nothing there!'); //if you open the door without looking for the key first
                }
                break;
        case 2:
        if (!keyFound) {
            console.log('The door is still locked')  //if you open the door without looking for the key first
        }
        else {
            console.log('You have unlocked the door!') //when you open the door after looking for the key
            gameWon = true;
            endGame = true;
        }
        break;
        default:
        console.log('uhh... whatre you doing?') //if you dont select one of the available options
    }
    gameWon ? console.log('Youve WON!!') : console.log('Youre dead BRO!')






}