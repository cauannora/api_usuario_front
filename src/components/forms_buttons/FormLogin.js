import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function LoginForm() {



  return (
    <Form>
        <Form.Group controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" name="email" />
        </Form.Group>
        <Form.Group controlId="senha">
            <Form.Label>Senha</Form.Label>
            <Form.Control type="password"  name="senha" />
        </Form.Group>
        <Button variant="primary" >Registrar</Button>{' '}
        <Button variant="secondary" type="button" >Cancelar</Button>
       
    </Form>
  );
}
export default LoginForm;
