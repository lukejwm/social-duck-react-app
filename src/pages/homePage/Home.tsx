import {
    CContainer,
    CRow,
    CCol,
    CButton
} from '@coreui/react';

import { Link } from 'react-router-dom';

import BannerSection from "./BannerSection.tsx";
import AboutSection from "./AboutSection.tsx";
import GallerySection from "./GallerySection.tsx";
import ContactSection from "./ContactSection.tsx";
import SaveAndPreviewButtons from "../../components/saveAndPreviousButtons/SaveAndPreviousButtons.tsx";
import BusinessInfoSection from "./BusinessInfoSection.tsx";

function Home() {

    return (
        <>
            <CContainer>
                <CRow className="justify-content-center">
                    <SaveAndPreviewButtons />
                    <BusinessInfoSection />
                    <BannerSection />
                    <AboutSection />
                    <GallerySection />
                    <ContactSection />
                    <CCol md={12} className="text-center mt-4">
                        <Link to="/social-media">
                            <CButton className="primary">Go to Social Media Integration</CButton>
                        </Link>
                    </CCol>
                </CRow>
            </CContainer>
        </>
    )
}

export default Home
