import { BrowserRouter, Routes , Route } from 'react-router-dom';
import './App.css';
import { ContenedorItem } from './components/itemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer';
import { NavBar } from './components/NavBar';

function App() {
  return ( <>
    <BrowserRouter>
    <NavBar />
    <Routes>
    <Route path="/" element ={<ContenedorItem greeting="EccomersGames" />} />
    <Route path="/category/:id" element ={<ContenedorItem greeting="EccomersGames" />} />
    <Route path="/item/:id" element ={<ItemDetailContainer />} />
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
