import { useState, ChangeEvent } from 'react';
import { CCard, CRow, CCol, CCardBody, CCardHeader, CCardFooter, CButton, CForm, CFormLabel, CFormInput } from '@coreui/react';

// Define a type for the opening hours entry
interface OpeningHour {
    day: string;
    openingTime: string;
    closingTime: string;
}

const ContactSection: React.FC = () => {
    const [address, setAddress] = useState<string>('15 Trevor Close, Northampton, NN5 5PQ');
    const [openingHours, setOpeningHours] = useState<OpeningHour[]>([
        { day: 'Monday', openingTime: '09:00', closingTime: '17:00' },
        { day: 'Tuesday', openingTime: '09:00', closingTime: '17:00' },
    ]);

    // Generate the Google Maps URL using the address
    const updateGoogleMapsSrc = (): string => {
        return `https://www.google.com/maps/embed/v1/place?key=AIzaSyCQT9Y1VTbHv5HzU8yL_M3pJ3Uw1DmUOb8&q=${encodeURIComponent(address)}`;
    };

    // Add a new blank day to the opening hours list
    const handleAddDay = (): void => {
        setOpeningHours([...openingHours, { day: '', openingTime: '', closingTime: '' }]);
    };

    // Remove a specific day from the opening hours list
    const handleRemoveDay = (index: number): void => {
        setOpeningHours(openingHours.filter((_, i) => i !== index));
    };

    // Update the day, opening time, or closing time for a specific entry
    const handleDayChange = (index: number, field: keyof OpeningHour, value: string): void => {
        const updatedHours = [...openingHours];
        updatedHours[index][field] = value;
        setOpeningHours(updatedHours);
    };

    // Simulate saving the changes
    const handleSave = (): void => {
        // Implement saving logic here if needed
        alert('Contact details updated!');
    };

    return (
        <CCard className="mb-4">
            <CCardHeader>
                Contact Section
            </CCardHeader>
            <CCardBody>
                <CForm>
                    <div className="mb-3">
                        <CFormLabel htmlFor="address">Address</CFormLabel>
                        <CFormInput
                            type="text"
                            id="address"
                            placeholder="Enter the address"
                            value={address}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => setAddress(e.target.value)}
                        />
                    </div>

                    <h5>Opening Hours</h5>
                    {openingHours.map((entry, index) => (
                        <CRow key={index} className="mb-2">
                            <CCol xs="3">
                                <CFormInput
                                    type="text"
                                    placeholder="Day"
                                    value={entry.day}
                                    onChange={(e: ChangeEvent<HTMLInputElement>) => handleDayChange(index, 'day', e.target.value)}
                                />
                            </CCol>
                            <CCol xs="3">
                                <CFormInput
                                    type="time"
                                    value={entry.openingTime}
                                    onChange={(e: ChangeEvent<HTMLInputElement>) => handleDayChange(index, 'openingTime', e.target.value)}
                                />
                            </CCol>
                            <CCol xs="3">
                                <CFormInput
                                    type="time"
                                    value={entry.closingTime}
                                    onChange={(e: ChangeEvent<HTMLInputElement>) => handleDayChange(index, 'closingTime', e.target.value)}
                                />
                            </CCol>
                            <CCol xs="3">
                                <CButton color="danger" size="sm" onClick={() => handleRemoveDay(index)}>
                                    Remove
                                </CButton>
                            </CCol>
                        </CRow>
                    ))}
                    <CButton color="primary" size="sm" onClick={handleAddDay}>
                        Add Day
                    </CButton>
                </CForm>

                <div className="contact_area mt-4">
                    <h2>Find Us</h2>
                    <div className="row">
                        <div className="col-md-6">
                            <iframe
                                width="550"
                                height="450"
                                style={{ border: 0 }}
                                loading="lazy"
                                allowFullScreen
                                src={updateGoogleMapsSrc()}
                                title="Google Maps Location"
                            ></iframe>
                        </div>
                        <div className="col-md-6">
                            <h2>Opening Hours</h2>
                            <ul>
                                {openingHours.map((entry, index) => (
                                    <li key={index}>
                                        {entry.day}: {entry.openingTime} - {entry.closingTime}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <h3>Full Address</h3>
                    <p>{address}</p>
                </div>
            </CCardBody>
            <CCardFooter>
                <CButton color="success" size="sm" onClick={handleSave}>
                    Save Changes
                </CButton>
            </CCardFooter>
        </CCard>
    );
};

export default ContactSection;
