import React from "react";
// TODO: ensure that react-bootstrap elements are removed in favour of CoreUI
import {Button, Navbar} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import '../../assets/stylesheet/style.css'
import {CContainer, CHeaderNav, CNavItem} from "@coreui/react";

interface NavBarProps {
    imgSrc: string;
}

const NavBar: React.FC<NavBarProps> = ({imgSrc}: NavBarProps) => {
    return (
        <>
            <Navbar className="shadow-sm navbar">
                <CContainer fluid>
                    <Navbar.Brand className="text-danger">
                        <NavLink to="/" className="navbar-brand">
                            <div className="navbar-brand-img-wrapper">
                                <img src={imgSrc} alt="Brand Logo"/>
                            </div>
                        </NavLink>
                    </Navbar.Brand>

                    <CHeaderNav className="nav">
                        <div className="nav-menu" id="nav-menu">
                            <div className="nav-list">
                                <CNavItem className="nav-item">
                                    <NavLink to="/" className="nav-link">Home</NavLink>
                                </CNavItem>
                                <CNavItem className="nav-item">
                                    <NavLink to="/web-builder" className="nav-link">Web Builder</NavLink>
                                </CNavItem>
                                <CNavItem className="nav-item">
                                    <NavLink to="/social-media" className="nav-link">Social Media</NavLink>
                                </CNavItem>
                                <CNavItem className="nav-item">
                                    <NavLink to="/waitlist" className="nav-link">Waitlist</NavLink>
                                </CNavItem>
                                <br/>
                            </div>

                            <Button className="button" style={{marginRight: "10px"}}>
                                <NavLink
                                    to="/login"
                                    style={{color: "inherit", textDecoration: "none"}}
                                >
                                    Sign Out
                                </NavLink>
                            </Button>
                        </div>
                    </CHeaderNav>
                </CContainer>
            </Navbar>
        </>
    );
};

export default NavBar;
