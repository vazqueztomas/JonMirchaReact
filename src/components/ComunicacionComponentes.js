import { React, Component } from "react";

export default class Padre extends Component {
  state = {
    contador: 0,
  };

  incrementar = (e) => {
    this.setState({ contador: this.state.contador + 1 });
  };
  render() {
    return (
      <div>
        <h2>Comunicacion entre componentes.</h2>
        <Hijo incrementarContador = {this.incrementar }mensaje="Hola mundo desde hijo!" />
        {this.state.contador}
      </div>
    );
  }
}

// Componentes de hijo a Padre, y viceversa 

function Hijo(props) {
  return (
    <div>
      <h2>{props.mensaje}</h2>
      <button onClick = {props.incrementarContador}>Incrementar + </button>;
    </div>
  );
}

// Componentes no relacionados 

