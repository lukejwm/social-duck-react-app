import {CCard, CCardBody, CCardHeader} from '@coreui/react';
// import ImageGallery from './ImageGallery'; // Replace with actual ImageGallery component

const GallerySection = () => {
    return (
        <CCard className="mb-4">
            <CCardHeader>
                Gallery Section
            </CCardHeader>
            <CCardBody>
                <p>Click <strong>"Choose File"</strong> to add images</p>
                {/*<ImageGallery /> /!* Replace with actual ImageGallery component *!/*/}
            </CCardBody>
        </CCard>
    );
};

export default GallerySection;
