import { useContext } from 'react';
import { Link } from 'react-router-dom';

import carrito from '../assets/carrito.png';
import { CartContext } from '../contexts/CartContext';


export const CartWidget = () => {  
    const { totalWidget } = useContext(CartContext)
    
    return(
        <Link to= "/cart">
    <img src={carrito} alt="carrito"/>
    <span>{totalWidget}</span> 
    </Link>
    )
}