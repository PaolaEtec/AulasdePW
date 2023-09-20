function produto(){
    let product = document.getElementById("frmProduto").value
    let li = document.createElement("li")

    li.innerHTML = product
    //document.getElementById("produto").innerHTML = product
    document.getElementById("produto").appendChild(li)
    console.log(product)

}