import React from 'react';
import { Container, Nav, Navbar, NavDropdown,  Button} from 'react-bootstrap';
import { BsSearch } from 'react-icons/bs'
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
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="about">About</Nav.Link>
                        <NavDropdown title="Class">
                            <NavDropdown.Item href="classes">Classes</NavDropdown.Item>
                            <NavDropdown.Item href="classdetail">Class Detail</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Event">
                            <NavDropdown.Item href="events">Events</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Other">
                            <NavDropdown.Item href="contact">Contact Us</NavDropdown.Item>
                            <NavDropdown.Item href="faq">FAQ</NavDropdown.Item>
                            <NavDropdown.Item href="team">Team</NavDropdown.Item>
                            <NavDropdown.Item href="career">Career</NavDropdown.Item>
                            <NavDropdown.Item href="careerdetails">Career Details</NavDropdown.Item>
                            <NavDropdown.Item href="facilities">Facilities</NavDropdown.Item>
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