function Cadastrar(){
    const produto ={
        //Informações dos produtos
        nome: document.getElementById("prod_nome").value,
        marca: document.getElementById("prod_marca").value,
        preco: document.getElementById("prod_preco").value
    }

    //Criando elementos
    const lista_prod = document.createElement("li")
    const prod_nome = document.createElement("h3")
    const prod_marca = document.createElement("h4")
    const prod_preco = document.createElement("p")
    //Criando elemento no HTML 
    prod_nome.innerHTML = produto.nome
    prod_marca.innerHTML = produto.marca
    prod_preco.innerHTML = produto.preco
    //Adicionando informações do produto na lista de produtos
    lista_prod.appendChild(prod_nome)
    lista_prod.appendChild(prod_marca)
    lista_prod.appendChild(prod_preco)

    document.getElementById("Lista").appendChild(lista_prod)
    console.log(produto)
    console.log(lista_prod)

}





