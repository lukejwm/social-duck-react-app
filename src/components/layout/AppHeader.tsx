import {CHeader,} from '@coreui/react'
import NavBar from "./Navbar.tsx";

const AppHeader = () => {
    return (
        <>
        <CHeader position="sticky" className="mb-4 p-0">
            <NavBar imgSrc="src/assets/images/navbar-logo.png" />
        </CHeader>
</>
)
    ;
};

export default AppHeader;
