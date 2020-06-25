import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron'

function LayoutJumbotron(props){
    return(
        <Jumbotron id="jumbotronLayout">
            <h1 class="display-4">{props.title}</h1>
            <p class="lead">Sistema de cadastro de usuarios e desofuscador de dados, desenvolvido com React, NodeJS e MySQL</p>
            <hr class="my-4"/>
            <p>Site em desenvolvimento</p>
            <p class="lead">
                <a class="btn btn-primary btn-lg" href="/new" role="button">Cadastre-se</a>
            </p>
        </Jumbotron>   
    )
}

export default LayoutJumbotron;