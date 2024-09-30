import {
    CContainer,
    CRow,
} from '@coreui/react';
import TitleCard from "../../components/titleCards/TitleCard.tsx";

const HomePage = () => {
    return (
        <>
            <CContainer
                fluid
                className="d-flex justify-content-center align-items-center vh-100"
            >
                <CRow className="justify-content-center">
                    {/* TODO: Replace the title image with actual css */}
                    <TitleCard
                        titleImg="src/assets/images/website-title.png"
                        bodyImg="src/assets/images/website-icon.png"
                        pageLink="/web-builder"
                    />
                    <TitleCard
                        titleImg="src/assets/images/social-media-title.png"
                        bodyImg="src/assets/images/social-media-icons.png"
                        pageLink="/social-media"
                    />
                    <TitleCard
                        titleImg="src/assets/images/waitlist-title.png"
                        bodyImg="src/assets/images/waitlist-icon.png"
                        pageLink="/waitlist"
                    />
                </CRow>
            </CContainer>
        </>
    );
}

export default HomePage;
