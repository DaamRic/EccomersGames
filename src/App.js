import { BrowserRouter, Routes , Route} from 'react-router-dom';
import { NavBar } from './components/NavBar';
import './App.css';
import { ItemDetailContainer } from './components/ItemDetailContainer';
import { ItemListContainer } from './components/itemListContainer';
import { Cart } from './components/Cart';
import { CartProvider } from './contexts/CartContext';

function App() {
  return ( 
    <CartProvider>
    <BrowserRouter>
    <NavBar/>
      <Routes>
      <Route path="/" element ={<ItemListContainer greeting="EccomersGames"/>} />
      <Route path="/Cart" element ={<Cart />} />
      <Route path="/Category/:id" element ={<ItemListContainer greeting="Componentes" />} />

      <Route path="/Item/:id" element ={<ItemDetailContainer />} />
    </Routes>
    </BrowserRouter>
    </CartProvider>
  );
}

export default App;
