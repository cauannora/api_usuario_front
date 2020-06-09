import React from 'react';
import Header from './Header';
import Container from 'react-bootstrap/Container';

function Info(props){
    return (
        <React.Fragment>
            <Header title="Controle de Usuários"/>
			<p>Nos foi solicitado que desenvolvessemos um projeto de persistência de dados de usuários NodeJS, express e React.</p>
			<p>Clique <a href="/home">aqui</a> para acessar o projeto.</p>
        </React.Fragment>
        );
}

export default Info;