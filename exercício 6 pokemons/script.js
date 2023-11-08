const BASEURL = "https://pokeapi.co/api/v2/pokemon/"

function getSixPokemons(){
    let pokemonPokedex = []
   fetch(BASEURL + '?limit=6').then( response => {
        if(response.status == 200){
            pokemonPokedex = response.json().then( json =>{
                json.results.map( pokemon => {
                    let liPokemon = document.createElement("li")
                    let imgPokemon = document.createElement("img")
                    fetch(pokemon.url).then(response => { pokemonImg = response.json().then( (pokemon) => { 
                        (imgPokemon.src = pokemon.sprites.front_default)
                    })}) 
                    liPokemon.innerHTML = pokemon.name
                    liPokemon.appendChild(imgPokemon)
                    document.getElementById("pokemonId").appendChild(liPokemon)
                })
                return json})
                return pokemonPokedex
        }
   })
}