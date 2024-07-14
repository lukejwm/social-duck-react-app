import React, {useState} from 'react';
import {
    CButton,
    CCard,
    CCardBody,
    CCol,
    CContainer,
    CForm,
    CFormInput,
    CFormTextarea,
    CInputGroup,
    CRow
} from '@coreui/react';
import {useNavigate} from "react-router-dom";

const OnboardingTextContent: React.FC = () => {
    const [formData, setFormData] = useState({
        tagline: '',
        introduction: '',
        aboutUs: ''
    });

    const navigate = useNavigate();

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});
    };

    const handlePreviousClick = () => {
        // Navigate back to the previous page
        navigate(-1); // This will navigate back one step in the history stack
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Save formData to local storage or send it to the server
        console.log(formData);
        alert('Website text area submitted successfully!');
        navigate('/onboarding/2');
    };

    return (
        <div className="bg-custom-yellow min-vh-100 d-flex flex-row align-items-center">
            <CContainer>
                <CRow className="justify-content-center">
                    <CCol md={9} lg={7} xl={6}>
                        <CCard className="mx-4">
                            <CCardBody className="p-4">
                                <CForm onSubmit={handleSubmit}>
                                    <h1>Tell Us More About Your Business</h1>
                                    <p className="text-body-secondary">
                                        In this section, we will ask you to provide a tag headline that will appear on
                                        your new website and a brief
                                        about section.
                                    </p>
                                    <p className="text-body-secondary">
                                        In the about section, you can provide as much or as little information as you
                                        like, but its important to try
                                        to communicate as much as you can about it. When you are finished, you can click
                                        "improve for me", which will take what you
                                        have written and improve it.
                                    </p>

                                    <br/>
                                    <CInputGroup className="mb-3">
                                        <CFormInput
                                            placeholder="Tagline"
                                            type="text"
                                            id="tagline"
                                            name="tagline"
                                            value={formData.tagline}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </CInputGroup>

                                    <CInputGroup className="mb-3">
                                        <CFormTextarea
                                            placeholder="Introduction (max 250 characters)"
                                            id="introduction"
                                            name="introduction"
                                            value={formData.introduction}
                                            onChange={handleInputChange}
                                            maxLength={250}
                                            rows={4}
                                            required
                                        />
                                    </CInputGroup>

                                    <CInputGroup className="mb-3">
                                        <CFormTextarea
                                            placeholder="About Us (max 1000 characters)"
                                            component="textarea"
                                            id="aboutUs"
                                            name="aboutUs"
                                            value={formData.aboutUs}
                                            onChange={handleInputChange}
                                            maxLength={1000}
                                            rows={6}
                                            required
                                        />
                                    </CInputGroup>

                                    <div className="d-grid">
                                        <CButton type="submit" className="button">Continue</CButton>
                                        <br/>
                                        <CButton color="secondary" onClick={handlePreviousClick}>Previous</CButton>
                                    </div>
                                </CForm>
                            </CCardBody>
                        </CCard>
                    </CCol>
                </CRow>
            </CContainer>
        </div>
    )
        ;
};

export default OnboardingTextContent;
