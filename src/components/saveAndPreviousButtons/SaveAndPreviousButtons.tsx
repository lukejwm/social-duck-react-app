import { CButton, CCol, CRow } from '@coreui/react';
import { useNavigate } from 'react-router-dom';

const SaveAndPreviewButtons = () => {
    const navigate = useNavigate(); // Hook for navigation

    const saveChanges = () => {
        // Implement save changes logic here
        console.log('Changes saved!');
    };

    const goToPreview = () => {
        // Navigate to the template preview route
        navigate('/template'); // Adjust this path if needed
    };

    return (
        <CRow>
            <CCol xs="2">
                <CButton color="success" className="mb-3" onClick={saveChanges}>
                    Save Changes
                </CButton>
            </CCol>
            <CCol xs="2">
                <CButton color="secondary" className="mb-3" onClick={goToPreview}>
                    Preview Changes
                </CButton>
            </CCol>
        </CRow>
    );
};

export default SaveAndPreviewButtons;
