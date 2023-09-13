
function array(){
    let n = [3, 4, 5, 6, 2, 1]
    console.log("Variaveis doarray")
    console.log(n)
    console.log("Variavel de indice 0 do array")
    console.log(n[0])
    console.log("Variavel array" + n[6])
    n[6] = "7"
    console.log("Variavel array")
    console.log("Variavel array")
    console.log(n)
    n.push(50)
    n.push(32)
    n.push(33)
    console.log("Variavel array completo")
    console.log(n)
    n.pop()
    console.log("Variavel array completo")
    console.log(n)
    n.pop()
    console.log("Variavel array completo")
    console.log(n)
    
}

function somar(){
    var n1 = parseFloat(prompt("Digite o primeiro número: "))
    var n2 = parseFloat(prompt("Digite o segundo número: "))
    alert(n1 + n2)
 }

 function subtrair(){
    var n1 = parseFloat(prompt("Digite o primeiro número: "))
    var n2 = parseFloat(prompt("Digite o segundo número: "))
    alert(n1 - n2)
 }

 function multiplicar(){
    var n1 = parseFloat(prompt("Digite o primeiro número: "))
    var n2 = parseFloat(prompt("Digite o segundo número: "))
    alert(n1 * n2)
 }

 function dividir(){
    var n1 = parseFloat(prompt("Digite o primeiro número: "))
    var n2 = parseFloat(prompt("Digite o segundo número: "))
    alert(n1 / n2)
 }

 function potencia(){
    var n1 = parseFloat(prompt("Digite o primeiro número: "))
    var n2 = parseFloat(prompt("Digite o segundo número: "))
    alert(n1 ** n2)
 }

 function raiz(){
    var n1 = parseFloat(prompt("Digite o primeiro número: "))
    alert(Math.sqrt(n1))
 }
 

    
function objeto(){
        //produtos
        let carrinho = []

        //Objeto
        let produto = {
            nome_prod:"arroz",
            preco_prod: 9.99,
            marca_prod:"Tio João"
        }
        
        carrinho.push(produto);

        let produto2 = {
            nome_prod:"Feijão",
            preco_prod: 7.35,
            marca_prod:"Namorado"
        }

        carrinho.push(produto2);
        
        console.log(produto)

}


    

//array variavel q pode ter varios valores, possuem o mesmo tipo, conjunto de valores
// +n[6] juntar texto com array, tudo que esta fora do array sera undefined
// console.log - mostrar no console
// push empurrar coisas no vetor, coloca coisas no vetor entra como ultimo elemento, modifica o cumprimento do array
// contrario do push - pop tira a ultima coisa do vetor
// objeto é melhor para guardar elementos de tipos diferentes
//prompt -> aparece no prompt de comando do google
//parseFloat -> aceita valores decimais
//alert -> faz a operação e mostra como alerta da página