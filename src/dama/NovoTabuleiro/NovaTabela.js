export const criarTabuleiro  = (tabu) =>{
    const matriz = Array(8)
    let destino = JSON.parse(localStorage.getItem('destino'))
    let origem = JSON.parse(localStorage.getItem('origem'))
    let matriz_gerada = JSON.parse(localStorage.getItem('matriz_gerada'))

    for (let i=0; i < 8; i++){
        matriz[i] = Array(8)
    }

    for (let linha=0; linha < 8; linha++){
        for (let coluna=0; coluna < 8; coluna++){
            matriz[linha][coluna] = tabu[linha][coluna]
        }
    }
    //* Gerar matriz com o destino que foi dado
    if (destino && origem){
        for (let linha=0; linha < 8; linha++){
            for (let coluna=0; coluna < 8; coluna++){
                matriz[destino.y][destino.x] = origem.n === 1 | origem.n === 2 && origem.n
            }
        }
        saveMatriz(matriz)
        
    }

    console.log(matriz_gerada);
    return matriz;

    // if (origem.x !== destino.x && origem.y !== destino.y){
    //     if (destino.x && destino.y){
    //         for (let linha=0; linha < 8; linha++){
    //             for (let coluna=0; coluna < 8; coluna++){
    //                 matriz[destino.y][destino.x] = origem.n === 1 ? 1 : 2
    //             }
    //         }
    //         return console.log('Tabuleiro Gerado',matriz);
    //     }
    // }
    // return console.log('Tabuleiro Original',matriz);
}
export const saveMatriz = (matriz) =>{
    if (matriz){
        localStorage.setItem('matriz_gerada',JSON.stringify(matriz))
    }
}
export const saveOrigem = (origem)=>{
    if (origem){
        localStorage.setItem('origem',JSON.stringify(origem))
    }
}
export const saveDestino = (destino) => {
    if (destino){
        localStorage.setItem('destino',JSON.stringify(destino))
    }
}