import {CButton, CCard, CCardBody, CCardHeader, CCol, CContainer, CRow } from "@coreui/react";

const WaitlistPage = () => {
    return (
        <>
            <CContainer>
                <CCard className="mb-4">
                    <CCardHeader>
                        <h1 className="card-title">Join the Waitlist</h1>
                    </CCardHeader>
                    <CCardBody>
                        {/* Name Input */}
                        <CRow className="d-flex justify-content-center align-items-center mb-4">
                            <CCol md="4" className="text-center">
                                <h4>Name</h4>
                            </CCol>
                            <CCol md="8">
                                <input type="text" className="form-control" placeholder="Enter your name" />
                            </CCol>
                        </CRow>

                        {/* Business Details Input */}
                        <CRow className="d-flex justify-content-center align-items-center mb-4">
                            <CCol md="4" className="text-center">
                                <h4>Business Details</h4>
                            </CCol>
                            <CCol md="8">
                                <textarea className="form-control" rows={3} placeholder="Enter your business details"></textarea>
                            </CCol>
                        </CRow>

                        {/* Business Email Input */}
                        <CRow className="d-flex justify-content-center align-items-center mb-4">
                            <CCol md="4" className="text-center">
                                <h4>Business Email</h4>
                            </CCol>
                            <CCol md="8">
                                <input type="email" className="form-control" placeholder="Enter your business email" />
                            </CCol>
                        </CRow>

                        {/* How they heard about Social Duck */}
                        <CRow className="d-flex justify-content-center align-items-center mb-4">
                            <CCol md="4" className="text-center">
                                <h4>How did you hear about us?</h4>
                            </CCol>
                            <CCol md="8">
                                <select className="form-control">
                                    <option>Select an option</option>
                                    <option>Social Media</option>
                                    <option>Friend or Colleague</option>
                                    <option>Online Advertisement</option>
                                    <option>Other</option>
                                </select>
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
                                Join Waitlist
                            </CButton>
                        </CRow>
                    </CCardBody>
                </CCard>
            </CContainer>
        </>
    );
}

export default WaitlistPage;
