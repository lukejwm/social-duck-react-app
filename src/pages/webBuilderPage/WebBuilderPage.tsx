import { Outlet } from 'react-router-dom';
import SubNavBar from "./components/SubNavBar.tsx";
import { CContainer } from '@coreui/react';

const WebBuilderPage = () => {
    return (
        <>
            <SubNavBar />
            <CContainer>
                <Outlet />
            </CContainer>
        </>
    );
}

export default WebBuilderPage;
