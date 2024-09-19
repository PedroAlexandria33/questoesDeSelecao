
const fs = require('fs')
const path = './questao03/vetorFAT.json'



if(fs.existsSync(path)){
const dat = fs.readFileSync(path, 'utf-8')

const faturamentoDiario = JSON.parse(dat)

const faturamentoDiaUtil = faturamentoDiario.filter(dia => dia.valor > 0 )

const menorValorDoMes = Math.min(...faturamentoDiaUtil.map(dia => dia.valor))
const maiorValorDoMes = Math.max(...faturamentoDiaUtil.map(dia => dia.valor))

const faturamentoTotal = faturamentoDiaUtil.reduce((acumulativo, dia) => acumulativo + dia.valor, 0) /*(acumulador): O acumulador é a variável que guarda o valor acumulado após cada iteração.
dia (elementoAtual): Em cada iteração, este é o elemento atual do array (nesse caso, cada dia de faturamento do mês).
acumulativo + dia.valor: Em cada iteração, o valor do dia (dia.valor) é somado ao acumulador (acumulativo).
0 (valorInicial): Esse é o valor inicial do acumulador, que começa em 0. Isso significa que a soma começa do zero.*/

const mediaDoMes = faturamentoTotal / faturamentoDiaUtil.length

const diaAcimaDaMedia = faturamentoDiaUtil.filter(dia => dia.valor > mediaDoMes).length

console.log(`Menor valor de faturamento: ${menorValorDoMes.toFixed(2)}`);
console.log(`Maior valor de faturamento: ${maiorValorDoMes.toFixed(2)}`);
console.log(`Número de dias com faturamento acima da média mensal: ${diaAcimaDaMedia}`)
}else{
    console.error('não encontrei o arquivo')
}

// esse código deve ser executado no node.js 

//utilizei um arquivo JOSON com os dados do faturamento e fiz a consumação do arquivo nesses códigos

/*
Menor valor de faturamento: 373.78
Maior valor de faturamento: 48924.24
Número de dias com faturamento acima da média mensal: 10
*/