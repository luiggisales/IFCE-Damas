import React from 'react';
import { newTabuleiro } from './NovoTabuleiro/NovaTabela';
import './Quadro.css';

class Quadro extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            tabuleiro_recebido: props.tabu,
            tabuleiro_gerado: 0,
            origem: {
                y: props.x,
                x: props.y,
                n: props.n === 1 | props.n === 2 ? props.n : 'não é peça'
            },
            destino: {
                x: props.y,
                y: props.x,
            },
        }
        this.handleSquare = this.handleSquare.bind(this)
        this.handleToken = this.handleToken.bind(this)
    }
    handleSquare(event){
        event.preventDefault();
        if (this.state.origem.n === 'não é peça'){
            this.setState({
                destino: {
                    y: this.props.y,
                    x: this.props.x,
                }
            })
            // console.log(this.state);
        }
        // const page = new Page(this.state.origem,this.state.destino) //* Função que gera a matriz com os movimentos da dama
        // console.log(page)
        newTabuleiro(this.state.tabuleiro_recebido,this.state.origem,this.state.destino)
    }
    handleToken(event){
        event.preventDefault();
        this.setState({
            origem: {
                y: this.state.origem.y + event.offsetX,
                x: this.state.origem.x + event.offsetX,
                n: this.state.origem.n
            },
            destino: {
                y: 0,
                x: 0,
            }
        })
        // console.log(this.state)
    }
    render() {
        const colorSquare = (x, y) => {
            let color = "";

            if (x % 2 === 0) {
                color = (y % 2 !== 0 ? "painted" : "")
            } else {
                color = (y % 2 === 0 ? "painted" : "")
            }

            return color;
        }

        const ficha = (n) => {
            let fix = "";

            if (n === 1) {
                fix = <div onClick={this.handleToken} className="disk team-a"></div>
            }
            else if (n === 2) {
                fix = <div onClick={this.handleToken} className="disk team-b"></div>
            }

            return fix;
        }

        return (
            <div onClick={this.handleSquare} className={"square " + colorSquare(this.props.x, this.props.y)} x={this.props.x} y ={this.props.y}>{ficha(this.props.n)}</div>
        );
    }
}

export default Quadro;