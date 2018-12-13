//seperte out the game logic from the functional logic ie: the game logic is the 
//GAME LOGIC
var player = new player() //player doesnt exist yet, youll have to write it 
var name = rs.question('what is your name traveler')
//prompt user for name and info
while (true){
    //put in while loops to control the game
    var isWalking = rs.keyInSelect(['w', 'press w to continue']);
      //if isWalking true, do stuff
      //if is Walking false, do stuff

}

//FUNCTIONAL LOGIC is what allows the game to actually work,
function Player (name){
    this.name = name;
    this.hp = 100;
    this.inventory = [];
    this.enemiesKilled = 0;
} 