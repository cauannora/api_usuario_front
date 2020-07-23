import React from 'react';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import api from '../../../helpers/api_request';

class DecodeText extends React.Component {
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
    handleClear() {this.setState({valueInput: "", valueOutput: "", msg: ""});}
    handleSubmit(event) {
        event.preventDefault();
        const res = api.post('/decode/texto', {texto: this.state.valueInput});
        res.then(res => {
                this.setState({valueOutput: res.data.data, msg: ""})
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
    }
        
    render(){
        return(
            <Form>
                <Form.Label>Texto:</Form.Label>
                <Form.Control as="textarea" value={this.state.valueInput} onChange={this.handleChange} name="texto" id="texto" rows="6" />
                <hr id="divider"/>
                <Form.Label>Texto desofuscado:</Form.Label>
                <Form.Control disabled as="textarea" value={this.state.valueOutput} name="r_texto" id="r_texto" rows="6" />
                {this.state.msg && <p style={{color: 'tomato',marginTop: '10px'}}>{this.state.msg}</p>}
                <Button id="btn" onClick={this.handleSubmit} variant="primary">Desofuscar</Button>
                <Button id="btn" onClick={this.handleClear} variant="secondary">Limpar campo</Button>
            </Form>
    )
    }
}

export default DecodeText;