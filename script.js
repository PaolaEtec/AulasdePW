function soma(){
    let n1  = document.getElementById("n1").value
    let n2 = document.getElementById("n2").value
    let res = parseFloat(n1)+parseFloat(n2)
    alert(res)
    console.log
}

function login(){
    let email = document.getElementById('email').value
    let senha = document.getElementById('senha').value
    const s1 = "far@com"
    const s2 = "fo"
    if( email == s1 && senha == s2 ){
        alert("Incrivel")
    }
    else{
        alert("digite de novos")
    }
}


function array(){

    let lista = [9,2,3]
    console.log(lista)
    lista.push(30)
    lista.push(2)
    lista.push(8)
    console.log(lista)
    lista.pop()
    console.log(lista)
    console.log (lista[9])
    lista[5] = 7
    console.log(lista)

}

function lista(){
    let carrinho = []


    let prod = {
        nome: "Arroz",
        marca: "far",
        preco: 2.2
    }

    
    carrinho.push(prod);
    console.log(carrinho)
}




