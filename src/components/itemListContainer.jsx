import { useState , useEffect } from "react"
import { useParams } from "react-router-dom";
import { ItemList } from "./ItemList";

import Container from 'react-bootstrap/Container';
import data from "../data/products.json"




export const ContenedorItem = (props) => {  
const [products, setProducts] = useState ([]);

const { id } = useParams () ;


useEffect(() => {
    const promise = new Promise((resolve,reject) => {
        setTimeout(() => resolve(data), 2000)
    });

    promise.then((data) => { 
        if(!id){
            setProducts(data);
        } else{
            const productFiltered = data.filter(product => product.category === id);
            setProducts(productFiltered)
        }
        });
    }, [id]);

    return (
        <Container className='mt-4'>
        <h1>{props.greeting}</h1>
        <div class="bloques">
        <ItemList products={products} />
        </div>
        </Container>
    );
    
};