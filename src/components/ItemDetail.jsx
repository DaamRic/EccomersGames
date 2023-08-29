export const ItemDetail = ({product}) => <div class="bloque">
<h1>{product.name}</h1>
<img class="imgdetalles" src={product.avatar} />
<div class="precios">STOCK: {product.stock}</div>
<div class="precios">PRECIO: {product.price}</div>
</div>