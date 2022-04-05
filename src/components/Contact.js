import React from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { BsMap, BsPhone, BsFillEnvelopeOpenFill } from "react-icons/bs";

function Classes(props) {
  return (
    <div>
      <div className="Head-Container">
        <h1 className="Head-H1">Contact Us</h1>
      </div>
      <Container className="Contact-mainContainer">
        <Row>
          <Col xs={12} md={8} className="Contact-cardCol">
            <Row>
              <Card className="Contact-contactHeader mb-3">
                <Card.Title className="Contact-headerTitle">
                  Contact Us for Further Information
                </Card.Title>
                <Card.Text className="Contact-headerBody">
                  Quam reprehenderit omnis facere! Pretium dis asperiores
                  veritatis, impedit congue, ante commodi, uliam.{" "}
                </Card.Text>
              </Card>
            </Row>
            <Row>
              <Card className="Contact-locationBadge mb-3">
                <Card.Body>
                  <Row>
                    <Col xs={2}>
                      <BsMap className="Contact-icon" />
                    </Col>
                    <Col>
                      <Card.Title className="Contact-locationTitle">
                        Location Address
                      </Card.Title>
                      <Card.Text>
                        145 Kateway, CA 25615, San Francisco
                      </Card.Text>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Row>
            <Row>
              <Card className="Contact-addressBadge mb-3">
                <Card.Body>
                  <Row>
                    <Col xs={2}>
                      <BsFillEnvelopeOpenFill className="Contact-icon" />
                    </Col>
                    <Col>
                      <Card.Title>Email Address</Card.Title>
                      <Card.Text style={{wordBreak: "break-word"}}>yourcompany@domain.com</Card.Text>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Row>
            <Row>
              <Card className="Contact-phoneBadge mb-3">
                <Card.Body>
                  <Row>
                    <Col xs={2}>
                      <BsPhone className="Contact-icon" />
                    </Col>
                    <Col>
                      <Card.Title>Phone Number</Card.Title>
                      <Card.Text>
                        Phone: +22-656-258 // Mob: +259-55-9825
                      </Card.Text>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Row>
          </Col>
          <Col s={12} md={4}>
            <Card className="Contact-formCard">
              <Form className="p-2 bg-light">
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Row>
                    <Col>
                      <Form.Control type="text" placeholder="Name" />
                    </Col>
                    <Col>
                      <Form.Control type="email" placeholder="Email" />
                    </Col>
                  </Row>
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea2"
                >
                  <Form.Control type="text" placeholder="Subject" />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea3"
                >
                  <Form.Control as="textarea" placeholder="Message" rows={3} />
                </Form.Group>
                <Button
                  className="Contact-formBtn"
                  variant="secondary"
                  type="submit"
                  bg="Contact-button"
                >
                  Send Message
                </Button>
              </Form>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Classes;
