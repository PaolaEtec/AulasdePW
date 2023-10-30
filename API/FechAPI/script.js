//18/10/23
//Pegar dados da API 
const URL ='https://jsonplaceholder.typicode.com/posts'

function getApidata(){
//Busca dados da API 
//Exibir uma informação na tela

//GET URL ("link da url" endepoint) (método de HTTP) 
//fetch cria nova requisição 
//fetch('${URL}/posts')
//síncrono 

//Assíncrono
//Essecódigo é executados dde maneira assíncrona.
//Eu "Peço" algo para API  e "Espero a resposta"
//Formato .json()
const resultado = fetch(URL).then( response => {console.log(response.json())})


}
const MGTURL = 'https://api.magicthegathering.io/v1'

function getCardsList(){
    fetch(MGTURL + 'cards' ).then(response => {console.log(response.json())})

// exibir imagem no index
}