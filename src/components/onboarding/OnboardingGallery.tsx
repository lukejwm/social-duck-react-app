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

const OnboardingGallery: React.FC = () => {
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

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            const file = e.target.files[0];
            const reader = new FileReader();
            reader.onloadend = () => {
                if (reader.result) {
                    localStorage.setItem('logo', reader.result.toString());
                    setFormData({ ...formData, logo: reader.result.toString() });
                }
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Save formData to local storage or send it to the server
        console.log(formData);
        alert('Onboarding form submitted successfully!');
        navigate('/onboarding1')
    };

    return (
        <div className="bg-custom-yellow min-vh-100 d-flex flex-row align-items-center">
            <CContainer>
                <CRow className="justify-content-center">
                    <CCol md={9} lg={7} xl={6}>
                        <CCard className="mx-4">
                            <CCardBody className="p-4">
                                <CForm onSubmit={handleSubmit}>
                                    <h1>Welcome to Social Duck!</h1>
                                    <p className="text-body-secondary">
                                        <strong>Congratulations on creating your account!</strong>
                                    </p>
                                    <p className="text-body-secondary">
                                        You are now ready to begin the onboarding process. Please complete the following
                                        forms to provide us with details about your business. Once completed, we will
                                        automatically set up your website and marketing management hub.
                                    </p>
                                    <p className="text-body-secondary">
                                        This process typically takes around 10 minutes. Let's get started!
                                    </p>

                                    <h4>First some basic details about your business</h4>
                                    <br/>
                                    <CInputGroup className="mb-3">
                                        <CFormInput
                                            placeholder={"What is the name of your business?"}
                                            type="text"
                                            id="businessName"
                                            name="businessName"
                                            value={formData.businessName}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </CInputGroup>

                                    <CInputGroup className="mb-3">
                                        <CInputGroupText as="label"
                                                         htmlFor="inputGroupSelect01">What is the type of business?</CInputGroupText>
                                        <CFormSelect id="businessType"
                                                     name="businessType"
                                                     value={formData.businessType}
                                                     onChange={handleInputChange}
                                                     required>
                                            <option>Choose...</option>
                                            <option value="pub">Pub</option>
                                            <option value="bar">Bar</option>
                                            <option value="nightclub">Nightclub</option>
                                            <option value="social_club">Social Club</option>
                                            <option value="cafe">Cafe</option>
                                            <option value="restaurant">Restaurant</option>
                                            <option value="deli/sandwich_shop">Deli/Sandwich Shop</option>
                                        </CFormSelect>
                                    </CInputGroup>

                                    <CInputGroup className="mb-3">
                                        <CFormInput type="file"
                                                    id="logo"
                                                    name="logo"
                                                    onChange={handleFileChange}
                                                    required/>
                                        <CInputGroupText as="label" htmlFor="inputGroupFile02">Upload Logo</CInputGroupText>
                                    </CInputGroup>

                                    <CInputGroup className="mb-3">
                                        <CFormInput
                                            placeholder={"What is the first line of the business's address?"}
                                            type="text"
                                            id="addressLine1"
                                            name="addressLine1"
                                            value={formData.addressLine1}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </CInputGroup>
                                    <CInputGroup className="mb-3">
                                        <CFormInput
                                            placeholder={"What is the second line of the business's address (f any)?"}
                                            type="text"
                                            id="addressLine2"
                                            name="addressLine2"
                                            value={formData.addressLine2}
                                            onChange={handleInputChange}
                                        />
                                    </CInputGroup>
                                    <CInputGroup className="mb-3">
                                        <CFormInput
                                            placeholder={"What village, town or city is your premises located?"}
                                            type="text"
                                            id="townCity"
                                            name="townCity"
                                            value={formData.townCity}
                                            onChange={handleInputChange}
                                        />
                                    </CInputGroup>
                                    <CInputGroup className="mb-3">
                                        <CFormInput
                                            placeholder={"County"}
                                            type="text"
                                            id="county"
                                            name="county"
                                            value={formData.county}
                                            onChange={handleInputChange}
                                        />
                                    </CInputGroup>
                                    <CInputGroup className="mb-3">
                                        <CFormInput
                                            placeholder={"Postcode"}
                                            type="text"
                                            id="postcode"
                                            name="postcode"
                                            value={formData.postcode}
                                            onChange={handleInputChange}
                                        />
                                    </CInputGroup>
                                    <CInputGroup className="mb-3">
                                        <CFormInput
                                            placeholder={"Telephone Number"}
                                            type="text"
                                            id="telephone"
                                            name="telephone"
                                            value={formData.telephone}
                                            onChange={handleInputChange}
                                        />
                                    </CInputGroup>
                                    <div className="d-grid">
                                        <CButton type="submit" className="button">Continue</CButton>
                                        <br/>
                                        <CButton color="secondary">Skip for now</CButton>
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

export default OnboardingGallery;
