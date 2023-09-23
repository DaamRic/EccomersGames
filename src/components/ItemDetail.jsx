import { useContext } from "react";
import { ItemCount } from "./ItemCount";
import { CartContext } from "../contexts/CartContext"

export const ItemDetail = ({ product }) => {
    const { addItem } = useContext (CartContext)
    const onAdd = count => addItem (product, count)

    return (
        <div>
        <h1>{product.title}</h1>
        <img src={product.imageID} alt={product.title} class="imgdetalles"/>
        <div class="precios">Detalle:{product.title} </div>
        <div class="precios">Stock: {product.stock} </div>
        <div class="precios">Precio: {product.price} </div>
        <div>{product.categoryID}</div>
        <ItemCount stock={product.stock} onAdd={onAdd} />
        </div>
    );
    };