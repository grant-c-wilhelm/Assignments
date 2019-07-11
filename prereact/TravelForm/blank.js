function seeFamFont() {
    let genFamFonts = ["Serif", "Sans-Serif", "Monospace", "Cursive", "Fantasy"];
    //let text = "";
    let i;
    for (i = 0; i < genFamFonts.length; i++) {
        console.log(genFamFonts[i] + "<br>");
    }
}
seeFamFont();
function fontsNumber(guess) {
    guess = 33
    if (guess === 33) {
        console.log('You guessed the number!');
    } else if (guess <= 0) {
        console.log(`It's definitely above zero!`);
    } else if (guess >= 1 && guess <= 19) {
        console.log(`A bit higher than that!`);
    } else if (guess >= 20 && guess <= 32) {
        console.log(`Getting closer. It's a little higher!`);
    } else if (guess >= 33) {
        console.log(`Too many. Try lower than that.`);
    } else {
        console.log(yep);
    }
    ;
}
fontsNumber(33)
