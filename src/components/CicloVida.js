import { React, Component } from "react";

class Reloj extends Component{
    constructor(props){
        super(props)
    }

    componentWillUnmount(){
        console.log(3, "El componente fue eliminado");
    }

    render(){
        return(<h2>{this.props.hora}</h2>)
    }
}

export default class CicloVida extends Component {
  constructor(props) {
    super(props);

    console.log(0, "El componente se inicializa, aún no esta en el DOM");

    this.state = {
      hora: new Date().toLocaleTimeString(),
      visible: false,
    };

    
  }

//   componentDidMount() {
//       console.log(1, "El componente ya fue renderizado")
//   }

  componentDidUpdate(prevProps, prevState) {
      console.log(2, "El componente fue updateado");
      console.log(prevProps);
      console.log(prevState);
  }

  componentWillUnmount(){
      console.log(3, "El componente ha sido eliminado del DOM")
  }

  tictac = () => {
    this.temporizador = setInterval(()=> {
        this.setState({hora: new Date().toLocaleTimeString()})
    },1000)
  }

  iniciar = () => {
      this.tictac();
      this.setState({visible: true})
  };

  finalizar = () => {
      clearInterval(this.temporizador);
      this.setState({visible: false})
  };
  render() {
    console.log(
      4,
      "El componente se dibuja, o redibuja por algun cambio en el DOM"
    );
    return (
      <div>
        <h2>Ciclo de vida</h2>
        <h3>{this.state.hora}</h3>
        <button onClick={this.iniciar}>Iniciar</button>
        <button onClick={this.finalizar}>Finalizar</button>
        {this.state.visible && <Reloj hora = {this.state.hora}/>}
      </div>
    );
  }
}
