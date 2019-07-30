// var xhr = new XMLHttpRequest();
// pokemon = [];
// xhr.onreadystatechange = function (){
//     if (xhr.readyState == 4 && xhr.status == 200){
//         var jsonData = xhr.responseText;
//         var data = JSON.parse(jsonData);
//         tempArr = [];
//         tempArr = data.objects[0].pokemon;
//         for (let i = 0; i < tempArr.length; i++){
//             pokemon.push(tempArr[i])
//             console.log(tempArr[i])
//         var pokeData = tempArr[i];
// var node = document.createElement('div');
// var nodeToAppend = document.createTextNode(pokeData)
// node.appendChild(nodeToAppend);
//         } 
//     }

// };

// xhr.open('GET', 'https://api.vschool.io/pokemon', true)
// xhr.send()


var request = axios.get('https://api.vschool.io/pokemon');
request.then(function (response) {
    const pokemonObject = (response.data);
    pokemons(pokemonObject)
})
function pokemons(arr) {
    let arrayPokemonCharacters = []
    console.log(arr.objects[0].pokemon[0])
    arrayPokemonCharacters = arr.objects[0].pokemon
    for (i = 0; i < arrayPokemonCharacters.length; i++) {
        const thePokemonNames = arrayPokemonCharacters[i].name
        
        const firstLetter = arrayPokemonCharacters[i].name[0][0];
        const firstLetterCapitalized = firstLetter.toUpperCase()
        const slicedPokemon = firstLetterCapitalized + thePokemonNames.slice(1)
        appendToDomAtPokeList(slicedPokemon)
    }
}
function appendToDomAtPokeList(slicedPokemon) {
    const newNode = document.createElement('li')
    newNode.textContent = slicedPokemon
    document.getElementById('PokemonList').appendChild(newNode)
}

