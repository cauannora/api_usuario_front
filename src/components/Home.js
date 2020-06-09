import React from 'react';
import Header from './Header';
import UsersTable from './UsersTable'
import NewButton from './HomeUserButton'

function UsersList() {
    const title = "Lista de Usuarios"
    return (
        <React.Fragment>
            <Header title={title}/>
            <NewButton/>
            <UsersTable />
        </React.Fragment>
        );
}
export default UsersList;