const str = "Sucesso";


function inverterString(s) {
    let strInvertida = '' 
    for (let i = s.length - 1; i >= 0; i--) {
        strInvertida += s[i] 
    }
    return strInvertida; 
}

const resultado = inverterString(str);
console.log(resultado);