import React, {useState} from 'react';
import {
    CButton,
    CCard,
    CCardBody,
    CCol,
    CContainer,
    CForm,
    CFormInput,
    CFormSelect,
    CInputGroup,
    CInputGroupText,
    CRow
} from '@coreui/react';
import {useNavigate} from "react-router-dom";

const OnboardingSuccess: React.FC = () => {
    const [formData, setFormData] = useState({
        businessName: '',
        businessType: '',
        otherBusinessType: '',
        addressLine1: '',
        addressLine2: '',
        townCity: '',
        county: '',
        postcode: '',
        telephone: '',
        logo: ''
    });

    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Save formData to local storage or send it to the server
        console.log(formData);
        alert('Onboarding form submitted successfully!');
        navigate('/')
    };

    return (
        <div className="bg-custom-yellow min-vh-100 d-flex flex-row align-items-center">
            <CContainer>
                <CRow className="justify-content-center">
                    <CCol md={9} lg={7} xl={6}>
                        <CCard className="mx-4">
                            <CCardBody className="p-4">
                                <CForm onSubmit={handleSubmit}>
                                    <div className="text-center">
                                        <h1>Success!</h1>
                                        <p className="text-body-secondary">
                                            <strong>Congratulations!</strong> Your new website and marketing management
                                            hub have been successfully created.
                                        </p>
                                        <p className="text-body-secondary">
                                            In the management hub, you can make edits to your website and publish them.
                                            Your changes will appear live within minutes after publishing.
                                        </p>
                                        <p className="text-body-secondary">
                                            Utilize the marketing tools to connect your social media accounts and
                                            schedule posts across all your profiles.
                                        </p>
                                        <h4 className="mb-4">Our goal is to simplify e-marketing and make it stress-free
                                            for you. Welcome to the pond!</h4>
                                    </div>

                                    <div className="d-grid">
                                        <CButton type="submit" className="button">Continue to Platform</CButton>
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

export default OnboardingSuccess;
