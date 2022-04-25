const main = document.querySelector("main")
const searchForm = document.querySelector("form#pokemon-search")

searchForm.addEventListener("submit", searchFormHandler)

function searchFormHandler(event) {
    event.preventDefault()

    const pokemonName = searchForm.elements.pokemon.value.toLowerCase()
    console.log("The user searched for:", pokemonName)

    getPokemonDataForGallery(pokemonName) // refactoring
}

function getPokemonDataForGallery(pokemonNameOrId) {
    // EXAMPLE: GET https://pokeapi.co/api/v2/pokemon/articuno
    // EXAMPLE: GET https://pokeapi.co/api/v2/pokemon/12
    fetch("https://pokeapi.co/api/v2/pokemon/" + pokemonNameOrId)
        .then(response => response.json())
        .then(renderPokemonInGallery)
}

function renderPokemonInGallery(pokemon) {
    const pokemonElement = appendPokemonElement(pokemon.name, main)
    appendPokemonSprite(pokemon.sprites.front_default, pokemonElement)
    appendPokemonTitle(pokemon.name, pokemonElement)
}