import React, {Component} from 'react';
import { uniqueId } from "lodash";
import filesize from "filesize";

import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import {Container} from './styles';
import DecodeText from './DecodeText/index'
import DecodeFile from './DecodeFile/index'
import FileList from './FileList/index'

import api from '../../helpers/api_request'
class DecoderUpload extends Component {
    state = {
        uploadedFiles: []
    };

    handleUpload = files => {
        const uploadedFiles = files.map(file => ({
          file,
          id: uniqueId(),
          name: file.name,
          readableSize: filesize(file.size),
          progress: 0,
          uploaded: false,
          error: false,
          url: null
        }));
    
        this.setState({
          uploadedFiles: this.state.uploadedFiles.concat(uploadedFiles)
        });
    
        uploadedFiles.forEach(this.processUpload);
      };

    processUpload = uploadedFile => {
        const data = new FormData();

        data.append('attachment',uploadedFile.file);

        api.post("/decode/file", data, {
            onUploadProgress: e => {
                const progress = parseInt(Math.round((e.loaded * 100) / e.total));

                this.updateFile(uploadedFile.id, {
                    progress
                });
            }
            })
            .then(response => {
                console.log(response)
                this.updateFile(uploadedFile.id, {
                    uploaded: true,
                    id: response.data._id,
                    url: response.data.url
                });
            })
            .catch(response => {
                console.log(response)
                this.updateFile(uploadedFile.id, {
                    error: true
                });
            });
    };
    updateFile = (id, data) => {
        this.setState({
            uploadedFiles: this.state.uploadedFiles.map(uploadedFile => {
            return id === uploadedFile.id
                ? { ...uploadedFile, ...data }
                : uploadedFile;
            })
        });
    };
    handleDelete = (id) => {
        this.setState({
          uploadedFiles: this.state.uploadedFiles.filter(file => file.id !== id)
        });
    }
    componentWillUnmount() {
        this.state.uploadedFiles.forEach(file => URL.revokeObjectURL(file.preview));
    }
    render(){
        const { uploadedFiles } = this.state;
        const accord = {
            minWidth: '641px',
            minHeight: 'calc(100vh - 124px)',
            display: 'grid',
            alignContent: 'center'
        }
        return (
            <Container>
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
                                    <DecodeText/>
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
                               <DecodeFile onUpload={this.handleUpload} />
                                {!!uploadedFiles.length && (
                                    <FileList files={uploadedFiles} onDelete={this.handleDelete} />
                                )}
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
            </Container>
            );
    }
}
export default DecoderUpload;