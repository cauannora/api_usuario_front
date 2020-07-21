import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Button from 'react-bootstrap/Button'
import { logout } from '../../helpers/auth'

import {isAuthenticated} from '../../helpers/auth'

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
					<NavDropdown.Item href="/register">Cadastro Usuario</NavDropdown.Item>
					<NavDropdown.Item href="/lista">Lista de Usuarios</NavDropdown.Item>
					<NavDropdown.Divider />
					<NavDropdown.Item href="/decode">Desofuscador</NavDropdown.Item>
				</NavDropdown>
				</Nav>
			</Navbar.Collapse>
			</Nav>
			<Nav id="navbarLayout">
				{ isAuthenticated() && <Button onClick={() => { 
						logout();
						document.location = '';
					}} variant="outline-danger">Logout</Button>
				}
				{ !isAuthenticated() && <Button href="/login" variant="outline-light">Login</Button> }
			</Nav>
		</Navbar>
	);
}


export default LayoutNavbar;