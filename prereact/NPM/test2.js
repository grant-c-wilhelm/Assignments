// function anticaps(string) {
//     return string.split('').map(str => str === str.toUpperCase() ? str = str.toLowerCase() : str = str.toUpperCase()).join('')

// }

function anticaps(strings) {
    return strings.split('').map(string => string === string.toUpperCase() ? string = string.toLowerCase() + string : string = string.toUpperCase() - string).join('')

}
console.log(anticaps('FRANK'))