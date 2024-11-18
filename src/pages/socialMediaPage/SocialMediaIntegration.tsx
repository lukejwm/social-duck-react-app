// import {useState} from 'react';
import {CButton, CCard, CCardBody, CCardHeader, CCol, CContainer, CFormCheck, CRow} from '@coreui/react';

const SocialMediaIntegration: React.FC = () => {
    return (
        <CContainer>
            <CCard className="mb-4">
                <CCardHeader>
                    <h1 className="card-title">Upload to Social Media</h1>
                </CCardHeader>
                <CCardBody>
                    {/* Social Media Platforms Section */}
                    <CRow className="d-flex justify-content-center align-items-center mb-4">
                        <CCol md="4" className="text-center">
                            <h4>Social Media Platforms</h4>
                        </CCol>
                        <CCol md="8">
                            <CRow className="d-flex justify-content-center">
                                <CCol md="6" className="text-center">
                                    <CFormCheck id="facebook" label="Facebook" />
                                    <CFormCheck id="instagram" label="Instagram" />
                                    <CFormCheck id="twitter" label="Twitter" />
                                </CCol>
                            </CRow>
                        </CCol>
                    </CRow>

                    {/* Post Text Section */}
                    <CRow className="d-flex justify-content-center align-items-center mb-4">
                        <CCol md="4" className="text-center">
                            <h4>Post Text</h4>
                        </CCol>
                        <CCol md="8">
                            <textarea className="form-control" rows={3} placeholder="Enter post text here"></textarea>
                        </CCol>
                    </CRow>

                    {/* Post Image Section */}
                    <CRow className="d-flex justify-content-center align-items-center mb-4">
                        <CCol md="4" className="text-center">
                            <h4>Post Image</h4>
                        </CCol>
                        <CCol md="8">
                            <input type="file" className="form-control" />
                        </CCol>
                    </CRow>

                    {/* Link Section */}
                    <CRow className="d-flex justify-content-center align-items-center mb-4">
                        <CCol md="4" className="text-center">
                            <h4>Link</h4>
                        </CCol>
                        <CCol md="8">
                            <input type="url" className="form-control" placeholder="Enter link URL" />
                        </CCol>
                    </CRow>

                    {/* Hashtags Section */}
                    <CRow className="d-flex justify-content-center align-items-center mb-4">
                        <CCol md="4" className="text-center">
                            <h4>Hashtags</h4>
                        </CCol>
                        <CCol md="8">
                            <input type="text" className="form-control" placeholder="Enter hashtags" />
                        </CCol>
                    </CRow>

                    {/* Submit Button */}
                    <CRow className="d-flex justify-content-center align-items-center">
                        <CButton
                            color="success"
                            active={true}
                            disabled={false}
                            style={{ padding: '10px 20px' }}
                        >
                            Submit
                        </CButton>
                    </CRow>
                </CCardBody>
            </CCard>
        </CContainer>
    );
};

export default SocialMediaIntegration;
