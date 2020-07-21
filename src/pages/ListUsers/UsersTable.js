import React from 'react';
import api from '../../helpers/api_request'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

import UserDelButton from './UserDelButton';

class UsersTable extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            users: [],
            msg: ""
        }
        this.deleteRow = this.deleteRow.bind(this);
    }
    deleteRow(user_id){
        const res = api.delete(`/${user_id}`);
        res.then(data => {
            this.setState({
                users: this.state.users.filter(user => user.id !== user_id)
            });
        })
        .catch(err => {
            this.setState({msg: "Nenhum usuario encontrado!"})
        });
    }
    componentDidMount() {
        const res = api.get("/");
        res.then(res => {
            if(Array.isArray(res.data.data)) {
                this.setState({
                    users: res.data.data
                })
            } else {
                this.setState({msg: "Nenhum usuario encontrado!"})
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

