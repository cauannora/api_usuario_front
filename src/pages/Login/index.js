import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import api from '../../helpers/api_request';
import { login, isAuthenticated } from '../../helpers/auth';
import { Form, Container, MsgError, DivSucesso } from './styles';

class SingIn extends Component{  
    state = {
        email: "",
        password: "",
        success: false,
        msg: "",
        error: ""
    };

    handleSignUp = e => {
        const {email, password} = this.state;
        e.preventDefault();
        const res = api.post('/login', {username: email, password: password});
        res.then((res) => {
            const token = res.data.token;
            if(token){
                login(token);
                this.props.history.push('/')
            } else {
                this.setState({msg: "Ocorreu um erro, tente novamente!"})
            }
        })
        .catch(err =>{
            if(err.response && err.response.status === 422){
                let error = {}
                err.response.data.errors.map(erro => error[erro.param] = erro.msg);
                this.setState({error: error, msg: ''});
            } else if(err.response && err.response.status === 403) {
                this.setState({msg: err.response.data.msg, error: {}})
            } else {
                this.setState({msg: err.response.data.msg, error: {}})
            }
        })
        
    }

    render() {
        if(isAuthenticated()){
            return (
                <Container>
                    <DivSucesso>
                        <h2>Você está autenticado!</h2>
                        <hr/>
                        <Link to='/'>Home</Link>
                    </DivSucesso>
                </Container>
            )
        } else {
            return (
                <Container>
                    <Form onSubmit={this.handleSignUp}>
                    <label>Entrar</label>
                    {this.state.msg && <p>{this.state.msg}</p>}
                    {this.state.error['username'] && <MsgError>{this.state.error['username']}</MsgError>}
                    <input 
                        type="email"
                        placeholder="Endereço de e-mail"
                        onChange={e => this.setState({ email: e.target.value })}
                    />
                    {this.state.error['password'] && <MsgError>{this.state.error['password']}</MsgError>}
                    <input 
                        type="password"
                        placeholder="Senha"
                        onChange={e => this.setState({ password: e.target.value })}
                        />
                    <button type="submit">Autenticar</button>
                    <hr/>
                    <Link to='/register'>Registre-se</Link>
                    </Form>
                </Container>
            )
        }
    }
}

export default SingIn;