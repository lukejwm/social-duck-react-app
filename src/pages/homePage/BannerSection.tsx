import {useState} from 'react';
import {CCard, CCardBody, CCardHeader, CCol, CFormInput, CFormLabel, CInputGroup, CRow} from '@coreui/react';

const BannerSection = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [imagePreview, setImagePreview] = useState('');

    const onFileSelected = (e: { target: { files: never[]; }; }) => {
        const file = e.target.files[0];
        setSelectedFile(file);
        setImagePreview(URL.createObjectURL(file));
    };

    return (
        <CCard className="mb-4">
            <CCardHeader>
                Main Header Banner
            </CCardHeader>
            <CCardBody>
                <CRow className="mb-3">
                    <h5>Upload a Banner Image</h5>
                    <CInputGroup className="mb-3">
                        <CFormInput type="file" onChange={onFileSelected} className="form-control" accept="image/*"/>
                        {selectedFile &&
                            <div className="mt-3">
                                <img src={imagePreview} className="img-fluid" alt="Image preview"/>
                            </div>
                        }
                    </CInputGroup>
                </CRow>
                <CRow className="mb-3">
                    <CFormLabel htmlFor="descriptiveText">
                        Descriptive Text
                    </CFormLabel>
                    <CCol sm="10">
                        <input id="descriptiveText" className="form-control"/>
                    </CCol>
                </CRow>
            </CCardBody>
        </CCard>
    );
};

export default BannerSection;
