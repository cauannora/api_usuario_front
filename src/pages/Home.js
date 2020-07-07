import React from 'react';
import LayoutJumbotron from '../components/layout/Jumbotron';

function Home() {
    const title = "Desofuscador"
    return (
        <React.Fragment>
            <LayoutJumbotron title={title}/>
        </React.Fragment>
        );
}
export default Home;