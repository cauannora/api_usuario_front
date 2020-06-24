import React from 'react';

import Header from '../layout/Header';
import UploadForm from '../forms_buttons/FormUpload';

function DecoderUpload() {
    const title = "Decoder"
    return (
        <React.Fragment>
            <Header title={title}/>
            <UploadForm/>
        </React.Fragment>
        );
}
export default DecoderUpload;