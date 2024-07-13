import React from "react";
import {Button, ButtonGroup, Container, Navbar} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import {IoClose, IoMenu} from "react-icons/io5";
import '../../assets/stylesheet/style.css'

interface NavBarProps {
    imgSrc: string;
}

const NavBar: React.FC<NavBarProps> = ({imgSrc}: NavBarProps) => {
    return (
        <>
            <Navbar variant="light" className="shadow-sm navbar">
                <Container>
                    <Navbar.Brand className="text-danger">
                        <NavLink to="/" className="navbar-brand">
                            <div className="navbar-brand-img-wrapper">
                                <img src={imgSrc} alt="Brand Logo"/>
                            </div>
                        </NavLink>
                    </Navbar.Brand>

                    <nav className="nav">
                        <div className="nav__menu" id="nav-menu">
                            <ul className="nav__list">
                                <li className="nav__item">
                                    <NavLink to="/" className="nav__link">Home</NavLink>
                                </li>
                                <li className="nav__item">
                                    <NavLink to="/about" className="nav__link">About</NavLink>
                                </li>
                                <li className="nav__item">
                                    <NavLink to="/contact" className="nav__link">Contact</NavLink>
                                </li>
                                <br />
                            </ul>

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

                            <div className="nav__close" id="nav-close">
                                <IoClose/>
                            </div>
                        </div>

                        <div className="nav__toggle" id="nav-toggle">
                            <IoMenu/>
                        </div>
                    </nav>
                </Container>
            </Navbar>
        </>
    );
};

export default NavBar;
