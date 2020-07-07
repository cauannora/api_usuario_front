import React from 'react';

import Header from '../components/layout/Header';
import UploadForm from '../components/forms_buttons/FormUpload';

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