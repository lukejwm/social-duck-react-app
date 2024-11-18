import React, {useState} from 'react';
import {
    CButton,
    CCard,
    CCardBody,
    CCol,
    CContainer,
    CForm,
    CFormInput,
    CFormSelect, CFormTextarea,
    CInputGroup,
    CInputGroupText,
    CRow
} from '@coreui/react';
import {useNavigate} from "react-router-dom";

interface MenuItem {
    itemName: string,
    itemCategory: string;
    itemDescription: string;
    itemPrice: number;
}

const OnboardingMenu: React.FC = () => {
    const [formData, setFormData] = useState({
        menuItems: [] as MenuItem[],
        newMenuItemName: '',
        newMenuItemCategory: 'drinks',
        newMenuItemDescription: '',
        newMenuItemPrice: ''
    });

    const navigate = useNavigate();

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleAddMenuItem = () => {
        const {
            newMenuItemName,
            newMenuItemCategory,
            newMenuItemDescription,
            newMenuItemPrice
        } = formData;
        if (newMenuItemName && newMenuItemDescription && newMenuItemPrice) {
            const newMenuItem: MenuItem = {
                itemName: newMenuItemName,
                itemCategory: newMenuItemCategory,
                itemDescription: newMenuItemDescription,
                itemPrice: parseFloat(newMenuItemPrice)
            };
            setFormData({
                ...formData,
                menuItems: [...formData.menuItems, newMenuItem],
                newMenuItemName: '',
                newMenuItemCategory: 'drinks',
                newMenuItemDescription: '',
                newMenuItemPrice: ''
            });
        }
    };

    const handleRemoveMenuItem = (index: number) => {
        const updatedMenuItems = [...formData.menuItems];
        updatedMenuItems.splice(index, 1);
        setFormData({...formData, menuItems: updatedMenuItems});
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Save formData to local storage or send it to the server
        console.log(formData);
        alert('Onboarding form submitted successfully!');
        navigate('/onboarding/3')
    };

    return (
        <div className="bg-custom-yellow min-vh-100 d-flex flex-row align-items-center">
            <CContainer>
                <CRow className="justify-content-center">
                    <CCol xs="22" md="20" lg="16" xl="14">
                        <CCard className="mx-4">
                            <CCardBody className="p-4">
                                <CForm onSubmit={handleSubmit}>
                                    <h1>Tell Us About Your Menu</h1>
                                    <p className="text-body-secondary">
                                        In this section, you can add your menu items. While not all hospitality
                                        businesses, such as some pubs and nightclubs, need to upload a menu, if you
                                        require one to be displayed on your website, you can do so here.
                                    </p>
                                    <p className="text-body-secondary">
                                        Click "Add New Menu Item" to build your menu. It will be displayed on your
                                        website and can also be generated as a PDF document.
                                    </p>

                                    <hr/>

                                    <h4>Create your menu...</h4>
                                    <div className="mb-3">
                                        <CRow>
                                            <CCol md={3}>
                                                <CFormInput
                                                    placeholder="Menu Item Name"
                                                    type="text"
                                                    id="newMenuItemName"
                                                    name="newMenuItemName"
                                                    value={formData.newMenuItemName}
                                                    onChange={handleInputChange}
                                                />
                                            </CCol>
                                            <CCol md={3}>
                                                <CFormSelect
                                                    id="newMenuItemCategory"
                                                    name="newMenuItemCategory"
                                                    value={formData.newMenuItemCategory}
                                                    onChange={handleInputChange}
                                                >
                                                    <option value="drinks">Drinks</option>
                                                    <option value="food">Food</option>
                                                    <option value="snacks">Snacks</option>
                                                </CFormSelect>
                                            </CCol>
                                            <CCol md={3}>
                                                <CFormTextarea
                                                    placeholder="Description (Max 50 characters)"
                                                    id="newMenuItemDescription"
                                                    name="newMenuItemDescription"
                                                    value={formData.newMenuItemDescription}
                                                    onChange={handleInputChange}
                                                    rows={2}
                                                    maxLength={50}
                                                />
                                            </CCol>
                                            <CCol md={2}>
                                                <CInputGroup>
                                                    <CInputGroupText>£</CInputGroupText>
                                                    <CFormInput
                                                        placeholder="Price"
                                                        type="number"
                                                        step="0.01"
                                                        id="newMenuItemPrice"
                                                        name="newMenuItemPrice"
                                                        value={formData.newMenuItemPrice}
                                                        onChange={handleInputChange}
                                                    />
                                                </CInputGroup>
                                            </CCol>
                                            <CCol md={1}>
                                                <CButton
                                                    type="button"
                                                    color="primary"
                                                    onClick={handleAddMenuItem}
                                                >
                                                    Add
                                                </CButton>
                                            </CCol>
                                        </CRow>
                                    </div>

                                    {formData.menuItems.length > 0 && (
                                        <div>
                                            <h3>Current Menu Items</h3>
                                            <table className="table">
                                                <thead>
                                                <tr>
                                                    <th>Menu Item</th>
                                                    <th>Category</th>
                                                    <th>Description</th>
                                                    <th>Price (£)</th>
                                                    <th>Action</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                {formData.menuItems.map((item, index) => (
                                                    <tr key={index}>
                                                        <td>{item.itemName}</td>
                                                        <td>{item.itemCategory}</td>
                                                        <td>{item.itemDescription}</td>
                                                        <td>{item.itemPrice.toFixed(2)}</td>
                                                        <td>
                                                            <CButton
                                                                type="button"
                                                                color="danger"
                                                                size="sm"
                                                                onClick={() => handleRemoveMenuItem(index)}
                                                            >
                                                                Remove
                                                            </CButton>
                                                        </td>
                                                    </tr>
                                                ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    )}

                                    <div className="d-grid">
                                        <CButton type="submit" className="button">
                                            Continue
                                        </CButton>
                                        <br/>
                                        <CButton color="secondary">Previous</CButton>
                                    </div>
                                </CForm>
                            </CCardBody>
                        </CCard>
                    </CCol>
                </CRow>
            </CContainer>
        </div>
    );
};

export default OnboardingMenu;
