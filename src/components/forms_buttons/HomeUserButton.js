import React from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

function NewButton(){
    return (
        <Row>
            <Col className='pb-2'>
                <Button href="/new">Novo Usuario</Button>
            </Col>
        </Row>
    )
}
export default NewButton;