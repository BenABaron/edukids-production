import React from 'react';
import { Container, Nav, Navbar, NavDropdown,  Button} from 'react-bootstrap';
import { BsSearch } from 'react-icons/bs'
import { Link } from 'react-router-dom';
import {ReactComponent as EdukidsLogo} from '../img/edukids_logo.svg';

const Header = () => {

    return (
        <Navbar bg="light" variant="light"
            sticky="top" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Navbar.Brand href="/">
            <EdukidsLogo href="/" className="svg" />
        </Navbar.Brand>
            <Container>
                <Container variant="myblue">
                <Nav className="justify-content-center">
                        <Nav.Link><Link to={process.env.PUBLIC_URL + '/'} style={{color: 'gray', textDecoration: 'none'}}>Home</Link></Nav.Link>
                        <Nav.Link><Link to={process.env.PUBLIC_URL + '/About'} style={{color: 'gray', textDecoration: 'none'}}>About</Link></Nav.Link>
                        <NavDropdown title="Class" style={{color: 'gray', textDecoration: 'none'}}>
                            <NavDropdown.Item><Link to={process.env.PUBLIC_URL + "/Classes"} style={{color: 'gray', textDecoration: 'none'}}>Classes</Link></NavDropdown.Item>
                            <NavDropdown.Item><Link to={process.env.PUBLIC_URL + "/ClassDetail"} style={{color: 'gray', textDecoration: 'none'}}>Class Details</Link></NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Event" style={{color: 'gray', textDecoration: 'none'}}>
                            <NavDropdown.Item><Link to={process.env.PUBLIC_URL + "/Events"} style={{color: 'gray', textDecoration: 'none'}}>Events</Link></NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Other" style={{color: 'gray', textDecoration: 'none'}}>
                            <NavDropdown.Item><Link to={process.env.PUBLIC_URL + "/Contact"} style={{color: 'gray', textDecoration: 'none'}}>Contact Us</Link></NavDropdown.Item>
                            <NavDropdown.Item><Link to={process.env.PUBLIC_URL + "/FAQ"} style={{color: 'gray', textDecoration: 'none'}}>FAQ</Link></NavDropdown.Item>
                            <NavDropdown.Item><Link to={process.env.PUBLIC_URL + "/Team"} style={{color: 'gray', textDecoration: 'none'}}>Team</Link></NavDropdown.Item>
                            <NavDropdown.Item><Link to={process.env.PUBLIC_URL + "/Career"} style={{color: 'gray', textDecoration: 'none'}}>Career</Link></NavDropdown.Item>
                            <NavDropdown.Item><Link to={process.env.PUBLIC_URL + "/CareerDetails"} style={{color: 'gray', textDecoration: 'none'}}>Career Details</Link></NavDropdown.Item>
                            <NavDropdown.Item><Link to={process.env.PUBLIC_URL + "/Facilities"} style={{color: 'gray', textDecoration: 'none'}}>Facilities</Link></NavDropdown.Item>
                        </NavDropdown>
                </Nav>
                </Container>
            </Container>
            <Button className="Header-searchButton fa"><BsSearch /></Button>
            {/* <InputGroup className="d-flex">
                <InputGroup.Text className="Header-searchButton" id="basic-addon1"> <BsSearch /> </InputGroup.Text>
                <FormControl
                    className="Header-searchBar"
                    type="search"
                    placeholder= ""
                    className="mr-2"
                    aria-label="Search"
                />
            </InputGroup> */}
            <Button className="Header-formBtn d-flex" variant="secondary" type="submit" bg="Contact-button">Book a Visit</Button>
            </Navbar.Collapse>
        </Navbar>
    );

};

export default Header;