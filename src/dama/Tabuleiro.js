import React from 'react';
import Quadro from './Quadro';
import './Tabuleiro.css'
class Tabuleiro extends React.Component 
{
    constructor(props) 
    {
        super(props);

        this.state = {
            tabuleiro: [
                [0, 1, 0, 1, 0, 1, 0, 1],
                [1, 0, 1, 0, 1, 0, 1, 0],
                [0, 1, 0, 1, 0, 1, 0, 1],
                [0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0],
                [2, 0, 2, 0, 2, 0, 2, 0],
                [0, 2, 0, 2, 0, 2, 0, 2],
                [2, 0, 2, 0, 2, 0, 2, 0]
            ],
            criar_tabuleiro: props.criarTabuleiro
        }
        this.novo_tabuleiro = this.state.tabuleiro
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick(){
        let novo = this.props.criarTabuleiro(this.state.tabuleiro)
        this.setState({
            tabuleiro: novo ?? this.state.tabuleiro
        })
    }
    render() {
        let x = 0, y = 0;

        const rows = this.state.tabuleiro.map((row) => {
            const r = row.map((n) => {
                return <Quadro x={x} y={y++} n={n} tabu={this.state.tabu}/>
            })

            y = 0;
            x = x + 1;
            return <div className="row">{r}</div>
        });
        return (
            <div onClick={this.handleClick} className="tabuleiro">{rows}</div>
        )
    }
}

export default Tabuleiro;