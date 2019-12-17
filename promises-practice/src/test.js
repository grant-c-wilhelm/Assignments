//This code impacts <p-4> through <p-5>
var htmlClickyThing = document.getElementById("clicky")



function myFunction() {
    htmlClickyThing.innerHTML = "THANKS FOR YOUR HELP!"

    if (htmlClickyThing.innerHTML === "THANKS FOR YOUR HELP!") {
        htmlClickyThing.innerHTML = "THANKS FOR YOUR NOTHING!!!!"
    } else if (htmlClickyThing.innerHTML === "THANKS FOR YOUR NOTHING!!!!") {
        htmlClickyThing.innerHTML = "THANKS FOR YOUR HELP!"

    }

}

htmlClickyThing.addEventListener("click", myFunction);
This code impacts <h3> "training" through <p> "education"

function schoolChecker() {
    var schools = ["Codecademy", "Khan Academy", "W3 Schools", "YouTube", "Mobile Apps"];

    var text = "";

    for (var i = 0; i < 10; i++) {
        console.log(i)
        text += schools[i] + "<br>";

    }
    document.getElementById("education").innerHTML = text;
}
schoolChecker() 