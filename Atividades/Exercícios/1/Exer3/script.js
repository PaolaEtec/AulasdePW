function Calculadora(){
    let operacao = prompt("Digite a operação desejada:(Soma, Subtração, Multiplicação ou Divisão)")
    let n1 = parseFloat(prompt("Digite o primeiro numero:"))
    let n2 = parseFloat(prompt("Digite o segundo numero:"))
    
    switch(operacao){
        case 'soma':
            let soma = n1 + n2
            console.log(soma)
            break
        case 'subtração':
            let subtrair = n1 - n2
            console.log(subtrair)
            break
        case 'multiplicação':
            let multiplicacao = n1*n2
            console.log(multiplicacao)
            break
        case 'divisão':
            let divisao = n1/n2
            console.log(divisao)
            break
        case 'Soma':
                let soma2 = n1 + n2
                console.log(soma2)
                break
        case 'Subtração':
                let subtrair2 = n1 - n2
                console.log(subtrair2)
                break
        case 'Multiplicação':
                let multiplicacao2 = n1*n2
                console.log(multiplicacao2)
                break
        case 'Divisão':
                let divisao2 = n1/n2
                console.log(divisao2)
                break
    }
    
}

function mudaConstante(){
    let nome = prompt("Digite seu nome:")
    let sobrenome = prompt("Digite o seu sobrenome:")
    const nome2 = nome
    console.log(nome2)
   // const nome2 = sobrenome
    console.log(nome2)
    //Não é possivel mudar constante
}