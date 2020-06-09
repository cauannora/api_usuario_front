import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class UserForm extends  React.Component{
   constructor(props){
      super(props);
      this.state = {
         nome: '',
         email: '',
         username: ''
      }
      this.handleCancel = this.handleCancel.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleChange = this.handleChange.bind(this);
   }
     handleChange(e){
      this.setState({
         [e.target.name]: e.target.value
      });
      console.log(this.state)
   }
   handleSubmit(){
      var uri = 'http://localhost:3001'
      var options = {}
      if('id' in this.props){
         const id = this.props.id;

         uri = uri + `/${id}`;
         options = {
            method: 'put',
            headers: {
               'Content-Type':'application/json'
            },
            body: JSON.stringify(this.state)
         }
      } else {
         options = {
            method: 'post',
            headers: {
               'Content-Type':'application/json'
            },
            body: JSON.stringify(this.state)
         }
      }
      fetch(uri, options)
         .then(res => res.json())
         .then(data => {
            console.log(data)
            window.location.href = '/home';
         })
         .catch(err => console.log(err))
   }
   handleCancel(){
      window.location.href = '/home';
   }
   componentDidMount(){
      if('id' in this.props){
         const user_id = this.props.id;
         const uri = `http://localhost:3001/${user_id}`;
         fetch(uri)
            .then(res => res.json())
            .then(data => {
               this.setState({
                  nome: data.data.nome,
                  email: data.data.email,
                  username: data.data.username
               })
            })
            .catch(err => console.log(err))
      }
   }
   render(){
      return  (
            <Form>
               <Form.Group controlId="username">
                  <Form.Label>Nome de Usuario</Form.Label>
                  <Form.Control type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
               </Form.Group>
               <Form.Group controlId="nome">
                  <Form.Label>Nome Completo</Form.Label>
                  <Form.Control type="text"  name="nome" value={this.state.nome} onChange={this.handleChange}/>
               </Form.Group>
               <Form.Group controlId="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email"  name="email" value={this.state.email} onChange={this.handleChange}/>
               </Form.Group>
               <Button variant="primary" onClick={this.handleSubmit}>Registrar</Button>{' '}
               <Button variant="secondary" type="button" onClick={this.handleCancel}>Cancelar</Button>
            </Form>
         );
   }
}

export default UserForm;