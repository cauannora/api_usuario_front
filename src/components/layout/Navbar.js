import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Button from 'react-bootstrap/Button'

function LayoutNavbar(props) {
	return (
		<Navbar expand="lg" bg="dark " variant="dark">
			<Nav id="navbarLayout">
			<Navbar.Brand href="/">Desofuscador</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="mr-auto">
				<Nav.Link href="/">Home</Nav.Link>
				<Nav.Link href="/sobre">Sobre</Nav.Link>
				<NavDropdown title="Mais" id="basic-nav-dropdown">
					<NavDropdown.Item href="/new">Cadastro Usuario</NavDropdown.Item>
					<NavDropdown.Item href="/lista">Lista de Usuarios</NavDropdown.Item>
					<NavDropdown.Divider />
					<NavDropdown.Item href="/decode">Desofuscador</NavDropdown.Item>
					{/* <NavDropdown.Item href="#action/3.4">Logout</NavDropdown.Item> */}
				</NavDropdown>
				</Nav>
			</Navbar.Collapse>
			</Nav>
			<Nav id="navbarLayout">
				<Button href='/login' variant="outline-info">Login</Button>
			</Nav>
		</Navbar>
	);
}

export default LayoutNavbar;