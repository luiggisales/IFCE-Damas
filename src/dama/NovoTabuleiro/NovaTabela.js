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

    if (origem.n === 1){
        for (let linha=0; linha < 8; linha++){
            for (let coluna=0; coluna < 8; coluna++){
                matriz[origem.y][origem.x] = 1
            }
        }
    }else if (origem.n === 2){
        for (let linha=0; linha < 8; linha++){
            for (let coluna=0; coluna < 8; coluna++){
                matriz[origem.y][origem.x] = 2
            }
        }
    }
    
    return console.log(matriz);;
}