const miniGameContainer = document.querySelector("#whos-that-pokemon")
const miniGameForm = document.querySelector("#mini-game-form")

const getRandomId = (maxId) => Math.floor(Math.random() * maxId + 1)

const GENERATION4_MAXID = 493
getPokemonDataForMiniGame(getRandomId(GENERATION4_MAXID))

function getPokemonDataForMiniGame(pokemonNameOrId) {
    // EXAMPLE: GET https://pokeapi.co/api/v2/pokemon/articuno
    // EXAMPLE: GET https://pokeapi.co/api/v2/pokemon/12
    fetch("https://pokeapi.co/api/v2/pokemon/" + pokemonNameOrId)
        .then(response => response.json())
        .then(renderPokemonInMiniGame)
}

function renderPokemonInMiniGame(pokemon) {
    const pokemonElement = appendPokemonElement(pokemon.name, miniGameContainer)
    appendPokemonSprite(pokemon.sprites.front_default, pokemonElement)
    appendPokemonTitle(pokemon.name, pokemonElement)
}

miniGameForm.addEventListener("submit", miniGameFormHandler)

function miniGameFormHandler(event) {
    event.preventDefault()

    const pokemonName = miniGameForm.elements.pokemon.value.toLowerCase()
    console.log("The user guessed:", pokemonName)

}