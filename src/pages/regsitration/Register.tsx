import React, { useState } from 'react';
import {
    CContainer,
    CRow,
    CCol,
    CCard,
    CCardBody,
    CForm,
    CInputGroup,
    CInputGroupText,
    CFormInput,
    CButton
} from '@coreui/react';
import { cilUser, cilLockLocked } from '@coreui/icons';
import CIcon from "@coreui/icons-react";
import {useNavigate} from "react-router-dom";

interface User {
    username: string;
    email: string;
    password: string;
}

const Register: React.FC = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [formData, setFormData] = useState<User>({ username: '', email: '', password: '' });
    const navigate = useNavigate();

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setUsers([...users, formData]);
        setFormData({ username: '', email: '', password: '' });
        alert('User registered successfully!');
        navigate('/onboarding')
    };

    return (
        <div className="bg-custom-yellow min-vh-100 d-flex flex-row align-items-center">
            <CContainer>
                <CRow className="justify-content-center">
                    <CCol md={9} lg={7} xl={6}>
                        <CCard className="mx-4">
                            <CCardBody className="p-4">
                                <CForm onSubmit={handleSubmit}>
                                    <h1>Register</h1>
                                    <p className="text-body-secondary">Create your account</p>
                                    <CInputGroup className="mb-3">
                                        <CInputGroupText>
                                            <CIcon icon={cilUser} />
                                        </CInputGroupText>
                                        <CFormInput
                                            placeholder="Username"
                                            name="username"
                                            value={formData.username}
                                            onChange={handleInputChange}
                                            autoComplete="username"
                                        />
                                    </CInputGroup>
                                    <CInputGroup className="mb-3">
                                        <CInputGroupText>@</CInputGroupText>
                                        <CFormInput
                                            placeholder="Email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            autoComplete="email"
                                        />
                                    </CInputGroup>
                                    <CInputGroup className="mb-3">
                                        <CInputGroupText>
                                            <CIcon icon={cilLockLocked} />
                                        </CInputGroupText>
                                        <CFormInput
                                            type="password"
                                            placeholder="Password"
                                            name="password"
                                            value={formData.password}
                                            onChange={handleInputChange}
                                            autoComplete="new-password"
                                        />
                                    </CInputGroup>
                                    <CInputGroup className="mb-4">
                                        <CInputGroupText>
                                            <CIcon icon={cilLockLocked} />
                                        </CInputGroupText>
                                        <CFormInput
                                            type="password"
                                            placeholder="Repeat password"
                                            name="repeatPassword"
                                            onChange={handleInputChange}
                                            autoComplete="new-password"
                                        />
                                    </CInputGroup>
                                    <div className="d-grid">
                                        <CButton type="submit" className="button">Create Account</CButton>
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

export default Register;

