import React from 'react';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';

import api from '../../helpers/api_request';
class UploadForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        valueInput: '',
        valueOutput: '', 
        msg: "",
    };
      this.handleChange = this.handleChange.bind(this);
      this.handleClear = this.handleClear.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {this.setState({valueInput: event.target.value});}
    handleClear() {this.setState({valueInput: "", valueOutput: ""});}
    handleSubmit(event) {
        const res = api.post('/decode/texto', {texto: this.state.valueInput});
        res.then(res => {
                this.setState({valueOutput: res.data.data})
            })
            .catch(err => {
                console.log(err.response)
                if(err.response.status >= 400 && err.response.status <=499){
                    this.setState({msg: err.response.data.errors[0].msg})
                    console.log(this.state)
                } else {
                    this.setState({msg: "Ocorreu um erro interno!"})
                }
            })
      event.preventDefault();
    }
    
    render(){
		const style = {
			color: 'tomato',
			marginTop: '10px'
		};
		const accord = {
			minWidth: '641px',
			minHeight: 'calc(100vh - 124px)',
			display: 'grid',
			alignContent: 'center'
		}
        return(
            
            <Accordion defaultActiveKey="0" style={accord}>
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
                                    {this.state.msg && <p style={style}>{this.state.msg}</p>}
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
                                <Form action="http://localhost:3001/upload/file" 
                                method="POST" encType="multipart/form-data">
                                    <Form.Group>
                                        <Form.Label>Arquivo para ser desofuscado</Form.Label>
                                        <Form.File id="attachment" name="attachment" onChange={(e) => {
                                            console.log(e.target)
                                        }}/>
                                    </Form.Group>   
                                    <Button id="btn" type='submit' variant="primary">Desofuscar</Button>
                                </Form>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
    )
}
}

export default UploadForm;