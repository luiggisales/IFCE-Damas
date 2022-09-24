export const criarTabuleiro  = (tabu) =>{
    const matriz = Array(8)

    let destino = JSON.parse(localStorage.getItem('destino'))
    let origem = JSON.parse(localStorage.getItem('origem'))
    let matriz_gerada = JSON.parse(localStorage.getItem('matriz_gerada'))
    let dama_antiga = JSON.parse(localStorage.getItem('dama_antiga'))

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
        if (dama_antiga !== origem.n){
            for (let linha=0; linha < 8; linha++){
                for (let coluna=0; coluna < 8; coluna++){
                    matriz[destino.y][destino.x] = origem.n === 1 | origem.n === 2 && origem.n
                    matriz[origem.y][origem.x] = 0
                }
            }
        }
        localStorage.removeItem('origem')
        localStorage.removeItem('destino')
        saveDamaAntiga(origem.n)
        saveMatriz(matriz)
    }

    //* Gerar matriz com o movimento
    if (matriz_gerada){
        if (destino && origem){
            if (dama_antiga !== origem.n){
                for (let linha=0; linha < 8; linha++){
                    for (let coluna=0; coluna < 8; coluna++){
                        matriz_gerada[destino.y][destino.x] = origem.n === 1 | origem.n === 2 && origem.n
                        matriz_gerada[origem.y][origem.x] = 0
                    }
                }
            }
            saveMatriz(matriz_gerada)
        }
    }
    return matriz_gerada;
}
export const saveDamaAntiga = (n) =>{
    if (n){
        localStorage.setItem('dama_antiga',n)
    }
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