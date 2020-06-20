import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function Header(props){
    return(
    <Row>
        <Col className='py-5'> <h2>{props.title}</h2></Col>
    </Row>)
}

export default Header;