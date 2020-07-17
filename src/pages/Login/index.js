import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Form, Container } from './styles';

class SingIn extends Component{  
    state = {
        email: "",
        password: "",
        error: ""
    };

    handleSignUp = e => {
        e.preventDefault();
        alert("Logando");
    }

    render() {
        return (
            <Container>
                <Form onSubmit={this.handleSignUp}>
                <label>Entrar</label>
                {this.state.error && <p>{this.state.error}</p>}
                <input 
                    type="email"
                    placeholder="Endereço de e-mail"
                    onChange={e => this.setState({ email: e.target.value })}
                />
                <input 
                    type="password"
                    placeholder="Senha"
                    onChange={e => this.setState({ password: e.target.value })}
                />
                <button type="submit">Autenticar</button>
                <hr/>
                <Link to='/testeR'>Registre-se</Link>
                </Form>
            </Container>
        )
    }
}

export default SingIn;