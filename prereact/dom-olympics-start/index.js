// const newHeader = document.createElement('h1')
// const newHeaderText = document.createTextNode('Check out my messaging app!');
// newHeader.setAttribute('class', 'header');
// newHeader.prepend(newHeaderText);

// document.getElementsByTagName('body')[0].prepend(newHeader)

// const newSubHeader = document.createElement('h6');
// const newSubHeaderText = document.createTextNode("Built using JavaScript");
// newSubHeader.prepend(newSubHeaderText);
// document.getElementsByTagName('h1')[0].appendChild(newSubHeader)

// var subHeader1 = document.createElement('span');
// subHeader1.innerHTML = ' wrote the javascript';
// document.getElementsByTagName('div')[0].prepend(subHeader1);

// var subHeader = document.createElement('span');
// subHeader.innerHTML = 'G-Money';
// subHeader.style.color = "#0000FF";
// document.getElementsByTagName('div')[0].prepend(subHeader);



// //Start for clear dialogue
// function clearDialogueChat(dialogue) {
//     for (i = 0; i < dialogue.length; i++) {
//         dialogue[i].innerHTML = "  ";
//     }
// }
// document.getElementById("clear-button").addEventListener('click', function () {
//     let dialogue = document.getElementsByClassName('messages');
//     clearDialogueChat(dialogue);
// });
// //End for clear dialogue
// //clear all right
// document.getElementById('clear-right').addEventListener('click', () => {
//     let dialogue = document.getElementsByClassName('message-right')
//     clearDialogueChat(dialogue)
// })
// //end clear all right
// //clear all left
// document.getElementById('clear-left').addEventListener('click', () => {
//     let dialogue = document.getElementsByClassName('message-left');
//     clearDialogueChat(dialogue)
// })
// //add message right side
// document.getElementById('send-button-right').addEventListener('click', (e) => {
//     let userText = document.sendNewMessageRight.messageText.value;
//     let newMessage = document.createElement('div')
//     newMessage.setAttribute('class', 'message-right')
//     newMessage.prepend(userText);
//     document.getElementsByClassName('messages')[0].appendChild(newMessage)
// }
// )
// //add message left
// document.getElementById('send-button-left').addEventListener('click', (e) => {
//     let userText = document.sendNewMessageLeft.messageText.value;
//     let newMessage = document.createElement('div');
//     newMessage.prepend(userText);
//     newMessage.setAttribute('class', 'message-left');
//     document.getElementsByClassName('messages')[0].appendChild(newMessage)
// })


const myArray = [2, 5, 3, 1, 2, 5, 676, 34, 25, 654, 28, 9809, 89, 65, 32, 12, 411, 654, 678, 43, 69]
const colorArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g']
function swap(array, i, j) {
    let temp = array[i];
    array[i] = array[j]
    array[j] = temp
}

function bubbleSort(array) {
    let swapped
    do {
        swapped = false
        for (i = 0; i < array.length; i++) {
            if (array[i] && array[i + 1] && array[i] > array[i + 1]) {
                swap(array, i, i + 1);
                swapped = true
            }
        }
    } while (swapped)
    return array;

}
function binarySearch(array, targetNum) {
    let left = 0
    let right = array.length - 1
    bubbleSort(array)
    while (left <= right) {
        const mid = left + Math.floor((right - left) / 2); //splits arg arr in 2
        if (array[mid] === targetNum) {
            return mid;
        }
        if (array[mid] < targetNum) {
            left = mid + 1
        } else {
            right = mid - 1
        }
    }
}
console.log(bubbleSort(myArray))
console.log(binarySearch(myArray, 678))
console.log(myArray[19])
