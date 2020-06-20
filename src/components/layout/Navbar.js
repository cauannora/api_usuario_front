import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Button from 'react-bootstrap/Button'

function LayoutNavbar(props) {
	return (
		<Navbar expand="lg" bg="dark " variant="dark">
			<Nav id="navbarLayout">
			<Navbar.Brand href="/home">Desofuscador</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="mr-auto">
				<Nav.Link href="/home">Home</Nav.Link>
				<Nav.Link href="/sobre">Sobre</Nav.Link>
				<NavDropdown title="Mais" id="basic-nav-dropdown">
					<NavDropdown.Item href="#action/3.1">Cadastro Usuario</NavDropdown.Item>
					<NavDropdown.Item href="#action/3.2">Editar Usuario</NavDropdown.Item>
					<NavDropdown.Item href="#action/3.3">Remover Usuario</NavDropdown.Item>
					<NavDropdown.Divider />
					<NavDropdown.Item href="#action/3.4">Logout</NavDropdown.Item>
				</NavDropdown>
				</Nav>
			</Navbar.Collapse>
			</Nav>
			<Nav id="navbarLayout">
				<Button variant="outline-info">Login</Button>
			</Nav>
		</Navbar>
	);
}

export default LayoutNavbar;