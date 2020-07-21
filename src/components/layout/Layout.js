import React from 'react';
import Container from 'react-bootstrap/Container';
import LayoutNavbar from '../layout/Navbar';
import Background from '../../img/background.jpg';
function Layout(props){
	const style = {
		backgroundImage: `url(${Background})`,
		backgroundSize: 'cover'
	};
	const containerStyle = {
		backgroundColor: 'rgba(255, 255, 255, 0.7)',
		minHeight: 'calc(100vh - 50px - 74px)'
	}
    return (
		<div style={style}>
			<LayoutNavbar />
			<Container id="containerLayout" style={containerStyle}>{props.children}</Container>
			<footer>
				<p>Todos os direitos reservados &copy; 2020</p>
				<p>Acesse o <a href="http://github.com/cauannora/api_usuario_front" target="_blank" rel='noopener noreferrer'>projeto</a></p>
			</footer>
		</div>
		
	);
}

export default Layout;