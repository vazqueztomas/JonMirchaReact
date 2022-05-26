import React, { Component } from "react";

export class EventosES6 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contador: 0,
    };

    this.sumar = this.sumar.bind(this);
    this.restar = this.restar.bind(this);
  }

  sumar() {
    this.setState({ contador: this.state.contador + 1 });
  }
  restar() {
    this.setState({ contador: this.state.contador - 1 });
  }
  render() {
    return (
      <div>
        <h2>EVENTOS EN ES6</h2>
        <h3>{this.state.contador}</h3>
        <nav>
          <button onClick={this.sumar}>+</button>
          <button onClick={this.restar}>-</button>
        </nav>
      </div>
    );
  }
}

export class EventosES7 extends Component {

    // en ES7 si queremos podemos no utilizar el constructor
  state = {
    contador: 0,
  };


  //declaracion de metodos en un arrow function.
  // no utilizamos let y const porque estamos hablando de un método de la clase.
  sumar = (e) => {
    this.setState({ contador: this.state.contador + 1 });
  }
  restar = (e) => {
    this.setState({ contador: this.state.contador - 1 });
  }
  render() {
    return (
      <div>
        <h2>EVENTOS en ES7</h2>
        <h3>{this.state.contador}</h3>
        <nav>
          <button onClick={this.sumar}>+</button>
          <button onClick={this.restar}>-</button>
        </nav>
      </div>
    );
  }
}

function Boton(props) {
  return <button onClick={props.myOnClick}>Boton componente</button>;
}

export class MasSobreEventos extends Component{
    handleClick = (e, mensaje) =>{
      console.log(e)
      console.log(e.nativeEvent);
      console.log(e.nativeEvent.target);
      console.log(mensaje)
    }
    render() {
        return(
            <div>
                <h2>Mas sobre eventos</h2>
                <button onClick={(e)=> this.handleClick(e, "Hola pasando parametros desde un evento.")}>Saludar</button>
                <Boton myOnClick = {(e) => this.handleClick(e, "Hola papá")}/>
            </div>
        )
    }
}