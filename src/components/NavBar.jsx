import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



import { CartWidget } from "./CartWidget";

export const NavBar = () => (
<>
    <Navbar bg="dark" data-bs-theme="dark">
    <Container>
    <Navbar.Brand href="/">EccomersGames</Navbar.Brand>
    <Nav className="me-auto">
        <Nav.Link href="/">Inicio</Nav.Link>
        <Nav.Link href="/category/componente">Componentes</Nav.Link>
        <Nav.Link href="/category/juegos">Juegos</Nav.Link>
        <Nav.Link href="/category/consolas">Consolas</Nav.Link>
    </Nav>
    </Container>
    <CartWidget />
</Navbar>


</>
);