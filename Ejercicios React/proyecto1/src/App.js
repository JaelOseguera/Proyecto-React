
import './App.css';
import Persona from "./componentes/Persona";

function App() {

  //const v_nombre = "Juan Jose";
  //const v_apellido = "Lopez Perez";
  const o_persona = {
    nombre: "Juan Jose",
    apellido: "Lopez Perez",
    edad: 20,
    nacionalidad: "Hondureña",
    genero: "M"
  };

  const f_saludar = (props) => {
    alert("Hola Humano, soy "+ props);
  }

  return (
    <div className="App">
      <header className="App-header">
      <Persona 
            personainfo={o_persona}
            fnsaludar = {f_saludar}/>
      </header>
      
    </div>
  );
}

export default App;
