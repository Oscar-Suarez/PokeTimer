import './App.css';
import AppBar from './components/AppBar'
import PokePrincipal from './components/PokePrincipal';
import Cronometro from './components/Cronometro';
import Iniciales from './components/Iniciales'
import PokeSalvaje from './components/PokeSalvaje';
import Coleccion from './components/Coleccion';
import { Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import { MyContextProvider } from './MyContext';
import Dex from './components/Dex';


function App() {

  return (
    <MyContextProvider>
    <div className="App">

      <Router>
      <AppBar/>
        <Routes>
          <Route path='/' element={[<Dex key={"Pokedex"} />, ]} />
          <Route path='/Iniciales' element={[<Iniciales key={"iniciales" } />, ]} />
          <Route path='/Perfil' element={[<PokePrincipal key={"pp"}/>, <Cronometro key={"crono"}/>]}/>
          <Route path='/PokeSalvaje' element={[<PokeSalvaje key={"PokeSalvaje"}/>, ]}/>
          <Route path='/Colección' element = {[ <Coleccion key={"Coleccion"}/>]}/>
        </Routes>
      </Router>
    </div>
    </MyContextProvider>
  );
}

export default App;

