import {CCard, CCardBody, CCardHeader, CCol} from '@coreui/react';
import {useNavigate} from 'react-router-dom';

// Define the prop types for the CustomCard component
interface TitleCardProps {
    titleImg: string;
    bodyImg: string;
    pageLink: string;
}

const TitleCard: React.FC<TitleCardProps> = ({titleImg, bodyImg, pageLink}) => {
    const navigate = useNavigate();

    return (
        <CCol md="4">
            <CCard className="mb-3">
                <CCardHeader
                    className="title-card-header"
                    onClick={() => navigate(pageLink)}
                >
                    <a
                        href={pageLink}
                        onClick={(e) => {
                            e.preventDefault(); // Prevent default anchor behavior to use navigate
                            navigate(pageLink);
                        }}
                        style={{textDecoration: 'none'}}
                    >
                        <img
                            src={titleImg}
                            alt="Card header"
                            style={{
                                width: '100%',
                                height: '100px'
                            }}
                        />
                    </a>
                </CCardHeader>
                <CCardBody
                    className="d-flex justify-content-center align-items-center"
                    style={{height: '300px'}}
                >
                    <img
                        src={bodyImg}
                        alt="Card body"
                        style={{
                            width: '70%',
                            height: '100%',
                            objectFit: 'contain'
                        }}
                    />
                </CCardBody>
            </CCard>
        </CCol>
    );
};

export default TitleCard;
