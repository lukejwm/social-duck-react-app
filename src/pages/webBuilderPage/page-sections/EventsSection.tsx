import { useState, ChangeEvent } from 'react';
import { CCard, CCardBody, CCardHeader, CForm, CFormLabel, CFormInput, CFormTextarea, CButton } from '@coreui/react';

// Define types for the state
interface AboutData {
    image: string;
    title: string;
    description: string;
}

const AboutSection: React.FC = () => {
    const [aboutData, setAboutData] = useState<AboutData>({
        image: '',
        title: '',
        description: '',
    });

    // Handle image upload
    const handleImageUpload = (event: ChangeEvent<HTMLInputElement>): void => {
        const file = event.target.files?.[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setAboutData({ ...aboutData, image: imageUrl });
        }
    };

    // Handle text input changes for title and description
    const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
        const { name, value } = event.target;
        setAboutData({ ...aboutData, [name]: value });
    };

    // Function to handle saving of the data
    const handleSave = (): void => {
        // Implement saving logic here if needed
        alert('About section updated!');
    };

    return (
        <CCard className="mb-4">
            <CCardHeader>
                <h1 className="card-title">Events Section</h1>
            </CCardHeader>
            <CCardBody>
                <CForm>
                    <div className="mb-3">
                        <CFormLabel htmlFor="imageUpload">Upload Image</CFormLabel>
                        <CFormInput
                            type="file"
                            id="imageUpload"
                            accept="image/*"
                            onChange={handleImageUpload}
                        />
                    </div>
                    <div className="mb-3">
                        <CFormLabel htmlFor="title">Title</CFormLabel>
                        <CFormInput
                            type="text"
                            id="title"
                            name="title"
                            placeholder="Enter title"
                            value={aboutData.title}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-3">
                        <CFormLabel htmlFor="description">Description</CFormLabel>
                        <CFormTextarea
                            id="description"
                            name="description"
                            rows={4}
                            placeholder="Enter description"
                            value={aboutData.description}
                            onChange={handleChange}
                        />
                    </div>
                    <CButton color="primary" onClick={handleSave}>
                        Save Changes
                    </CButton>
                </CForm>

                {/* Display the About section details */}
                <div className="about-preview mt-4">
                    {aboutData.image && (
                        <div className="about-image mb-3">
                            <img
                                src={aboutData.image}
                                alt="About"
                                style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
                            />
                        </div>
                    )}
                    {aboutData.title && <h3>{aboutData.title}</h3>}
                    {aboutData.description && <p>{aboutData.description}</p>}
                </div>
            </CCardBody>
        </CCard>
    );
};

export default AboutSection;
