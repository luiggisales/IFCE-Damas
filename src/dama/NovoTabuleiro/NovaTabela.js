export const newTabuleiro = (tabu,origem,destino) =>{
    const matriz = Array(8)

    for (let i=0; i < 8; i++){
        matriz[i] = Array(8)
    }

    for (let linha=0; linha < 8; linha++){
        for (let coluna=0; coluna < 8; coluna++){
            matriz[linha][coluna] = tabu[linha][coluna]
        }
    }

    if (origem.x !== destino.x && origem.y !== destino.y){
        if (destino.x && destino.y){
            for (let linha=0; linha < 8; linha++){
                for (let coluna=0; coluna < 8; coluna++){
                    matriz[destino.y][destino.x] = origem.n === 1 ? 1 : 2
                }
            }
            return console.log('Tabuleiro Gerado',matriz);
        }
    }
    return console.log('Tabuleiro Original',matriz);
    
}