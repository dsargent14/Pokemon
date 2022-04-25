function appendPokemonElement(name, parentElement) {
    const pokemonElement = document.createElement("article")
    pokemonElement.classList.add("pokemon-element")
    pokemonElement.dataset.pokemon = name
    parentElement.append(pokemonElement)

    return pokemonElement
}

function appendPokemonSprite(imgURL, parentElement) {
    const sprite = document.createElement("img")
    sprite.src = imgURL
    parentElement.append(sprite)
}

function appendPokemonTitle(name, parentElement) {
    const title = document.createElement("h3")
    title.append(name)
    parentElement.append(title)
}