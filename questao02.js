function Fibonacci(num){
    let a = 0
    let b = 1
    let total  

    if (num === a || num === b){
        return `O numero ${num} pertence à sequência de Fibonacci`
    }

    while (b < num){
        total = a + b

        a = b
        b = total
    }

    if(b === num){
        return `O numero ${num} pertence à sequência de Fibonacci`
    }else{
        return `o numero ${num} não pertence a sequência`
    }
}


const num =  8    //<= indique aqui o número que você gostaria de saber se faz parta da sequência ou não



console.log(Fibonacci(num))