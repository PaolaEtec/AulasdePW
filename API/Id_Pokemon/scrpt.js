const URL = "https://pokeapi.co/api/v2/pokemon/"

function Pokemonid(){
    
    let arrayPokemon = []
    let idinput = document.getElementById("idInput").value

    fetch(URL + "?limit=251").then((response) => {
        if(response.status == 200){
            arrayPokemon = response.json().then(json => {json.results.map( pokemon => {
                idinput = pokemon.id
                let imgPokemon = document.createElement("imgPok")
                fetch(pokemon.url).then( response => imgPokemon = response.json().then(pokemon => imgPokemon.src = pokemon.sprites.front_default))
                
            }
             
                )
                return json})
                return arrayPokemon
        }
    })

}



// Valor do input e botão onclick 
// Procuro esse valor na api pokemon
// exibo o conteudo name dentro desse id 
//exibo a url img desse id
