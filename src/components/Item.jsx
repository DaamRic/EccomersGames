import {Link} from "react-router-dom"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


export const Item = ({product}) => (
    <Card key={product.id} style={{ width: '18rem' }}>
    <Card.Img 
    style={{height: "200px"}} 
    variant="top" 
    src={product.imageID} 
/>
    <Card.Body>
    <Card.Title>{product.title}</Card.Title>
    <Card.Text>{product.description}</Card.Text>
    <p class="precios">Stock:</p>
    <Card.Text>{product.stock}</Card.Text>
    <p class="precios">Precio: </p>
    <Card.Text>{`$${product.price}`}</Card.Text>
    <Card.Text>{product.id}</Card.Text>
    <Link to={`/item/${product.id}`}>
    <Button variant="primary">Ver Detalles</Button>
    </Link>
    </Card.Body>
    </Card>
    )