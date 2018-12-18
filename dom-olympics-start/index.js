
var subHeader1 = document.createElement('span');
subHeader1.innerHTML = ' wrote the javascript';
document.getElementsByTagName('body')[0].prepend(subHeader1);

var subHeader = document.createElement('span');
subHeader.innerHTML = 'G-Money';
subHeader.style.color = "#0000FF";
document.getElementsByTagName('body')[0].prepend(subHeader);

var myHeader = document.createElement('h1');
var HeaderText = document.createTextNode('Javascript made this ');
myHeader.prepend(HeaderText); 
document.body.prepend(myHeader);


function clearDialogueChat(dialogue){
    for (i = 0; i<dialogue.length;i++){
        dialogue[i].innerHTML= " This is nice";
    }
}
document.getElementById("clear-button").addEventListener('click',function(){
    var dialogue = document.getElementsByClassName('messages');
   clearDialogueChat(dialogue);      
}); 

// function clearDialogueChat2(dialogueRight){
//     for (i=0; i < dialogueRight.length; i++){
//         dialogueRight[i].innerHTML='I am nice too!';
//     }
//     document.getElementById('clear-button').addEventListener(click, function(){
//         var dialogueRight = document.getElementsByClassName('message-right');
//         clearDialogueChat2(dialogueRight);
//     })
// }



// var changes = document.getElementById("messages");
// changes.innerHTML = "this is nice";

// var clear = document.getElementById("clear-button"); //refs clear button
// clear.addEventListener("click", function(){
//     document.getElementsByClassName('message right').innerHTML = '';
// });


// var subText = document.createTextNode("G-Money wrote the javascript");
// subHeader.prepend(subText);
// document.body.prepend(subHeader);

// var mySpan = document.createElement('span');
// mySpan.innerHTML = "hi";
// mySpan.style.color = "#ff0000";
// document.getElementsByTagName('body')[0].appendChild(mySpan);


