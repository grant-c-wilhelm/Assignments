var readlineSync = require('readline-sync');
var name = readlineSync.question('Whats up mother brother! Whats your name man?!: ');
var enemies = [' Colorado Snowboarder', ' California Ski Bum', ' Ski Tourist', ' dude who wears only spyder ', 'Ski Patrol'];
// just call it User, its convention to name constructors after the noun they generate
function User (name) {
    this.user = name;
    this.activeBro = true;
    this.broHP = 105;
    this.touristInjured = 0;
}
function Tourist() {
    this.type = genRandomTourist();
    this.touristHP = 100;
    this.touristActive = true;
}
var self = new User(name);
function genRandomTourist() {  //generatre random enemy
    var randomNumber = Math.floor(Math.random() * (enemies.length)); //gens randpm enemy from the 3 i have available. Id need to change this up if i add more enemies
    var newTourist = enemies[randomNumber];           //multiplying enemies array by the random number generated to choose a random enemy
    return newTourist;                 //tourist is set equal to random the above comment and information
};
function dealTouristDamage(tourist) {
    var userLocalsOnlyPower = Math.floor(Math.random() * (75 - 25)); //gens users power
    tourist.touristHP -= userLocalsOnlyPower;
    console.log('You just attacked a ' + tourist.type + '\n  Damage dealt was: ' + userLocalsOnlyPower + " pounds of force!");
};
function playerMove() {
    var keyPress = readlineSync.question('If you\'re itching for a fight press "s" \n but if you\'re not feeling it press "q" to be a quitter\n');
    switch (keyPress) {
        case 'q':
            self.activeBro = false;             //you lose the game and bacs you out
            console.log('Dude..The kooks are taking over and youre dead. Get back here asap!!');
            break;
        case 's':
            var tourist = new Tourist;
            console.log('Whoa! A rare ' + tourist.type + ' has a beef with you! ');
            fightLoop(tourist)
    }
};
function fightLoop(tourist) {
    while (self.broHP >= 1 && tourist.touristHP >= 0) {
        dealTouristDamage(tourist);
        touristRepsonse(self, tourist);
        playerMove();
    }
}
function touristRepsonse(self, tourist) {
    if (self.activeBro == true && tourist.touristHP > 0) {  //going to determine the tourists response
        var touristRagePower = Math.floor(Math.random() * (75 - 25 + 1)); //determines the amount of power the tourist has
        self.broHP -= touristRagePower;                 //subtract and total
        console.log(tourist.type + ' just slapped you with about ' + touristRagePower + ' pounds of force! \n Your current hp is ' + self.broHP + '\n ' + tourist.type + ' has ' + tourist.touristHP + ' hp left ');
        if (self.touristHP <= 0) //bro killed a tourist and the kill is added to the count
            tourist.touristActive = false;
        console.log('Nice! ' + self.user + ' You wreaked havoc on the ' + tourist.type)
        if (self.broHP <= 0) {
            self.activeBro = false
            console.log('Dude..The kooks are taking over and youre dead. Get back here asap!!');
        }
    }
};
while (self.broHP >= 0 && self.touristInjured <= enemies.length) {
    console.log('SKIING DOWN THE MOUNTAIN, oh! Skiing down the mountain, oh!')
    playerMove();
}
if (self.broHP > 0) {
    console.log('Youve won the mountain!')
} else {
    console.log('You have lost the mountain')
}
