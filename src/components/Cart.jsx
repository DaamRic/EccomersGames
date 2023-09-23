import { Container, Table } from "react-bootstrap"
import { useContext, useState } from "react"
import { CartContext } from "../contexts/CartContext"
import Form from "react-bootstrap/Form"
import { getFirestore, collection , addDoc } from "firebase/firestore"
import Swal from "sweetalert2"

export const Cart = () => {
    const [formValues , setFormValues] = useState({
        name: "",
        phone: "",
        email: "",
    })

    const {clear , items , removeItem} = useContext (CartContext)

    const total = () =>
    items.reduce(
        (acumulador,valorActual) =>
            acumulador + valorActual.quantity * valorActual.price,
            0
    )
    
    const handleChange = ev => {
        setFormValues (prev =>({
            ...prev,
            [ev.target.name]: ev.target.value,
        }))
    }

    const sendOrder =() => {
        const order = {
            name: formValues,
            items,
            total: total(),
        }
    

    const db = getFirestore()
    const orderCollection = collection (db, "orders")
    addDoc(orderCollection, order).then(({ id }) => {
        if (id) {
            setFormValues({
                name: "",
                phone: "",
                email: ""
            });
            clear();
        }
    });
    }

    return (
        <Container>
            <h1>Carrito</h1>
            <Table striped bordered hover variant="dark">
                <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Precio</th>
                    <th>Cantidad</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                    {items.map(item =>(
                        <tr key={item.id}>
                            <td>{item.title}</td>
                            <td>{item.price}</td>
                            <td>{item.quantity}</td>
                            <td>
                                <button onClick={() => removeItem(item.id)}>
                                    Eliminar
                                </button>
                            </td>
                        </tr>
                    ) )}
                    </tbody>
                    <tfoot>
                    <tr>
                        <td>
                            <button onClick={() => clear()}>Borrar todo</button>
                        </td>
                    </tr>
                    <tr>
                        <td>Total</td>
                        <td></td>
                        <td></td>
                        <td>{total()} </td>
                        <td></td>
                    </tr>
                </tfoot>
                    </Table>
                    <h2>Ingrese Sus Datos</h2>
                    <Form>

                    <Form.Group className="mb.3" controlId="fromBasicEmail">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control onChange={handleChange} value={formValues.name} type="text" name="name" required placeholder="Ingrese su Nombre">
                    </Form.Control>
                    </Form.Group>
                    
                    <Form.Group className="mb.3" controlId="fromBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control onChange={handleChange} value={formValues.email} type="text" name="email" required placeholder="Ingrese su email">
                    </Form.Control>
                    </Form.Group>

                    <Form.Group className="mb-3">
                    <Form.Label>Telefono</Form.Label>
                    <Form.Control onChange={handleChange} value={formValues.phone} type="text" name="phone" required placeholder="Ingrese su Telefono"></Form.Control>
                    </Form.Group>
                    </Form>
                    <button onClick={() => {
        sendOrder();
        Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'SU PEDIDO ' + formValues.name +' SE HA COMPLETADO',
        showConfirmButton: false,
        timer: 2000
        });
    }}>
        Comprar
    </button>
        </Container>
    )
}