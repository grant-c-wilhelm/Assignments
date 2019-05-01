var readlineSync = require('readline-sync');

var keyFound = false;
var gameWon = false;
let playerDead = false
var endGame = false;

while (gameWon == false) {
    var choices = ['Put hand in hole.', 'Find the key.', 'Open the door.'];
    index = readlineSync.keyInSelect(choices, 'Pick you Destiny');
    switch (index) {
        case 0:
            break;


        case 1:  //
            if (!keyFound) { //if you look for the key and dont have it youll find it
                keyFound = true;
                gameWon = false;
                playerDead = false;
                console.log('WHOA! An old skeleton key!')
            }
            else {
                console.log('Theres nothing there!'); //if you open the door without looking for the key first
                gameWon = false;
                playerDead = false;
                gameWon = false;
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
                playerDead = false;
            }
            break;
        default:
            console.log('uhh... whatre you doing?') //if you dont select one of the available options
            break;
    }
    if (playerDead === true) {
        console.log("You are dead");
        break;
    } else if (gameWon === false && keyFound === true) {
        console.log("Congrats! You found the key. But hwere will you use it?")
    }
    else if (gameWon && keyFound === true) {
        console.log('congratulations you have won the game')
    }
    // gameWon && keyFound ? console.log('Youve WON!!') : console.log('You have not won! -_- ')
}
