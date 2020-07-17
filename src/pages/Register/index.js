import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

import api from '../../helpers/api_request'

import { Form, Container, DivSucesso , MsgError } from './styles';

class SingUp extends Component{  
    state = {
        name: "",
        email: "",
        password: "",
        re_password: "",
        sucesse: false,
        msg: "",
        error: {
            // name: 'ERRO',
            // email: 'ERRO',
            // password: 'ERRO',
            // re_password: 'ERRO'
        }
    };

    handleSignUp = e => {
        e.preventDefault();
        const {name, email, password, re_password} = this.state;
        if(!name || !email || !password || !re_password){
            this.setState({msg: "Preencha todos os dados para se cadastrar!"});
            console.log(this.state.msg)
        } else {
            try {
                var res = api.post("/", {
                    name: name, 
                    email: email, 
                    password: password, 
                    re_password: re_password});
                res.then(res => {
                    let error = {}
                    this.setState({sucesse: true ,error: error})
                }).catch(err => {
                    let error = {}
                    
                    err.response.data.errors.map(erro => error[erro.param] = erro.msg);
                    this.setState({error: error, msg: ''});
                })
                
            } catch (err) {
                this.setState({msg: "Ocorreu um erro ao registrar sua conta."});
                console.log(this.state)
            }
        }
    }

    render() {

        if(this.state.sucesse) {
            return(
            <Container>
                <DivSucesso>
                    <h2>Registrado com sucesso!</h2>
                    <hr/>
                    <Link to="/testeL">Login</Link>
                </DivSucesso>
                
            </Container>)
        } else {
                return (
                    <Container>
                        <Form onSubmit={this.handleSignUp}>
                        <label>Registre-se</label>
                        {this.state.msg && <p>{this.state.msg}</p>}
                        <input 
                            type="text"
                            placeholder="Nome do Usuário"
                            onChange={e => this.setState({ name: e.target.value })}
                        />
                        {this.state.error["name"] && <MsgError>{this.state.error['name']}</MsgError>}
                        <input 
                            type="email"
                            placeholder="Endereço de e-mail"
                            onChange={e => this.setState({ email: e.target.value })}
                        />
                        {this.state.error && this.state.error.email && <MsgError>{this.state.error['email']}</MsgError>}
                        <input 
                            type="password"
                            placeholder="Senha"
                            onChange={e => this.setState({ password: e.target.value })}
                        />
                        {this.state.error && this.state.error.password && <MsgError>{this.state.error['password']}</MsgError>}
                        <input 
                            type="password"
                            placeholder="Confirmação de Senha"
                            onChange={e => this.setState({ re_password: e.target.value })}
                        />
                        {this.state.error && this.state.error.re_password && <MsgError>{this.state.error['re_password']}</MsgError>}
                        <button type="submit">Cadastrar</button>
                        <hr/>
                        <Link to="/testeL">Login</Link>
                        </Form>
                    </Container>
                )
        }
    }
}

export default withRouter(SingUp);