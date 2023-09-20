function manipulaArrays(){
    let cor = ['branco', 'azul', 'vermelho', 'verde', 'preto', 'amarelo', 'marrom', 'violeta', 'rosa', 'ciano', 'magenta', 'cinza']
    cor.push('laranja')
    console.log(cor)
    cor.pop()
    cor.pop()
    console.log(cor)
    cor.sort();
    console.log(cor)
    cor.splice(1,1)
    console.log(cor)
    cor.unshift('fucsia');
    console.log(cor)
    cor.shift()
    console.log(cor)
}