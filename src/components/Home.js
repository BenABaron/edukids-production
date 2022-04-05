import React, { Component } from 'react'
import { Button, Card, Container, Col, ListGroup, Row, Form } from 'react-bootstrap';
import { FaBook, FaBuilding, FaRegClock, FaPhone, FaCheckCircle, FaLightbulb, FaRegLightbulb, FaHamburger, FaSchool, FaBus, FaRegSun, FaTrophy, FaCircle } from 'react-icons/fa'
import { BsGear } from 'react-icons/bs'
import GalImages from './GalImages'
import Image1 from "../img/happy-little-girl-in-protective-hat-riding-her-bik-W9757CG.jpg"
import Image2 from "../img/adorable-kids-playing-with-constructor-on-floor-in-ZP6VC78.jpg"
import Image3 from "../img/kindergarten-age-girl-learning-about-the-planets-a-EKX3YDA.jpg"

import Image13 from '../img/adorable-kids-playing-with-constructor-on-floor-in-ZP6VC78.jpg';
import Image14 from '../img/boys-and-girls-dancing-PZNK4D9.jpg';
import Image15 from '../img/cheerful-women-in-printing-office-JQ5K4XE.jpg';
import Image4 from '../img/cute-girl-playing-with-paint-in-art-class-85QTUD9.jpg';
import Image5 from '../img/education-teachers-university-and-schools-concept--JA74V7F.jpg';
import Image6 from '../img/emotion-emoticons-used-by-a-psychologist-during-a--D2BFM6T.jpg';
import Image7 from '../img/happy-educator-hugging-adorable-kids-in-kindergart-CSSFQDV.jpg';
import Image8 from '../img/happy-kids-are-painting-at-home-FSC2Q9C.jpg';
import Image9 from '../img/kindergarten-age-girl-learning-about-the-planets-a-EKX3YDA.jpg';
import Image10 from '../img/mother-or-nursery-teacher-teaches-her-children-to--QK27JT7.jpg';
import Image11 from '../img/painting-together-P9VHLJH.jpg';
import Image12 from '../img/sitting-on-a-carpet-P8BAWTX.jpg';
import DotsWithLines from '../img/dots-with-lines.jpg'
import Image16 from "../img/funny-kids.png"

class Home extends Component {

