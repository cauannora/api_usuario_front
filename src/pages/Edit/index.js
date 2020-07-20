import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

import api from '../../helpers/api_request'

import { Form, Container, MsgError } from './styles';

class Edit extends Component{
    constructor(props){
        super(props);      
        this.state = {
            id: "",
            name: "",
            email: "",
            password: "",
            re_password: "",
            sucesse: false,
            msg: "",
            error: {}
        };
    }

    handleEdit = e => {
        e.preventDefault();
        const {name, email, password, re_password} = this.state;
        if(!name || !email || !password || !re_password){
            this.setState({msg: "Preencha todos os dados para se atualizar!"});
            console.log(this.state.msg)
        } else {
            try {
                var res = api.put(`/${this.props.match.params.id}`, {
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
                this.setState({msg: "Ocorreu um erro ao atualizar sua conta."});
                console.log(this.state)
            }
        }
    }
    componentDidMount(){
        const res = api.get(`/${this.props.match.params.id}`)
        res.then(res => {
            console.log(res.data)
            this.setState({
                id: res.data.data.id,
                name: res.data.data.name,
                email: res.data.data.email
            })
        })
        .catch(err => {
            this.setState({msg: "Ocorreu um erro. Tente novamente!"});
        })
    }
    render() {
        return (
            <Container>
                <Form onSubmit={this.handleEdit}>
                <label>Editando Perfil</label>
                {this.state.msg && <p>{this.state.msg}</p>}
                <input 
                    type="text"
                    placeholder="Nome do Usuário"
                    value={this.state.name}
                    onChange={e => this.setState({ name: e.target.value })}
                />
                {this.state.error["name"] && <MsgError>{this.state.error['name']}</MsgError>}
                <input 
                    type="email"
                    placeholder="Endereço de e-mail"
                    value={this.state.email}
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
                <button type="submit">Atualizar Cadastro</button>
                <hr/>
                <Link to="/login">Login</Link>
                </Form>
            </Container>
        )
    }
}

export default withRouter(Edit);