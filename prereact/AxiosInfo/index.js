var request = axios.get('https://api.vschool.io/pokemon');
request.then(function (response) {
    const pokemonObject = (response.data);
    pokemons(pokemonObject)
})
function pokemons(arr) {
    let arrayPokemonCharacters = []
    arrayPokemonCharacters = arr.objects[0].pokemon
    //Below array will be used in the loop to take in names
    let sortedPokiesArray = []
    arrayPokemonCharacters.map(pokemonCharacters => {
        //Storing names from object to a variable
        const thePokemonNames = (pokemonCharacters.name)
        //Pushing those names to the emtpy array created outside scope above.
        sortedPokiesArray.push(thePokemonNames)
        //Below is sorting
        theSorter(sortedPokiesArray)
    })
    //Mapping through the sorted array and capitalizing each first letter
    sortedPokiesArray.map(individualPokie => {
        const firstLetter = individualPokie[0][0];
        const firstLetterCapitalized = firstLetter.toUpperCase()
        const slicedPokemon = firstLetterCapitalized + individualPokie.slice(1)
        //appending to the DOM with function
        appendToDomAtPokeList(slicedPokemon)
    })
}
//HELPER FUNCTIONS
function appendToDomAtPokeList(slicedPokemon) {
    const newNode = document.createElement('span')
    newNode.textContent = slicedPokemon
    document.getElementById('PokemonList').appendChild(newNode)
}
function theSorter(slicedPokemon) {
    slicedPokemon.sort(function (a, b) {
        if (a < b) return -1;
        else if (a > b) return 1;
        return 0;
    });
}
