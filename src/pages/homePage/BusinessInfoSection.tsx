import { useState, ChangeEvent } from 'react';
import { CCard, CCardBody, CCardHeader, CCol, CFormInput, CFormLabel, CInputGroup, CRow, CButton } from '@coreui/react';

const BusinessInfoSection: React.FC = () => {
    const [logo, setLogo] = useState<File | null>(null);
    const [logoPreview, setLogoPreview] = useState<string>('');
    const [businessName, setBusinessName] = useState<string>('');

    // Handle logo file selection
    const handleLogoChange = (e: ChangeEvent<HTMLInputElement>): void => {
        const file = e.target.files?.[0];
        if (file) {
            setLogo(file);
            setLogoPreview(URL.createObjectURL(file));
        }
    };

    // Handle business name input
    const handleBusinessNameChange = (e: ChangeEvent<HTMLInputElement>): void => {
        setBusinessName(e.target.value);
    };

    // Save or submit business information
    const handleSave = () => {
        if (!logo) {
            alert('Please upload a logo.');
            return;
        }
        if (!businessName) {
            alert('Please enter your business name.');
            return;
        }

        // Example save action (replace with actual logic as needed)
        console.log('Business Name:', businessName);
        console.log('Logo:', logo);

        // Reset form after saving
        setLogo(null);
        setLogoPreview('');
        setBusinessName('');
        alert('Business information saved successfully!');
    };

    return (
        <CCard className="mb-4">
            <CCardHeader>
                Business Information
            </CCardHeader>
            <CCardBody>
                <CRow className="mb-3">
                    <CCol xs="12">
                        <h5>Upload a Logo</h5>
                        <CInputGroup className="mb-3">
                            <CFormInput
                                type="file"
                                onChange={handleLogoChange}
                                className="form-control"
                                accept="image/*"
                                aria-label="Upload business logo"
                            />
                        </CInputGroup>
                        {logoPreview && (
                            <div className="mt-3">
                                <img
                                    src={logoPreview}
                                    className="img-fluid rounded"
                                    alt="Logo preview"
                                    style={{ maxWidth: '150px', height: 'auto', borderRadius: '8px' }}
                                />
                            </div>
                        )}
                    </CCol>
                </CRow>
                <CRow className="mb-3">
                    <CCol xs="12">
                        <CFormLabel htmlFor="businessName">
                            Business Name
                        </CFormLabel>
                        <CFormInput
                            type="text"
                            id="businessName"
                            value={businessName}
                            onChange={handleBusinessNameChange}
                            className="form-control"
                            placeholder="Enter your business name"
                            aria-label="Business name"
                        />
                    </CCol>
                </CRow>
                <CRow className="mt-3">
                    <CCol xs="12">
                        <CButton color="primary" onClick={handleSave}>
                            Save Business Information
                        </CButton>
                    </CCol>
                </CRow>
            </CCardBody>
        </CCard>
    );
};

export default BusinessInfoSection;
