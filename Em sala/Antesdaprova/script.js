
function Adicionar(){
   const produto = {
    Nome: document.getElementById("prod_nome").value,
    Marca: document.getElementById("prod_marca").value,
    Preco: document.getElementById("prod_preco").value,
   }
   const prod_item = document.createElement("li")
   const prod_nome = document.createElement("h3")   
   const prod_marca = document.createElement("h4")
   const prod_preco = document.createElement("p")
   prod_nome.innerHTML = produto.Nome;
   prod_marca.innerHTML = produto.Marca;
   prod_preco.innerHTML = produto.Preco;
   prod_item.appendChild(prod_nome);
   prod_item.appendChild(prod_marca);
   prod_item.appendChild(prod_preco);
   document.getElementById("lista_prod").appendChild(prod_item)

}
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





//Variaveis: var - só está disponivel na mesma area que foi declarada. Tbm pode ser atualizada Ex: var global {var da função}, var n = hi var n = hi guys
//Let - Pode ser atualizada, mas n pode ser declarada no mesmo espaço, só existe em um espaço. Ex:
//Const - só pode ser declarada um vez dentro de seu escopo, não atualiza. Ex: só assim const = {jndendjenddj}
// .value -> só pega o valor do q foi citado, apenas o valor
// .innerHTML  -> adiciona algo ao HTML, sendo tag ou texto
//getElementById -> pegar um elemnto no html por seu id
//.createElement -> cria elemento, como p, div, h3 para a variavel que vc criou
//.createTextNode -> cria texto para a variavel q vc criou 
//.appendChild -> transfroma a variavel citada em filho de outra


