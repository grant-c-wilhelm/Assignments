const readlineSync = require('readline-sync');
let name = readlineSync.question("Welcome to my game! Whats your name? ");
const enemies = ['The Joker', 'Penguin', 'Phish Mooney', 'Random Mobster', 'Random Hitman', 'Regular Street thug'];

function User(name) {
    this.user = name;
    this.userActive = true;
    this.userHp = 75;
    this.enemyKills = 0;
}
function Enemy() {
    this.name = enemyPicker(enemies);
    this.enemyHp = 75;
    //    this.enemyActive = true;
}
const self = new User(name)

function enemyPicker(arr) {
    const randomNumber = Math.floor(Math.random() * (arr.length))
    const newEnemy = arr[randomNumber];
    // arr.slice(randomNumber, 1)
    return newEnemy;
}


function userRandomPowerGenerator() {
    const userPower = Math.floor(Math.random() * 75);
    return userPower;
}
function enemyRandomPowerGenerator() {
    const enemyPower = Math.floor(Math.random() * 75);
    return enemyPower;
}
function playerMovement() {
    let keyPress = readlineSync.question("To engage into a fight please press 'F'. To quit the game please press 'Q' ")

    switch (keyPress) {
        case 'q'://call fight loop if both are still alive.
            self.userActive = false
            console.log("you have lost the game, try again later")
            break;
        case 'f':
            const enemy = new Enemy();
            console.log("Whoa! You have encountered a " + enemy.name);
            console.log(enemy)

    }
   
}

function battleSequence(self, enemy) {
    userRandomPowerGenerator();
    enemyRandomPowerGenerator();

    self.userHp -= enemyPower;
    enemy.enemyHP -= userPower;

    console.log(enemy.type + " just dealt " + enemyPower + ". You dealt " + userPower + '.');
}
playerMovement()





