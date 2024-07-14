import React, {useState} from 'react';
import {CButton, CCard, CCardBody, CCol, CContainer, CForm, CFormInput, CInputGroup, CRow} from '@coreui/react';
import {useNavigate} from "react-router-dom";

const OnboardingGallery: React.FC = () => {
    const [gallery, setGallery] = useState<File[]>([]);
    const [fileUrls, setFileUrls] = useState<string[]>([]);
    const navigate = useNavigate();

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            const filesArray = Array.from(e.target.files);
            setGallery([...gallery, ...filesArray]);
            const urlsArray = filesArray.map(file => URL.createObjectURL(file));
            setFileUrls([...fileUrls, ...urlsArray]);
        }
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Handle form submission or storage logic
        console.log('Uploaded files:', gallery);
        alert('Gallery uploaded successfully!');
        navigate('/onboarding/success'); // Navigate to home or any other route
    };

    return (
        <div className="bg-custom-yellow min-vh-100 d-flex flex-row align-items-center">
            <CContainer>
                <CRow className="justify-content-center">
                    <CCol xs="12" md="10" lg="8" xl="7">
                        <CCard className="mx-4">
                            <CCardBody className="p-4">
                                <CForm onSubmit={handleSubmit}>
                                    <h1>Upload Your Photo Gallery</h1>
                                    <p className="text-body-secondary">
                                        Upload up to 12 photos. They will be displayed in a 3x4 grid.
                                    </p>

                                    <CInputGroup className="mb-3">
                                        <CFormInput
                                            type="file"
                                            id="galleryUpload"
                                            name="galleryUpload"
                                            multiple
                                            onChange={handleFileChange}
                                            accept="image/*"
                                            required
                                        />
                                    </CInputGroup>

                                    <CRow className="mb-3">
                                        {fileUrls.map((url, index) => (
                                            <CCol key={index} xs="6" md="4" lg="3">
                                                <img src={url} alt={`Uploaded ${index}`} className="img-fluid"/>
                                            </CCol>
                                        ))}
                                    </CRow>

                                    <div className="d-grid">
                                        <CButton type="submit" className="button">
                                            Upload Gallery
                                        </CButton>
                                    </div>
                                </CForm>
                            </CCardBody>
                        </CCard>
                    </CCol>
                </CRow>
            </CContainer>
        </div>
    );
};

export default OnboardingGallery;
