const fatEstado ={
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53
}

const faturamentoTotal = Object.values(fatEstado).reduce((acumulativo, valor) => acumulativo + valor, 0)

for (const estado in fatEstado) {

    const valorEstado = fatEstado[estado]

    const percent = (valorEstado / faturamentoTotal) * 100

    console.log(`${estado}: ${percent.toFixed(2)}%`)
}
/*resultado : SP: 37.53%
RJ: 20.29%
MG: 16.17%
ES: 15.03%
Outros: 10.98%
*/
