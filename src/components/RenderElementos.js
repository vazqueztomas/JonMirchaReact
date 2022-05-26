import React, {Component} from 'react'
import data from '../helpers/data.json';

const ElemLista = (props) => {
    return (<li key = {props.id}>{props.el}</li>)
}

class RenderElementos extends Component{
    constructor(){
        super()

        this.state = {
            estaciones : ['Invierno', "Verano", "Otoño", "Primavera"],
        }
    }

    render() {
        return(
            <div>
                <h2>Renderizado de elementos</h2>
                {this.state.estaciones.map((est) => <li key = {est}>{est}</li>)}

                <h3>Frameworks Frontend Javascript</h3>
                <ul>{data.frameworks.map((el) => <ElemLista id = {el.id} el = {el.name}/>)}
                </ul>
                <hr/>   
            </div>
        )
    }
}

export default RenderElementos;