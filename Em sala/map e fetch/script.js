function nome(param1, param2){
    //código
    return

}

//() => {  } função anonima arrow
//Utilidade - instrutura exiigir uma funçaõ como parametro, quando algo ocorre se chama essa função
(param1, param2) => {
    //código
    return
}
//map - resolver problemas do dia a dia, no array inteiro
//Array = [ ]
//objeto produto = {foto, modelo, produto etc} 
//CALLBACK É UMA FUNÇÃO
const numeros = [ 5, 48, 65, 33, 12, 79, 8, 44]
//Para cada elemento do array vc retorna como num * 2
const novoarray = []
numeros.map( 
    (num) => { 
      novoarray.push(num *2 )
    }
     )
    console.log(novoarray)
    // array de 20 valores, colocar numeros pares no result, array com valores pares