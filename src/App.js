import "./App.css";
import CicloVida from "./components/CicloVida";
import Padre from "./components/ComunicacionComponentes";
import {
  EventosES6,
  EventosES7,
  MasSobreEventos,
} from "./components/EventosBinding";
import Formularios from "./components/Formularios";
import HooksPersonalizados from "./components/HooksPersonalizados";
import Referencias from "./components/Referencias";
import RenderCondicional from "./components/RenderCondicional";
import RenderElementos from "./components/RenderElementos";

function App() {
  return (
    <div className="App">
      <RenderCondicional />
      <RenderElementos />
      <EventosES6 />
      <EventosES7 />
      <MasSobreEventos />
      <hr></hr>
      <Padre />
      <hr />
      <CicloVida />
      <hr />
      <HooksPersonalizados />
      <hr />
      <Referencias />
      <hr />
      <Formularios />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}

export default App;
