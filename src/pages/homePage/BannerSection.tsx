import { useState, ChangeEvent } from 'react';
import { CCard, CCardBody, CCardHeader, CCol, CFormInput, CFormLabel, CInputGroup, CRow, CButton } from '@coreui/react';

const BannerSection: React.FC = () => {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [imagePreview, setImagePreview] = useState<string>('');
    const [description, setDescription] = useState<string>('');

    // Handle file selection
    const onFileSelected = (e: ChangeEvent<HTMLInputElement>): void => {
        const file = e.target.files?.[0];
        if (file) {
            setSelectedFile(file);
            setImagePreview(URL.createObjectURL(file));
        }
    };

    // Handle description input change
    const handleDescriptionChange = (e: ChangeEvent<HTMLInputElement>): void => {
        setDescription(e.target.value);
    };

    // Handle form submission or save action
    const handleSave = (): void => {
        // Implement save logic, e.g., upload the file and save the description
        if (!selectedFile) {
            alert('Please select a banner image.');
            return;
        }
        if (!description) {
            alert('Please provide a description.');
            return;
        }
        alert('Banner saved successfully!');
        // Reset form after saving
        setSelectedFile(null);
        setImagePreview('');
        setDescription('');
    };

    return (
        <CCard className="mb-4">
            <CCardHeader>
                Main Header Banner
            </CCardHeader>
            <CCardBody>
                <CRow className="mb-3">
                    <CCol xs="12">
                        <h5>Upload a Banner Image</h5>
                        <CInputGroup className="mb-3">
                            <CFormInput
                                type="file"
                                onChange={onFileSelected}
                                className="form-control"
                                accept="image/*"
                                aria-label="Upload banner image"
                            />
                        </CInputGroup>
                        {imagePreview && (
                            <div className="mt-3">
                                <img
                                    src={imagePreview}
                                    className="img-fluid rounded"
                                    alt="Banner preview"
                                    style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px' }}
                                />
                            </div>
                        )}
                    </CCol>
                </CRow>
                <CRow className="mb-3">
                    <CCol xs="12">
                        <CFormLabel htmlFor="descriptiveText">
                            Descriptive Text
                        </CFormLabel>
                        <CFormInput
                            type="text"
                            id="descriptiveText"
                            value={description}
                            onChange={handleDescriptionChange}
                            className="form-control"
                            placeholder="Enter descriptive text for the banner"
                            aria-label="Descriptive text"
                        />
                    </CCol>
                </CRow>
                <CRow className="mt-3">
                    <CCol xs="12">
                        <CButton color="primary" onClick={handleSave}>
                            Save Banner
                        </CButton>
                    </CCol>
                </CRow>
            </CCardBody>
        </CCard>
    );
};

export default BannerSection;
