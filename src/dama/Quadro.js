import React from 'react';
import { saveDestino, saveOrigem } from './NovoTabuleiro/NovaTabela';
import './Quadro.css';

class Quadro extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            tabuleiro_recebido: props.tabu,
            origem: {
                x: props.y,
                y: props.x,
                n: props.n === 1 | props.n === 2 ? props.n : props.x % 2 === 0 ? props.y % 2 !== 0 ? "preto" : "branco" : props.y % 2 === 0 ? "preto" : "branco"
            },
            destino: {
                x: props.y,
                y: props.x,
            },
        }

        this.getOrigem = this.getOrigem.bind(this)
        this.getDestino = this.getDestino.bind(this)
        
    }
    getDestino (){
        if (this.state.origem.n === "preto"){
            this.setState({
                destino: {
                    x: this.state.destino.y,
                    y: this.state.destino.x
                }
            })
            saveDestino(this.state.destino)
            return this.state.destino
        }
    }
    getOrigem(){
        if (this.state.origem.n === 1 | this.state.origem.n === 2){
            this.setState({
                origem: {
                    x: this.state.origem.y,
                    y: this.state.origem.x,
                    n: this.state.origem.n
                }
            })
            saveOrigem(this.state.origem)
            return this.state.origem
        }
    }
    
    // handleClick(){
    //     let origem_dama=0;
    //     let destino_dama=0;

    //     if (this.state.origem.n === "preto"){
    //         this.setState({
    //             destino: {
    //                 x: this.state.destino.y,
    //                 y: this.state.destino.x
    //             }
    //         })
    //         destino_dama = this.state.destino
    //         // console.log('Destino = ',destino_dama)
    //     }else if (this.state.origem.n === 1 | this.state.origem.n === 2){
    //         this.setState({
    //             origem: {
    //                y: this.state.origem.x,
    //                x: this.state.origem.y,
    //                n: this.state.origem.n
    //             },
    //             destino: {
    //                 x: this.state.destino.y,
    //                 y: this.state.destino.x
    //             }
    //         })
    //         origem_dama = this.state.origem
    //         // console.log('Origem = ',origem_dama)
    //     }
    //     newTabuleiro(this.state.tabuleiro_recebido,origem_dama,destino_dama)
    // }
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
                fix = <div onClick={this.getOrigem} className="disk team-a"></div>
            }
            else if (n === 2) {
                fix = <div onClick={this.getOrigem} className="disk team-b"></div>
            }

            return fix;
        }

        return (
            <div onClick={this.getDestino}  className={"square " + colorSquare(this.props.x, this.props.y)} x={this.props.x} y ={this.props.y}>{ficha(this.props.n)}</div>
        );
    }
}

export default Quadro;