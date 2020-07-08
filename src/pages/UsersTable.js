import React from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';


import UserDelButton from '../components/forms_buttons/UserDelButton';

class UsersTable extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            users: []
        }
        this.deleteRow = this.deleteRow.bind(this);
    }
    deleteRow(user_id){
        const uri = `http://localhost:3001/${user_id}`;
        const options = {
            method: 'delete' ,
            headers: {
                'Content-Type': 'application/json'
            }
        }
        fetch(uri, options)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                this.setState({
                    users: this.state.users.filter(user => user.id !== user_id)
                });
            })
            .catch(err => console.log(err));
    }
    componentDidMount() {
        fetch('http://localhost:3001/')
            .then(res => res.json())
            .then(data => {
                if(Array.isArray(data.data)) {
                    this.setState({
                        users: data.data
                    })
                } else {
                    //TRATAMENTO DE ERRO
                    throw new Error("Nenhum usuario encontrado!"); 
                }
            })
            .catch(err => console.log(err))
    }
    render(){
        return(
            <Row>
                <Col>
                    
                    <Table striped bordered id="UserTable">
                    <TableHeader />
                    <TableBody users={this.state.users} deleteRow={this.deleteRow}/>
                    </Table>                
                </Col>
            </Row>
        )
    }
}

function TableHeader(){
    return (
       <thead id="TableLayout">
            <tr>
                <th>Nome</th>
                <th>Email</th>
            </tr>
        </thead>
    )
}

function TableBody(props){
    const users = props.users;
    let tbody = '';
    if(users.length > 0){
        tbody = (
            <tbody>
                {users.map(user =>{
                    return (
                        <TableRow user={user} key={user.id} deleteRow={props.deleteRow}/>
                    )
                })
                }
            </tbody>
        )
    } else {
        tbody = (
            <tbody>
                <tr>
                    <td colSpan="5">Nenhum usuario encontrado!</td>
                </tr>
            </tbody>
            )
    }
    return tbody;

}
function TableRow(props){
    const user = props.user;
    const uri = `/edit/${user.id}`
    return(
        <tr>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>
                <Button href={uri}  size="sm">Editar</Button>{" "}
                <UserDelButton id={user.id} deleteRow={props.deleteRow}/>
            </td>
        </tr>
    )
}

export default UsersTable;

