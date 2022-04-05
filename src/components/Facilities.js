import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Form,
  Image,
} from "react-bootstrap";
import FacilitiesImage2 from "../img/outdoor_activities.svg";
import FacilitiesImage1 from "../img/programs.svg";
import FacilitiesImage3 from "../img/extra_activities.svg";
import FacilitiesImage4 from "../img/learning.svg";
import FacilitiesImage5 from "../img/qualified_teachers.svg";
import FacilitiesImage6 from "../img/special_education.svg";
import FacilitiesImage7 from "../img/indoor_activities.svg";
import FacilitiesImage8 from "../img/class_sessions.svg";
import { FaBook, FaBuilding, FaRegClock, FaPhone } from "react-icons/fa";

export default function Facilities() {
  return (
    <div>
      <div className="Head-Container">
        <h1 className="Head-H1">Facilities</h1>
      </div>
      <Container className="Facilities-Container">
        <Row>
          {/* *** list column ***       */}
          <Col xs={6} md={3.5} lg={4}>
            <Card border="primary" style={{ border: "none" }}>
              <Card.Body>
                <Row>
                  <Col md="auto">
                    <Image
                      src={FacilitiesImage1}
                      className="Facilities-card-icon1"
                    />
                  </Col>
                  <Col>
                    <h6 className="Facilities-card-text1">Meals Provided</h6>
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.{" "}
                    </p>
                  </Col>
                </Row>
              </Card.Body>
            </Card>

            <Card border="primary" style={{ border: "none" }}>
              <Card.Body>
                <Row>
                  <Col md="auto">
                    <Image
                      src={FacilitiesImage2}
                      className="Facilities-card-icon2"
                    />
                  </Col>
                  <Col>
                    <h6 className="Facilities-card-text2">Transportation</h6>
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.{" "}
                    </p>
                  </Col>
                </Row>
              </Card.Body>
            </Card>

            <Card border="primary" style={{ border: "none" }}>
              <Card.Body>
                <Row>
                  <Col md="auto">
                    <Image
                      src={FacilitiesImage7}
                      className="Facilities-card-icon3"
                    />
                  </Col>
                  <Col>
                    <h6 className="Facilities-card-text3">Full Day Session</h6>
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.{" "}
                    </p>
                  </Col>
                </Row>
              </Card.Body>
            </Card>

            <Card border="primary" style={{ border: "none" }}>
              <Card.Body>
                <Row>
                  <Col md="auto">
                    <Image
                      src={FacilitiesImage3}
                      className="Facilities-card-icon2"
                    />
                  </Col>
                  <Col>
                    <h6 className="Facilities-card-text2">Extra Activies</h6>
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.{" "}
                    </p>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>

          {/* Second column */}

          <Col xs={6} md={3.5} lg={4}>
            <Card border="primary" style={{ border: "none" }}>
              <Card.Body>
                <Row>
                  <Col md="auto">
                    <Image
                      src={FacilitiesImage8}
                      className="Facilities-card-icon2"
                    />
                  </Col>
                  <Col>
                    <h6 className="Facilities-card-text2">Language Lesson</h6>
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    </p>
                  </Col>
                </Row>
              </Card.Body>
            </Card>

            <Card border="primary" style={{ border: "none" }}>
              <Card.Body>
                <Row>
                  <Col md="auto">
                    <Image
                      src={FacilitiesImage5}
                      className="Facilities-card-icon3"
                    />
                  </Col>
                  <Col>
                    <h6 className="Facilities-card-text3">
                      Qualified Teachers
                    </h6>
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    </p>
                  </Col>
                </Row>
              </Card.Body>
            </Card>

            <Card border="primary" style={{ border: "none" }}>
              <Card.Body>
                <Row>
                  <Col md="auto">
                    <Image
                      src={FacilitiesImage6}
                      className="Facilities-card-icon1"
                    />
                  </Col>
                  <Col>
                    <h6 className="Facilities-card-text1">Special Education</h6>
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    </p>
                  </Col>
                </Row>
              </Card.Body>
            </Card>

            <Card border="primary" style={{ border: "none" }}>
              <Card.Body>
                <Row>
                  <Col md="auto">
                    <Image
                      src={FacilitiesImage4}
                      className="Facilities-card-icon3"
                    />
                  </Col>
                  <Col>
                    <h6 className="Facilities-card-text3">Health Care</h6>
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    </p>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>

          {/* *** card column *** */}
          <Col xs={12} lg={4} className="justify-content-md-center">
            <Card
              className="Facilities-form text-center"
              style={{
                width: "18rem",
                color: "white",
                backgroundColor: "#ff5d37",
                borderRadius: "20px",
                padding: "30px 8px",
              }}
            >
              <Card.Body>
                <Card.Title>
                  <b>Register Now</b>
                </Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Form>
                  <Form.Group className="mb-3">
                    <Form.Control type="text" placeholder="Name" />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Email" />
                  </Form.Group>

                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlTextarea1"
                  >
                    <Form.Control
                      as="textarea"
                      rows={3}
                      placeholder="Message"
                    />
                  </Form.Group>

                  <Button
                    variant="primary"
                    className="form_btn_custom"
                    type="submit"
                  >
                    Submit Now
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="About-Green-Row Facilities-green-row">
          <Col>
            <FaBook className="About-icons" />
            <Row className="About-Green-Icon-Row">
              <Row className="justify-content-md-center">Class Sessions</Row>
              <Row className="justify-content-md-center">Sunday - Monday</Row>
              <Row className="justify-content-md-center">
                8:00 am - 12:30 pm
              </Row>
            </Row>
          </Col>
          <Col>
            <FaBuilding className="About-icons" />
            <Row className="About-Green-Icon-Row">
              <Row className="justify-content-md-center">Location Address</Row>
              <Row className="justify-content-md-center">145 While Kateway</Row>
              <Row className="justify-content-md-center">
                CA 25615, San Francisco
              </Row>
            </Row>
          </Col>
          <Col>
            <FaRegClock className="About-icons" />
            <Row className="About-Green-Icon-Row">
              <Row className="justify-content-md-center">Our Office Hour</Row>
              <Row className="justify-content-md-center">Sunady - Monday</Row>
              <Row className="justify-content-md-center">7:00 am - 5:30pm</Row>
            </Row>
          </Col>
          <Col>
            <FaPhone className="About-icons" />
            <Row className="About-Green-Icon-Row">
              <Row className="justify-content-md-center">Phone & Email</Row>
              <Row className="justify-content-md-center">
                (+22)-658-258 / +259-55-9825
              </Row>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
