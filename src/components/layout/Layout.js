import React from 'react';
import Container from 'react-bootstrap/Container';
import LayoutNavbar from '../layout/Navbar';
function Layout(props){
    return (
		<React.Fragment>
			<LayoutNavbar/>
			<Container id="containerLayout">{props.children}</Container>
		</React.Fragment>
	);
}

export default Layout;