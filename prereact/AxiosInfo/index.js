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
    //const pokemonCharacters = arr.objects[0].pokemon
    let arrayPokemonCharacters = []
    arrayPokemonCharacters = arr.objects[0].pokemon
    arrayPokemonCharacters.map((pokies)=>{
        const pokeData = pokies
        putDataOnDom(pokeData)
    })
}
function putDataOnDom(dataToDisplay){
    const pokemonList = document.getElementById("PokemonList")
    pokemonList.innerHTML=dataToDisplay
    console.log(Object.entries(dataToDisplay))
}

