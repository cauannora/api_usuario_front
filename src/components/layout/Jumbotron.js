import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron'

function LayoutJumbotron(props){
    return(
        <Jumbotron id="jumbotronLayout">
            <h1 className="display-4">{props.title}</h1>
            <p className="lead">Sistema de cadastro de usuarios e desofuscador de dados, desenvolvido com React, NodeJS e MySQL</p>
            <hr className="my-4"/>
            <p>Site em desenvolvimento</p>
            <p className="lead">
                <a className="btn btn-primary btn-lg" href="/register" role="button">Cadastre-se</a>
            </p>
        </Jumbotron>   
    )
}

export default LayoutJumbotron;