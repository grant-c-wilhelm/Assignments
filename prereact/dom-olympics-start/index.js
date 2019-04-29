const newHeader = document.createElement('h1')
const newHeaderText = document.createTextNode('Check out my messaging app!');
newHeader.setAttribute('class', 'header');
newHeader.prepend(newHeaderText);

document.getElementsByTagName('body')[0].prepend(newHeader)

const newSubHeader = document.createElement('h6');
const newSubHeaderText = document.createTextNode("Built using JavaScript");
newSubHeader.prepend(newSubHeaderText);
document.getElementsByTagName('h1')[0].appendChild(newSubHeader)

var subHeader1 = document.createElement('span');
subHeader1.innerHTML = ' wrote the javascript';
document.getElementsByTagName('div')[0].prepend(subHeader1);

var subHeader = document.createElement('span');
subHeader.innerHTML = 'G-Money';
subHeader.style.color = "#0000FF";
document.getElementsByTagName('div')[0].prepend(subHeader);



//Start for clear dialogue
function clearDialogueChat(dialogue) {
    for (i = 0; i < dialogue.length; i++) {
        dialogue[i].innerHTML = "  ";
    }
}
document.getElementById("clear-button").addEventListener('click', function () {
    let dialogue = document.getElementsByClassName('messages');
    clearDialogueChat(dialogue);
});
//End for clear dialogue
//clear all right
document.getElementById('clear-right').addEventListener('click', () => {
    let dialogue = document.getElementsByClassName('message-right')
    clearDialogueChat(dialogue)
})
//end clear all right
//clear all left
document.getElementById('clear-left').addEventListener('click', () => {
    let dialogue = document.getElementsByClassName('message-left');
    clearDialogueChat(dialogue)
})
//add message right side
document.getElementById('send-button-right').addEventListener('click', (e) => {
    let userText = document.sendNewMessageRight.messageText.value;
    let newMessage = document.createElement('div')
    newMessage.setAttribute('class', 'message-right')
    newMessage.prepend(userText);
    document.getElementsByClassName('messages')[0].appendChild(newMessage)
}
)
//add message left
document.getElementById('send-button-left').addEventListener('click', (e) => {
    let userText = document.sendNewMessageLeft.messageText.value;
    let newMessage = document.createElement('div');
    newMessage.prepend(userText);
    newMessage.setAttribute('class', 'message-left');
    document.getElementsByClassName('messages')[0].appendChild(newMessage)
})









// //Start clear Right side
// function clearRightSide(rightDialogue) {
//     for (i = 0; i < rightDialogue.length; i++) {
//         rightDialogue[i].innerHTML = " ";
//     };
// };
// document.getElementById("clear-right").addEventListener('click', function () {
//     const rightDialogue = document.getElementsByClassName('message-right');
//     clearRightSide(rightDialogue);

// })
// //end 
// //Start clear one message

// function clearOneRightMessage(oneRightMessage) {
//     for (i = 0; i < oneRightMessage.length; i++) {
//         oneRightMessage[0].innerHTML = " "
//     };
// };
// document.getElementById('clear-one-right').addEventListener('click', function () {
//     const oneRightMessage = document.getElementsByClassName('message-right');
//     clearOneRightMessage(oneRightMessage);
// })




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


