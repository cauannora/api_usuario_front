import React from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';

class UploadForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {valueInput: '', valueOutput: ''};
      this.handleChange = this.handleChange.bind(this);
      this.handleClear = this.handleClear.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {this.setState({valueInput: event.target.value});}
    handleClear() {this.setState({valueInput: "", valueOutput: ""});}
    handleSubmit(event) {
        const texto =  {
            'texto' : this.state.valueInput
        };
        // console.log(this.state.valueInput)
        const uri = `http://localhost:3001/upload/texto`;
        const options = {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(texto)
        };
        fetch(uri, options)
            .then(data =>data.json())
            .then(data_msg => {
                if(data_msg.errors){
                    data_msg.errors.forEach(err => { 
                       alert(err.msg)
                    });
                } else {
                    this.setState({valueOutput: data_msg.data})
                }
            })
            .catch(err => console.log(err))

      event.preventDefault();
    }
    
    render(){
        return(

        <Row>
            <Col>
            <Accordion defaultActiveKey="0">
                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="light" eventKey="0">
                        Desofuscar por Texto:
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>
                                <Card.Title>Adicione um texto no campo abaixo e clique em Desofuscar</Card.Title>
                                <Form>
                                    <Form.Label>Texto:</Form.Label>
                                    <Form.Control as="textarea" value={this.state.valueInput} onChange={this.handleChange} name="texto" id="texto" rows="6" />
                                    <hr id="divider"/>
                                    <Form.Label>Texto desofuscado:</Form.Label>
                                    <Form.Control disabled as="textarea" value={this.state.valueOutput} name="r_texto" id="r_texto" rows="6" />
                                    <Button id="btn" onClick={this.handleSubmit} variant="primary">Desofuscar</Button>
                                    <Button id="btn" onClick={this.handleClear} variant="secondary">Limpar campo</Button>
                                </Form>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="light" eventKey="1">
                        Desofuscar por Anexo:
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="1">
                        <Card.Body>
                                <Card.Title>Anexe o arquivo .log, .txt para desofuscar!</Card.Title>
                                <Form action="http://localhost:3001/upload/file" 
                                method="POST" encType="multipart/form-data">
                                    <Form.Group>
                                        <Form.Label>Arquivo para ser desofuscado</Form.Label>
                                        <Form.File id="attachment" name="attachment"/>
                                    </Form.Group>   
                                    <Button id="btn" type='submit' variant="primary">Desofuscar</Button>
                                </Form>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
            </Col>
        </Row>  
    )
}
}

export default UploadForm;