import React from 'react';
import { newTabuleiro } from './NovoTabuleiro/NovaTabela';
import Quadro from './Quadro';
import './Tabuleiro.css'

class Tabuleiro extends React.Component 
{
    constructor(props) 
    {
        super(props);

        this.state = {
            tabu:[
                [0, 1, 0, 1, 0, 1, 0, 1],
                [1, 0, 1, 0, 1, 0, 1, 0],
                [0, 1, 0, 1, 0, 1, 0, 1],
                [0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0],
                [2, 0, 2, 0, 2, 0, 2, 0],
                [0, 2, 0, 2, 0, 2, 0, 2],
                [2, 0, 2, 0, 2, 0, 2, 0]
            ],
            novo_tabuleiro: props.newTabuleiro
        }
    }
    render() {
        let x = 0, y = 0;
        
        const rows = this.state.tabu.map((row) => {
            const r = row.map((n) => {
                return <Quadro x={x} y={y++} n={n} tabu={this.state.tabu}/>
            })

            y = 0;
            x = x + 1;
            return <div className="row">{r}</div>
        });

        return (
            <div className="tabuleiro">{rows}</div>
        )
    }
}

export default Tabuleiro;