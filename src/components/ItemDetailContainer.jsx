import {useState , useEffect} from "react";
import { useParams } from "react-router-dom";
import { ItemDetail } from "./ItemDetail";
import Container from 'react-bootstrap/Container';
import { getFirestore, doc , getDoc } from "firebase/firestore"


export const ItemDetailContainer = (props) => {  
const [product, setProduct] = useState (null)
const [loading, setLoading] = useState(true)

const { id } = useParams ();

useEffect(() => {
    const db = getFirestore()

    const refDoc = doc(db, "Items", id)

    getDoc(refDoc).then(snapshot => {
        setProduct({ id: snapshot.id, ...snapshot.data()})
    })
    .finally(() => setLoading(false))
}, [])

    if(loading) return <div>Loading...</div>

    return (
        <Container className='mt-4'>
        <h1>DETALLE</h1>
        <ItemDetail product={product} />
        </Container>
    );
    
};