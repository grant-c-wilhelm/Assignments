
const calculator = {          //I am making this to keep track of what the user inputs//
    displayValue: '0',       //will display '0' to start
    firstNum: false,           //first number n/a
    secondNumHere: false,       //checking to see if 2nd number is needed of if calculation can be done w/o
    mathOperator: null,       //math operator is n/a
    onSecondVaule: false
}

//if firstnum = false  store that button value on the display 

function buttonClick(e){    
    
        if (calculator.firstNum === false) {
            console.log(document.querySelector(this.value));
        }};

 





// function updateDisplay (){
//     let display = document.querySelector('.display')
//     displayValue = calculator.displayValue;
// }
// updateDisplay();                                     
 
// function firstNumber (){
//      let firstNum = document.querySelector('.number')
//      displayValue = calculator.display;
//  }
//  updateDisplay();

// function secondNumber (){
//     let isSecondNumHere = document.querySelector('.number')
//     displayValue = calculator.display;
// }
// updateDisplay();












// var form = document.querySelector('form');
// var list = document.querySelector('#list');


// form.addEventListener('submit', function(e){
//     e.preventDefault(); // "whatever you normally do dont do it because the sumbit button naturally wants to refresh the page"
//     var data = {
//         fname: this.fname.value,
//         age: this.age.value
    //       veteran: this.veteran.checked,
    //       maritalStatus: this.maritalStatus
//     };
//     handleDisplay(data);

// function handleDisplay(data){
// //creating the elements
//     var wrapper = document.createElement('div');
//     var fnameLabel = document.createElement('p');
//     var ageLabel = document.createElement('p');
// //set text to the values of the inputs
//     fnameLabel.textcontent = "NAME:" + data.fname;
//     ageLabel.textcontent = "Age:" + data.age;
// //append it to the page
//     wrapper.appendChild(fnameLabel);
//     wrapper.appendChild(ageLabel);
//     list.appendChild(wrapper);
// }

//     // alert('Name: ' + form.fname.value + ' Age: ' + form.age.value);
// })
// //alert('Name: ' + e.target.fname.value + ' Age: ' + e.target.age.value);
// //alert('Name: ' + this.fname.value + ' Age: ' + this.age.value);
// //above comments are other ways of writing the same code we have above

// //create elemets 
// //set text to the values of the inputs
// //append it to the page
// //the above steps would get the page to display the user input on the page as an html element