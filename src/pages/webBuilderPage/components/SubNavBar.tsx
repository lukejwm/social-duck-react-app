import {CButton, CContainer, CHeader, CHeaderNav, CNavItem} from "@coreui/react";
import {NavLink} from "react-router-dom";

const SubNavBar: React.FC = () => {
    return (
        <>
            <CHeader className="sub-navbar">
                <CContainer fluid>
                    <CHeaderNav className="w-100 d-flex justify-content-center">
                        <CNavItem className="sub-nav-item">
                            <NavLink className="nav-link" to="wb-business-details">
                                Business Details
                            </NavLink>
                        </CNavItem>
                        <CNavItem className="sub-nav-item">
                            <NavLink className="nav-link" to="wb-banner">
                                Banner Section
                            </NavLink>
                        </CNavItem>
                        <CNavItem className="sub-nav-item">
                            <NavLink className="nav-link" to="wb-about">
                                About Section
                            </NavLink>
                        </CNavItem>
                        <CNavItem className="sub-nav-item">
                            <NavLink className="nav-link" to="wb-events">
                                Events Section
                            </NavLink>
                        </CNavItem>
                        <CNavItem className="sub-nav-item">
                            <NavLink className="nav-link" to="wb-menu">
                                Menu Section
                            </NavLink>
                        </CNavItem>
                        <CNavItem className="sub-nav-item">
                            <NavLink className="nav-link" to="wb-gallery">
                                Gallery Section
                            </NavLink>
                        </CNavItem>
                        <CNavItem className="sub-nav-item">
                            <NavLink className="nav-link" to="wb-contact">
                                Contact Section
                            </NavLink>
                        </CNavItem>
                        <CNavItem className="sub-nav-item">
                            <NavLink className="nav-link" to="wb-site-styling">
                                Website Styling
                            </NavLink>
                        </CNavItem>

                        <CButton className="sub-nav-button bg-secondary mx-2">
                            <NavLink style={{color: "white", textDecoration: "none"}}
                                     to="/login"
                            >
                                Preview
                            </NavLink>
                        </CButton>
                    </CHeaderNav>
                </CContainer>
            </CHeader>
        </>
    );
};

export default SubNavBar;
