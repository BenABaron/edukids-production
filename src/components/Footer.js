import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import {ReactComponent as EdukidsLogo} from '../img/edukids_logo.svg';

const Footer = () => {



    return (
        <div className="footer" >
            <Container className="footer-bottom">
                <Row className="text-center">
                    <Col>
                    <EdukidsLogo className="svg svg-footer"/>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                    <Container>
                        <Col className="text-center md-3">
                            <Button href="https://www.facebook.com/" className="footer-icon fa fa-facebook text-center">
                                <FaFacebook />
                            </Button>

                            <Button href="https://twitter.com/" className="footer-icon fa fa-twitter text-center">
                                <FaTwitter />
                            </Button>
                            <Button href="https://www.instagram.com/" className="footer-icon fa fa-instagram text-center">
                                <FaInstagram />
                            </Button>
                            <Button href="https://www.youtube.com/" className="footer-icon fa fa-youtube text-center">
                                <FaYoutube />
                            </Button>
                        </Col>
                    
                        
                    
                    </Container>
                    
                    </Col>
                    <Col>
                    <h6>EduKids</h6>
                    <ul className="list-unstyled md-3">
                        <li><a className="nounderline" href="about">About us</a></li>
                        <li><a className="nounderline" href="career">Careers</a></li>
                        <li>News & Articles</li>
                        <li>Legal Notice</li>
                    </ul>
                    </Col>
                    <Col>
                    <h6>Support</h6>
                    <ul className="list-unstyled md-3">
                        <li>Help Center</li>
                        <li><a className="nounderline" href="contact">Contact Us</a></li>
                        <li><a className="nounderline" href="faq">FAQ</a></li>
                        <li>Parent Community</li>
                    </ul>
                    </Col>
                    <Col>
                    <h6>Contact Information</h6>
                    <ul className="list-unstyled md-3">
                        <li>3557 Derek Drive, Orlando, Florida</li>
                        <li>+1 456-657-887</li>
                        <li>info@domain.com</li>
                    </ul>
                    </Col>
                </Row>
                <Row>
                    <Col></Col>
                    <Col className="text-center">
                    <p className="text-xs-center" >Copyright &copy;{new Date().getFullYear()} EduKids. All rights reserved</p>
                    </Col>
                    <Col></Col>
                </Row>
            </Container>

        </div>
    );

};

export default Footer;