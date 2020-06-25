import React from 'react';
import LayoutJumbotron from '../layout/Jumbotron';

function Home() {
    const title = "Desofuscador"
    return (
        <React.Fragment>
            <LayoutJumbotron title={title}/>
        </React.Fragment>
        );
}
export default Home;