import React from 'react';

function Navbar(props) {
	return (
		<div className="nav">
			<ul>
				<li><a href="./">Introdução</a></li>
				<li><a href="./home">Usuários</a></li>
				<li><a href="./new">Adicionar Usuário</a></li>
			</ul>
		</div>
	);
}

export default Navbar;