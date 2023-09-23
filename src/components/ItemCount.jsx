import { useState } from "react";
import Swal from "sweetalert2";

export const ItemCount = ({ onAdd , stock }) => {
    const [count, setCount] = useState(1);

    const handleDecreaseCount = () => {
    if(count > 1) {
    setCount(prev => prev - 1);
    }
};

    const handleIncreaseCount = () => {
    if(stock > count ) {
    setCount((prev) => prev + 1); 
    }
};   



return (
    <div className="itemCount">
    <span onClick={handleDecreaseCount}>-</span>
    <span>{count}</span>
    <span onClick={handleIncreaseCount}>+</span>
    <button onClick={() => {
        onAdd(count);
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'AGREGADO AL CARRITO',
            showConfirmButton: false,
            timer: 2000
        });
    }}>Agregar al carrito</button>
    </div>
    );
}