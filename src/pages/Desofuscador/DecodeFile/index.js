import React from 'react';

import Dropzone from 'react-dropzone';
import {DropContainer, UploadMessage} from './styles';

class DecodeFile extends React.Component {
    renderDragMessage = (isDragActive, isDragReject) => {
        if (!isDragActive) {
          return <UploadMessage>Arraste arquivos aqui...</UploadMessage>;
        }
        if (isDragReject) {
          return <UploadMessage type="error">Arquivo não suportado</UploadMessage>;
        }
        return <UploadMessage type="success">Solte os arquivos aqui</UploadMessage>;
      };    
    render(){
      const { onUpload } = this.props;
        return(
            <Dropzone accept="text/*" onDropAccepted={onUpload}>
                {({getRootProps, getInputProps, isDragActive, isDragReject}) => (
                    <DropContainer {...getRootProps()}
                        isDragActive={isDragActive}
                        isDragReject={isDragReject}
                    >
                        <input {...getInputProps()} />
                        {this.renderDragMessage(isDragActive, isDragReject)}
                    </DropContainer>
                )}
            </Dropzone>
                // <Form action="http://localhost:3001/upload/file" 
                // method="POST" encType="multipart/form-data">
                //     <Form.Group>
                //         <Form.Label>Arquivo para ser desofuscado</Form.Label>
                //         <Form.File id="attachment" name="attachment" onChange={(e) => {
                //             console.log(e.target)
                //         }}/>
                //     </Form.Group>   
                //     <Button id="btn" type='submit' variant="primary">Desofuscar</Button>
                // </Form>
            )
    }   
}

export default DecodeFile;