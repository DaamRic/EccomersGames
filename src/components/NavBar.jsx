import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import {CartWidget} from './CartWidget';
import { Link } from 'react-router-dom'


export const NavBar = () => (
<>
    <Navbar bg="dark" data-bs-theme="dark">
    <Container>
    <Navbar.Brand as={Link} to="/">EccomersGames</Navbar.Brand>
    <Nav className="me-auto">
        <Nav.Link as={Link} to="/">Inicio</Nav.Link>
        <Nav.Link as={Link} to="/Category/componente">Componente</Nav.Link>
        <Nav.Link as={Link} to="/Category/juegos">Juegos</Nav.Link>
        <Nav.Link as={Link} to="/Category/consolas">Consolas</Nav.Link>
    </Nav>
    </Container>
    <CartWidget />
</Navbar>


</>
);