import React from "react";
import {Button, ButtonGroup, Navbar} from "react-bootstrap";
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
                        <div className="nav__menu" id="nav-menu">
                            <div className="nav__list">
                                <CNavItem className="nav__item">
                                    <NavLink to="/" className="nav__link">Home</NavLink>
                                </CNavItem>
                                <CNavItem className="nav__item">
                                    <NavLink to="/about" className="nav__link">About</NavLink>
                                </CNavItem>
                                <CNavItem className="nav__item">
                                    <NavLink to="/contact" className="nav__link">Contact</NavLink>
                                </CNavItem>
                                <br/>
                            </div>

                            <ButtonGroup>
                                <Button className="button" style={{marginRight: "10px"}}>
                                    <NavLink
                                        to="/login"
                                        style={{color: "inherit", textDecoration: "none"}}
                                    >
                                        Login
                                    </NavLink>
                                </Button>
                                <Button className="button" style={{marginRight: "10px"}}>
                                    <NavLink
                                        to="/register"
                                        style={{color: "inherit", textDecoration: "none"}}
                                    >
                                        Register
                                    </NavLink>
                                </Button>
                            </ButtonGroup>
                        </div>
                    </CHeaderNav>
                </CContainer>
            </Navbar>
        </>
    );
};

export default NavBar;
