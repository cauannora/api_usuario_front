import React from 'react';
import Navbar from './Navbar';
import Container from 'react-bootstrap/Container';

function Layout(props){
	const nav = {
		width: '100%',
		backgroundColor: '#222',
	};
    return (
		<React.Fragment>
			<Navbar/>
			<Container>{props.children}</Container>;
		</React.Fragment>
	);
}

export default Layout;