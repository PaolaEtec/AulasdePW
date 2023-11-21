const URL = "https://pokeapi.co/api/v2/pokemon/"

function Pokemonid(){
    
    let arrayPokemon = []
    let idinput = document.getElementById("idInput").value

    fetch(URL + "?limit=251").then((response) => {
        if(response.status == 200){
            arrayPokemon = response.json().then((respons) => )
        }
    })

}