import React, { useState } from 'react';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ModalBody from 'react-bootstrap/ModalBody';
import ModalFooter from 'react-bootstrap/ModalFooter';

function UserDelButton(props){
    const userid = props.id;
    const deleteRow = props.deleteRow;

    const [show, setShow]  = useState(false);

    const handleClose = ()=> setShow(false);
    const handleShow = () => setShow(true);
    
    const handleConfirm = ()=>{
        setShow(false);
        deleteRow(userid);
    }

    return(
        <React.Fragment>
            <Button variant='danger' size='sm' onClick={handleShow}>Remover</Button>
            <Modal show={show} onHide={handleClose}>
                <ModalBody>Deseja remover este usuario?</ModalBody>
                <ModalFooter>
                    <Button variant='secondary' onClick={handleClose}>Cancelar</Button>
                    <Button variant='danger' onClick={handleConfirm}>Remover</Button>
                </ModalFooter>
            </Modal>
        </React.Fragment>
    )

}

export default UserDelButton;