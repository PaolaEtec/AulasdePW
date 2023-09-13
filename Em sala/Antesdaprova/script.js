
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
   prod_nome.innerHTML = produto.Nome
   prod_marca.innerHTML = produto.Marca;
   prod_preco.innerHTML = produto.Preco;
   prod_item.appendChild(prod_nome);
   prod_item.appendChild(prod_marca);
   prod_item.appendChild(prod_preco);
   document.getElementById("lista_prod").appendChild(prod_item)

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


