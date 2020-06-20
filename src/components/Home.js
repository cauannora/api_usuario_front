import React from 'react';
import LayoutJumbotron from '../components/layout/Jumbotron';

function UsersList() {
    const title = "Desofuscador"
    return (
        <React.Fragment>
            <LayoutJumbotron title={title}/>
        </React.Fragment>
        );
}
export default UsersList;