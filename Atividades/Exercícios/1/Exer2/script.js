function somaNumeros(){
    //Exercício 2.1
    let n1 = parseFloat(prompt("Digite o primeiro numero:"))
    let n2 = parseFloat(prompt("Digite o segundo numero:"))
    let res = n1+n2
    console.log(res)
}

function subtraiNumeros(n1,n2){
    //Exercício 2.2
   console.log(n1-n2)
}
    let n1 = 20;
    let n2 = 10;

function criarObjeto(){
    //Exercício 2.3
    let Usuario = {
     Nome: prompt("Digite seu nome:"),
     Idade: parseInt(prompt("Digite sua idade:")),
     Timefavorito: prompt("Digite o nome do seu time favorito:")
    }
    console.log(Usuario)
}