/*
This code contains only syntax and code style problems. The logic of the code works,
so DO NOT change the functionality of anything in here.

In short, you shouldn't need to add your own statements anywhere,
just fix the existing ones.
*/

// Written by Kent, Clark

/*
things are looking pretty good. The indetation is my biggest concern.
the white space around oporators is there other thing
*/


var enemies= ["Lex","Batman","Darkseid","Brainiac","General Zod","Doomsday"];

function whoWins (isThereKryptonite, enemyName) {
    if (!isThereKryptonite) {
        return "Superman beats " + enemyName + ", of course";
    }
    else {
        return "Depends on how quick Superman can get rid of the Kryptonite. " + enemyName + " could possibly win this one.";
    }
}

for (var i =0; i< enemies.length; i++) {
  // that equal sign and that less then symbol need space on both sides
    var isThereKryptonite; 
         if (i % 2 ===0) {
          //  triple equals needs space on the right too
            isThereKryptonite = true;
    }   else {
            isThereKryptonite = false;
    }
    console.log(whoWins(isThereKryptonite,enemies[i]));
}

function howAttractedIsLoisLaneToMe() {
    // 1 is not at all attracted, 10 is "super" attracted...
    return Math.floor((Math.random()*10)+1);
    // spread 'em! with spaces!
}

console.log(howAttractedIsLoisLaneToMe) ;

var clarkKent = true;
var superman = false;

while (clarkKent){
    console.log("I'm just a nerdy columnist");
    
    var phoneBoothQuickChange = Math.random() 
    // since this if statement is not inside and other thing 
    // exept the while loop, it only gets one level of indetation
        if (phoneBoothQuickChange >= 0.5) {
            clarkKent=false;
            superman=true;
            // spaces^^
            console.log("Now I'm Superman!");
        }
}

