import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Accordion,
  Form,
  Button,
} from "react-bootstrap";
import Image from "../img/emotion-emoticons-used-by-a-psychologist-during-a--D2BFM6T.jpg";
import {} from "react-icons";
import { FaQuoteRight } from "react-icons/fa";

function FrequentQuestions() {
  return (
    <div>
      <div className="Head-Container">
        <h1 className="Head-H1">FAQ</h1>
      </div>
      <Container>
        <Row style={{ marginBottom: "70px" }}>
          <Col sm={12} md={7}>
            <Card className="FAQ-card">
              <Card.Body>
                <Card.Header className="FAQ-card-header">
                  Questions/Answers
                </Card.Header>
                <Card.Title className="FAQ-card-title">
                  Check out Frequently Asked Questions
                </Card.Title>
                <Card.Text className="FAQ-card-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </Card.Text>
                <Accordion className="FAQ-accordion">
                  <Accordion.Item eventKey="0" className="FAQ-accordion-item">
                    <Accordion.Header className="FAQ-accordion-header">
                      How we became best among others?
                    </Accordion.Header>
                    <Accordion.Body>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1" className="FAQ-accordion-item">
                    <Accordion.Header className="FAQ-accordion-header">
                      Why choose us for your projects?
                    </Accordion.Header>
                    <Accordion.Body>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2" className="FAQ-accordion-item">
                    <Accordion.Header className="FAQ-accordion-header">
                      What do we offer to you?
                    </Accordion.Header>
                    <Accordion.Body>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="3" className="FAQ-accordion-item">
                    <Accordion.Header className="FAQ-accordion-header">
                      How we provide services for you?
                    </Accordion.Header>
                    <Accordion.Body>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="4" className="FAQ-accordion-item">
                    <Accordion.Header className="FAQ-accordion-header">
                      Are we affordable to hire?
                    </Accordion.Header>
                    <Accordion.Body>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Form className="FAQ-form">
              <Form.Group>
                <Form.Label className="FAQ-form-label">
                  Any Questions? Ask Us!!
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Your Name"
                  className="FAQ-form-control"
                />
                <Form.Control
                  type="email"
                  placeholder="Your Email"
                  className="FAQ-form-control"
                />
                <Form.Control
                  type="text"
                  placeholder="Mobile Number"
                  className="FAQ-form-control"
                />
                <Form.Control
                  rows={3}
                  type="textarea"
                  style={{ height: "170px" }}
                  placeholder="Enter Your Message"
                  className="FAQ-form-control"
                />
                <Button type="submit" className="FAQ-form-button">
                  Submit Questions
                </Button>
              </Form.Group>
            </Form>
          </Col>
        </Row>
        <Row style={{ marginBottom: "150px" }}>
          <Col>
            <Card className="FAQ-image-card">
              <Card.Body>
                <Card.Img src={Image}></Card.Img>
              </Card.Body>
            </Card>
            <Card className="FAQ-image-caption">
              <Card.Body style={{ color: "white" }}>
                <FaQuoteRight className="FAQ-image-caption-icon" />
                <Card.Title style={{ fontWeight: "700" }}>
                  Give us a chance to prove it!
                </Card.Title>
                <Card.Text style={{ fontSize: "16px" }}>
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua.""
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} md={6}>
            <Card className="FAQ-card">
              <Card.Body>
                <Card.Header className="FAQ-card-header">
                  Questions/Answers
                </Card.Header>
                <Card.Title className="FAQ-card-title">
                  Benefits & What we do?
                </Card.Title>
                <Card.Text className="FAQ-card-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </Card.Text>
                <Accordion className="FAQ-accordion">
                  <Accordion.Item eventKey="0" className="FAQ-accordion-item">
                    <Accordion.Header className="FAQ-accordion-header">
                      We build everything you can think of!
                    </Accordion.Header>
                    <Accordion.Body>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1" className="FAQ-accordion-item">
                    <Accordion.Header className="FAQ-accordion-header">
                      We makes your construction project special.
                    </Accordion.Header>
                    <Accordion.Body>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2" className="FAQ-accordion-item">
                    <Accordion.Header className="FAQ-accordion-header">
                      We guarantee success with our project.
                    </Accordion.Header>
                    <Accordion.Body>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="3" className="FAQ-accordion-item">
                    <Accordion.Header className="FAQ-accordion-header">
                      We help you to construct any project.
                    </Accordion.Header>
                    <Accordion.Body>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="4" className="FAQ-accordion-item">
                    <Accordion.Header className="FAQ-accordion-header">
                      We make possible to work in a tight timeframe.
                    </Accordion.Header>
                    <Accordion.Body>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default FrequentQuestions;
