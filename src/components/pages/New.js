import React from 'react';
import Header from '../layout/Header';
import UserForm from './UserForm';

function UsersNew() {
 return  (
    <React.Fragment>
         <Header title="Criação de Usuarios"/>      
         <UserForm/>
    </React.Fragment>
 );
}

export default UsersNew;