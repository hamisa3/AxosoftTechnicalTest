import logo from './logo.svg';
import './App.css';
import { Login } from './components/Login';
import Feed from './components/Feed';
import {
  HashRouter,
  Route,
  Routes
} from "react-router-dom";

function App() {



  //Estructura que usaria para guardar el historial de busqueda de cada usuario (sin tener que usar una bbdd)
  var saveLocal = [{"Usuario":{"Clave":"Hamza1234", "BusquedasRecientes" : ["Will Smith", "Arnold", "Di caprio"]}}]
  localStorage.setItem("Usuarios", JSON.stringify(saveLocal));

  return (
    <div>
      <Login></Login>
    </div>
  );
}

export default App;