    render() {
        return (
            <div>
                <div className="Home-Head-Container">
                    <Row>
                        <h1 className="Home-Head-H1"> Let the Children Change the World Today!</h1>
                    </Row>
                    <Row>
                        <Col>
                            <Button className="Home-Button-a" variant="primary" type="button">
                                Learn More
                            </Button>
    
                            <Button className="Home-Button-b" variant="primary" type="button">
                                Contact Us
                            </Button>
                        </Col>
                    </Row>
                </div>
                <Container>
                <Row>
                    <Card className="Home-Title-Body-a">
                        <Card.Body style={{marginBottom: '-20px'}}>
                            <Card.Title className="Home-Title">Discover School Activities</Card.Title>
                        </Card.Body>
                    </Card>
                </Row>
                <Row style={{justifyContent: "center"}}>
                    <img src={DotsWithLines} style={{width: "300px"}}></img>
                </Row>
                <Row style={{justifyContent: "center", marginBottom: "100px"}}>
                    <Col sm={12} md={4}>
                        <Card className="Home-Cards Home-Cards-a">
                            <Card.Body>
                                <FaLightbulb className="Home-Card-Icon"/>
                                <Card.Title style={{marginBottom: "20px"}}>Creative Games</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    
                    <Col sm={12} md={4}>
                        <Card className="Home-Cards Home-Cards-b">
                            <Card.Body>
                                <FaRegLightbulb className="Home-Card-Icon"/>
                                <Card.Title style={{marginBottom: "20px"}}>Creative Learning</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    
                    <Col sm={12} md={4}>
                        <Card className="Home-Cards Home-Cards-c">
                            <Card.Body>
                                <BsGear className="Home-Card-Icon"/>
                                <Card.Title style={{marginBottom: "20px"}}>Creative Activities</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    
    
                </Row>
                <Row>
                    <Col>
                        <Card className="Home-Image-Card">
                            <Card.Body>
                                <Card.Img src={Image1} className="Home-Image Home-Image-a"></Card.Img>
                                <Card.Img src={Image2} className="Home-Image Home-Image-b"></Card.Img>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="Home-Card">
                            <Card.Body>
                                <Card.Title className="Home-Title" style={{width: "60%"}}>
                                Friendly School having proud of their Students
                                </Card.Title>
                                <Card.Text>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet porttitor eget dolor morbi non. At imperdiet dui accumsan sit amet nulla facilisi.
                                </Card.Text>
                            </Card.Body>
                        <ListGroup>
                            <ListGroup.Item className="Home-List-Group-Item">
                                <span style={{ margin: "10px", color: "#fe5d37" }}><FaCheckCircle /></span>Supporting child's Personality
                            </ListGroup.Item >
                            <ListGroup.Item className="Home-List-Group-Item">
                                <span style={{ margin: "10px", color: "#fe5d37" }}><FaCheckCircle /></span>Indoor/Outdoor Games for Little Kids
                            </ListGroup.Item>
                            <ListGroup.Item className="Home-List-Group-Item">
                                <span style={{ margin: "10px", color: "#fe5d37" }}><FaCheckCircle /></span>Professional & Qualified Teachers
                            </ListGroup.Item>
                            <ListGroup.Item className="Home-List-Group-Item">
                                <span style={{ margin: "10px", color: "#fe5d37" }}><FaCheckCircle /></span>Best Learning School for Kids
                            </ListGroup.Item>
                        </ListGroup>
                        <Button className="Home-Button-a" variant="primary" type="button">
                            More About Us
                        </Button>
                        </Card>
    
                    </Col>
                </Row>
    
                <Container>
                    <Row>
                        <h4 className="Home-Title" style={{marginTop: "100px", marginBottom: "20px"}}>School Facilities We Offer</h4>
                    </Row>
                    
                    <Row style={{justifyContent: "center"}}>
                        <img src={DotsWithLines} style={{width: "300px"}}></img>
                    </Row>

                    <Row>
                        <Col>
                            <Card className="Home-Facilities-Card">
                                <Card.Body>
                                    <Row>
                                        <Col xs={3} className="Home-Facilities-Icon-Wrapper" style={{backgroundColor: "var(--green)"}}>
                                            <FaHamburger className="Home-Facilities-Card-Icon"/>
                                        </Col>
                                        <Col>
                                            <Card.Title className="Home-Facilities-Card-Title" style={{color: "var(--green)", fontWeight: "700"}}>Meals Provided</Card.Title>
                                            <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                            <Card className="Home-Facilities-Card">
                                <Card.Body>
                                    <Row>
                                        <Col xs={3} className="Home-Facilities-Icon-Wrapper" style={{backgroundColor: "var(--orange)"}}>
                                            <FaBus className="Home-Facilities-Card-Icon"/>
                                        </Col>
                                        <Col>
                                            <Card.Title className="Home-Facilities-Card-Title" style={{color: "var(--orange)", fontWeight: "700"}}>Transportation</Card.Title>
                                            <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                            <Card className="Home-Facilities-Card">
                                <Card.Body>
                                    <Row>
                                        <Col xs={3} className="Home-Facilities-Icon-Wrapper" style={{backgroundColor: "var(--gold)"}}>
                                            <FaRegSun className="Home-Facilities-Card-Icon"/>
                                        </Col>
                                        <Col>
                                            <Card.Title className="Home-Facilities-Card-Title" style={{color: "var(--gold)", fontWeight: "700"}}>Full Day Session</Card.Title>
                                            <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col style={{display: "flex", justifyContent: "center"}}>
                            <img src={Image16} style={{height: "400px", margin: "auto", borderRadius: "15%"}}></img>
                        </Col>
                        <Col>
                            <Card className="Home-Facilities-Card">
                                <Card.Body>
                                    <Row>
                                        <Col style={{textAlign: "right"}}>
                                            <Card.Title className="Home-Facilities-Card-Title" style={{color: "var(--orange)", fontWeight: "700"}}>Language Lesson</Card.Title>
                                            <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
                                        </Col>
                                        <Col xs={3} className="Home-Facilities-Icon-Wrapper" style={{backgroundColor: "var(--orange)"}}>
                                            <FaBook className="Home-Facilities-Card-Icon"/>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                            <Card className="Home-Facilities-Card">
                                <Card.Body>
                                    <Row>
                                        <Col style={{textAlign: "right"}}>
                                            <Card.Title className="Home-Facilities-Card-Title" style={{color: "var(--gold)", fontWeight: "700"}}>Qualified Teachers</Card.Title>
                                            <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
                                        </Col>
                                        <Col xs={3} className="Home-Facilities-Icon-Wrapper" style={{backgroundColor: "var(--gold)"}}>
                                            <FaTrophy className="Home-Facilities-Card-Icon"/>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                            <Card className="Home-Facilities-Card">
                                <Card.Body>
                                    <Row>
                                        <Col style={{textAlign: "right"}}>
                                            <Card.Title className="Home-Facilities-Card-Title" style={{color: "var(--green)", fontWeight: "700"}}>Special Education</Card.Title>
                                            <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
                                        </Col>
                                        <Col xs={3} className="Home-Facilities-Icon-Wrapper" style={{backgroundColor: "var(--green)"}}>
                                            <FaLightbulb className="Home-Facilities-Card-Icon"/>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
    
    
                <Container className="Home-Bottom-Container">
                    <Row>
                        <h1 className="Head-H1" style={{marginTop: "100px", marginBottom: "40px"}}>Choose Us For Your Child Better Future</h1>
                        <h8 style={{width: "60%", margin: "auto", marginBottom: "40px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h8>
                    </Row>
                    <Row>
                        <Col>
                            <Button variant="primary" type="button" className="Home-Button-a" style={{marginBottom: "70px"}}>
                                Join Us Now
                            </Button>
                        </Col>
                    </Row>
                </Container>
    
                <Container>
                <Row>
                        <h4 className="Home-Title" style={{marginTop: "100px", marginBottom: "20px"}}>Creative Classes</h4>
                    </Row>
                    <Row style={{justifyContent: "center"}}>
                    <img src={DotsWithLines} style={{width: "300px"}}></img>
                </Row>
                    <Row className="Classes-Row-1">
                        <Col className="Classes-Col">
                            <Card className="Classes-Card" style={{ backgroundColor: "rgb(254,93,55)" }} >
                            <Card.Img className="Classes-Card-Img"
                                variant="top" src={Image1} />
                            <Card.Body className="Classes-Card-Body">
                                <Card.Title>Physical Class</Card.Title>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of the card's content.
                                </Card.Text>
                                <Row >
                                <Col className="Classes-Card-Col">
                                    <Card.Text>
                                    Age 2-5 Years
                                </Card.Text>
                                </Col>
                                <Col className="Classes-Card-Col">
                                    <Card.Text>
                                    Size 18 Seats
                                </Card.Text>
                                </Col>
                                <Col>
                                    <Card.Text>
                                    Price $22/m
                                </Card.Text>
                                </Col>
                                </Row>
                            </Card.Body>
                            </Card>
                        </Col>
    
                        <Col className="Classes-Col">
                            <Card className="Classes-Card" style={{ backgroundColor: "rgb(234,170,20)" }}>
                            <Card.Img className="Classes-Card-Img" variant="top" src={Image2}/>
                            <Card.Body className="Classes-Card-Body">
                                <Card.Title>Creative Class</Card.Title>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of the card's content.
                                </Card.Text>
                                <Row>
                                <Col className="Classes-Card-Col">
                                    <Card.Text>
                                    Age
                                    2-5 Years
                                </Card.Text>
                                </Col>
                                <Col className="Classes-Card-Col">
                                    <Card.Text>
                                    Size
                                    18 Seats
                                </Card.Text>
                                </Col>
                                <Col>
                                    <Card.Text>
                                    Price
                                    $22/m
                                </Card.Text>
                                </Col>
                                </Row>
                            </Card.Body>
                            </Card>
                        </Col>
    
                        <Col className="Classes-Col">
                            <Card className="Classes-Card" style={{ backgroundColor: "rgb(4,185,146)" }}>
                            <Card.Img className="Classes-Card-Img" variant="top" src={Image3} />
                            <Card.Body className="Classes-Card-Body">
                                <Card.Title>Learning Class</Card.Title>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of the card's content.
                                </Card.Text>
                                <Row>
                                <Col className="Classes-Card-Col">
                                    <Card.Text>
                                    Age
                                    2-5 Years
                                </Card.Text>
                                </Col>
                                <Col className="Classes-Card-Col">
                                    <Card.Text>
                                    Size
                                    18 Seats
                                </Card.Text>
                                </Col>
                                <Col>
                                    <Card.Text>
                                    Price
                                    $22/m
                                </Card.Text>
                                </Col>
                                </Row>
                            </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Container className="Home-button-container">
                    <Button variant="primary" type="button" className="Home-Button-a" >Discover More</Button>
                    </Container>
                </Container>
                <Container>
                    <Row>
                        <Col>
                            <Card className="Home-Card-Classes-Info">
                                <Card.Body>
                                <Card.Title className="Home-Title" style={{marginBottom: "10px"}}>Get Online Class For Free</Card.Title>
                                <Row style={{justifyContent: "center"}}>
                                    <img src={DotsWithLines} style={{width: "200px", marginBottom: "10px"}}></img>
                                </Row>
                                <Card.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Card.Text>
                                <Card.Footer style={{backgroundColor: "white", borderTop: "none", marginTop: "30px"}}>
                                    <Row>
                                        <Col>
                                            <div className="Home-Classes-Info-Wrapper" style={{backgroundColor: "var(--orange)"}}>
                                            <Card.Text className="Home-Classes-Info-Big-Text">58+</Card.Text>
                                            <Card.Text>Teachers</Card.Text>
                                            </div>
                                        </Col>
                                        <Col>
                                            <div className="Home-Classes-Info-Wrapper" style={{backgroundColor: "var(--green)"}}>
                                            <Card.Text className="Home-Classes-Info-Big-Text">4K+</Card.Text>
                                            <Card.Text>Students</Card.Text>    
                                            </div>
                                        </Col>
                                        <Col>
                                            <div className="Home-Classes-Info-Wrapper" style={{backgroundColor: "var(--gold)"}}>
                                            <Card.Text className="Home-Classes-Info-Big-Text">22+</Card.Text>
                                            <Card.Text>Classes</Card.Text>
                                            </div>
                                        </Col>
                                    </Row>
                                </Card.Footer>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className="Classes-Col-Form">
                <Form className="Classes-Form">
                  <h4> Register Now</h4>
                  <h8>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h8>
                  <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Control type="name" placeholder="Name" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Enter email" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicMsg" >
                    <Form.Control as="textarea" rows={4} type="msg" placeholder="Message" />
                  </Form.Group>
                  <Button className="Classes-Form-Button" variant="primary" type="submit">
                    Submit Now
                  </Button>
                </Form>
              </Col>
                    </Row>
                </Container>
    
    
                <Container>
                    <Col className="Home-Title">
                    Event Gallery
                    </Col>
                {/* Gallery */}
        <Row>
          <Col className="lg-4 md-12 mb-4 mb-lg-0">
            <img
              src={Image9}
              className="w-100 shadow-1-strong rounded mb-4"
              alt="indoor"
            />

            <img
              src={Image2}
              className="w-100 shadow-1-strong rounded mb-4"
              alt="outdoor"
            />

            <img
              src={Image1}
              className="w-100 shadow-1-strong rounded mb-4"
              alt="outdoor"
            />

            <img
              src={Image11}
              className="w-100 shadow-1-strong rounded mb-4"
              alt="painting"
            />
          </Col>

          <Col className="lg-4 mb-4 mb-lg-0">
            <img
              src={Image4}
              className="w-100 shadow-1-strong rounded mb-4"
              alt="painting"
            />

            <img
              src={Image6}
              className="w-100 shadow-1-strong rounded mb-4"
              alt="outdoor"
            />

            <img
              src={Image10}
              className="w-100 shadow-1-strong rounded mb-4"
              alt="indoor"
            />

            <img
              src={Image13}
              className="w-100 shadow-1-strong rounded mb-4"
              alt="indoor"
            />
          </Col>

          <Col className="lg-4 mb-4 mb-lg-0">
            <img
              src={Image7}
              className="w-100 shadow-1-strong rounded mb-4"
              alt="outdoor"
            />

            <img
              src={Image5}
              className="w-100 shadow-1-strong rounded mb-4"
              alt="outdoor"
            />

            <img
              src={Image8}
              className="w-100 shadow-1-strong rounded mb-4"
              alt="indoor"
            />
            <img
              src={Image9}
              className="w-100 shadow-1-strong rounded mb-4"
              alt="outdoor"
            />
          </Col>

          <Col className="lg-4 mb-4 mb-lg-0">
            <img
              src={Image14}
              className="w-100 shadow-1-strong rounded mb-4"
              alt="indoor"
            />
            <img
              src={Image15}
              className="w-100 shadow-1-strong rounded mb-4"
              alt="outdoor"
            />

            <img
              src={Image12}
              className="w-100 shadow-1-strong rounded mb-4"
              alt="indoor"
            />

            <img
              src={Image2}
              className="w-100 shadow-1-strong rounded mb-4"
              alt="painting"
            />
          </Col>
        </Row>
        {/* Gallery */}
                   
                </Container>
                <Container>
                    <Row className="About-Green-Row">
                        <Col>
                            <FaBook className="About-icons"/>
                            <Row className="About-Green-Icon-Row">         
                            <Row className="justify-content-md-center">Class Sessions</Row>
                            <Row className="justify-content-md-center">Sunday - Monday</Row>
                            <Row className="justify-content-md-center">8:00 am - 12:30 pm</Row>
                            </Row>
                        </Col>
                        <Col>
                        
                            <FaBuilding className="About-icons"/>
                            <Row className="About-Green-Icon-Row">    
                            <Row className="justify-content-md-center">Location Address</Row>
                            <Row className="justify-content-md-center">145 While Kateway</Row>
                            <Row className="justify-content-md-center">CA 25615, San Francisco</Row>
                            </Row>
                        </Col>
                        <Col>
                            <FaRegClock className="About-icons"/>
                            <Row className="About-Green-Icon-Row"> 
                            <Row className="justify-content-md-center">Our Office Hour</Row>
                            <Row className="justify-content-md-center">Sunady - Monday</Row>
                            <Row className="justify-content-md-center">7:00 am - 5:30pm</Row>
                            </Row>
                        </Col>
                        <Col>
                            <FaPhone className="About-icons"/>
                            <Row className="About-Green-Icon-Row"> 
                            <Row className="justify-content-md-center">Phone & Email</Row>
                            <Row className="justify-content-md-center">(+22)-658-258 / +259-55-9825</Row> 
                            </Row>
                        </Col>
                    </Row>
                </Container>
                <Container>
                    <Row>
                        <Col>
                            <Card className="Contact-contactHeader mb-3">
                                <Card.Title className="Contact-headerTitle mt-5">Contact Us for Further Information</Card.Title>
                                <img src={DotsWithLines} style={{width: "300px"}}></img>
                                <Card.Text className="Contact-headerBody mt-3 mb-4">Quam reprehenderit omnis facere! Pretium dis asperiores veritatis, impedit congue, ante commodi, uliam. </Card.Text>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="Contact-formCard w-75 mt-5 mb-4">
                                <Form className="p-2 bg-light">
                                    <Form.Group className="mb-3" contro4lId="exampleForm.ControlTextarea1">
                                        <Row>
                                            <Col>
                                                <Form.Control type="text" placeholder="Name" /> 
                                            </Col>
                                            <Col>
                                                <Form.Control type="email" placeholder="Email" />
                                            </Col>
                                        </Row>
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea2">
                                        <Form.Control type="text" placeholder="Subject" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea3">
                                        <Form.Control as="textarea" placeholder="Message" rows={3} />
                                    </Form.Group>
                                    <Button className="Contact-formBtn" variant="secondary" type="submit" bg="Contact-button">Send Message</Button>
                                </Form>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </Container>
            </div>
            )
        }
    }

export default Home;