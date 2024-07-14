import {CButton, CCol, CRow} from '@coreui/react';

const SaveAndPreviewButtons = () => {
    const saveChanges = () => {
        // Implement save changes logic here
    };

    const goToLink = (link: string | URL | undefined) => {
        window.open(link, '_blank');
    };

    return (
        <CRow>
            <CCol xs="2">
                <CButton color="success" size="lg" onClick={saveChanges}>
                    Save Changes
                </CButton>
            </CCol>
            <CCol xs="2">
                <CButton color="secondary" className="mb-3"
                         onClick={() => goToLink('https://app.site123.com/manager/wizard.php?wu=666f0649eab1e-666f0649eab1f-666f0649eab20&from=dash')}>
                    Preview Changes
                </CButton>
            </CCol>
        </CRow>
    );
};

export default SaveAndPreviewButtons;
