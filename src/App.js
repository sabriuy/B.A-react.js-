import logo from './logo.svg';
import './App.css';
import Productos from './componentes/Productos';

function App() {
  return (
    <div className="App">

      <div className='contenedor'>
      <Productos
      nombre='ventana de aluminio 1x1'
      precio='5400'
      imagen='aluminio'
      />
       <Productos
      nombre='chapa de zinc'
      precio='550'
      imagen='chapa'
      />
    </div>

    </div>
  );
}

export default App;
