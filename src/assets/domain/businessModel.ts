interface Contact {
    addressLine1: string;
    addressLine2: string;
    town: string;
    postcode: string;
    telephone: string;
}

interface BusinessModel {
    nameOfBusiness: string;
    businessLogo: string;
    businessHeadline: string;
    aboutBusiness: string;
    galleryPicture: string[];
    contact: Contact;
}

export default BusinessModel;
