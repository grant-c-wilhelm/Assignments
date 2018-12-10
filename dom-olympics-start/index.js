
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


document.getElementById("clear-button").addEventListener('click',function(e){
    var clear = document.getElementsByClassName('message-left');
        
});

// document.getElementsByClassName('.messages').prep = ' '




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


