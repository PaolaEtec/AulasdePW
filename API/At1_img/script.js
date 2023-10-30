//https://pokeapi.co/api/v2/pokemon/23/
//https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png
//https://dog.ceo/api/breeds/image/random
//http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=409741&type=card

const MGTURL = 'https://api.magicthegathering.io/v1'

function getCardsList(){
    fetch(MGTURL + 'cards' ).then(response => {console.log(response.json())})

// exibir imagem no index
}


const DOGURL = 'https://dog.ceo/api/breeds/'
function imgApi(){

fetch(DOGURL + 'image/random').then(response => response.json()).then(data => imgDog.src = data.message)
 
 
 
}