import { useState, ChangeEvent } from 'react';
import { CCard, CCardBody, CCardHeader, CButton, CForm, CFormInput, CRow, CCol } from '@coreui/react';

// Define the type for each uploaded image
interface Image {
    id: number;
    src: string;
}

const GallerySection: React.FC = () => {
    const [images, setImages] = useState<Image[]>([]);

    // Function to handle image upload
    const handleImageUpload = (event: ChangeEvent<HTMLInputElement>): void => {
        const files = event.target.files;
        if (files && files.length > 0) {
            // Convert FileList to an array and map to an Image type
            const newImages = Array.from(files).map((file, index) => ({
                id: images.length + index,
                src: URL.createObjectURL(file),
            }));

            // Only allow up to 6 images to be uploaded
            if (images.length + newImages.length <= 6) {
                setImages([...images, ...newImages]);
            } else {
                alert('You can upload a maximum of 6 images.');
            }
        }
    };

    // Function to remove an image
    const handleRemoveImage = (id: number): void => {
        setImages(images.filter(image => image.id !== id));
    };

    return (
        <CCard className="mb-4">
            <CCardHeader>
                Gallery Section
            </CCardHeader>
            <CCardBody>
                <CForm>
                    <CFormInput
                        type="file"
                        accept="image/*"
                        multiple
                        onChange={handleImageUpload}
                        disabled={images.length >= 6}
                    />
                    <br/>
                    <p>Click <strong>"Choose File"</strong> to add images (Max 6)</p>
                </CForm>
                <CRow>
                    {images.map((image) => (
                        <CCol xs="4" className="mb-3" key={image.id}>
                            <div className="image-wrapper" style={{ position: 'relative' }}>
                                <img
                                    src={image.src}
                                    alt={`Uploaded ${image.id}`}
                                    style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
                                />
                                <CButton
                                    color="danger"
                                    size="sm"
                                    style={{ position: 'absolute', top: '5px', right: '5px' }}
                                    onClick={() => handleRemoveImage(image.id)}
                                >
                                    Remove
                                </CButton>
                            </div>
                        </CCol>
                    ))}
                </CRow>
                {images.length === 0 && <p>No images uploaded. Upload up to 6 images.</p>}
            </CCardBody>
        </CCard>
    );
};

export default GallerySection;
