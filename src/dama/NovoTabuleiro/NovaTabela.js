
export class Page {
    constructor(origem ,destino){
        this.origem = origem
        this.destino = destino
    }
    renderTabuleiro(){
        return this.state
    }
}

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
    for (let linha=0; linha < 8; linha++){
        for (let coluna=0; coluna < 8; coluna++){
            matriz[origem.y][origem.x] = 2
        }
    }
    return console.log(origem.n);
}