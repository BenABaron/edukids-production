import React from "react";
import { Col, Container, Row, Card, Form, Button } from "react-bootstrap";
import { FaCoins, FaSchool, FaTrophy } from "react-icons/fa";

function Career(props) {
  return (
    <div>
      <div className="Head-Container">
        <h1 className="Head-H1">Career</h1>
      </div>
      <Container>
        <Row>
          <Card className="Career-card-a">
            <Card.Body>
              <Card.Header className="Career-card-header Career-card-header-a">
                Vacancy/Careers
              </Card.Header>
              <Card.Title className="Career-card-title-a">
                Let's join with us!
              </Card.Title>
              <Card.Text className="Career-card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                tristique feugiat nibh eget condimentum. Donec mattis massa
                augue, sit amet facilisis nunc fermentum eu. Aliquam.
              </Card.Text>
            </Card.Body>
          </Card>
        </Row>
        <Row>
          <Col className="Career-card-column">
            <Row>
              <Card className="Career-card-b">
                <Card.Body>
                  <Card.Header className="Career-card-header Career-card-header-b">
                    Full Time/Part Time
                  </Card.Header>
                  <Card.Title className="Career-card-title-b">
                    Teacher
                  </Card.Title>
                  <Card.Text className="Career-card-text Career-card-text-b">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer egestas tellus nec mattis tincidunt. Duis nisl
                    ipsum.
                  </Card.Text>
                  <Button className="Career-button">Apply Now!</Button>
                </Card.Body>
              </Card>
            </Row>
            <Row>
              <Card className="Career-card-b">
                <Card.Body>
                  <Card.Header className="Career-card-header Career-card-header-b">
                    Part Time
                  </Card.Header>
                  <Card.Title className="Career-card-title-b">
                    Assistant
                  </Card.Title>
                  <Card.Text className="Career-card-text Career-card-text-b">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer egestas tellus nec mattis tincidunt. Duis nisl
                    ipsum.
                  </Card.Text>
                  <Button className="Career-button">Apply Now!</Button>
                </Card.Body>
              </Card>
            </Row>
          </Col>
          <Col className="Career-card-column">
            <Row>
              <Card className="Career-card-b">
                <Card.Body>
                  <Card.Header className="Career-card-header Career-card-header-b">
                    Full Time
                  </Card.Header>
                  <Card.Title className="Career-card-title-b">
                    Manager
                  </Card.Title>
                  <Card.Text className="Career-card-text Career-card-text-b">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer egestas tellus nec mattis tincidunt. Duis nisl
                    ipsum.
                  </Card.Text>
                  <Button className="Career-button">Apply Now!</Button>
                </Card.Body>
              </Card>
            </Row>
            <Row>
              <Card className="Career-card-b">
                <Card.Body>
                  <Card.Header className="Career-card-header Career-card-header-b">
                    Full Time/Part Time
                  </Card.Header>
                  <Card.Title className="Career-card-title-b">
                    Accountant
                  </Card.Title>
                  <Card.Text className="Career-card-text Career-card-text-b">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer egestas tellus nec mattis tincidunt. Duis nisl
                    ipsum.
                  </Card.Text>
                  <Button className="Career-button">Apply Now!</Button>
                </Card.Body>
              </Card>
            </Row>
          </Col>
          <Col >
            <Form className="Career-form">
              <Form.Group>
                <Form.Label className="Career-form-label">
                  Join Our Team
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Your Name"
                  className="Career-form-control"
                />
                <Form.Control
                  type="email"
                  placeholder="Your Email"
                  className="Career-form-control"
                />
                <Form.Control
                  type="text"
                  placeholder="Your Position"
                  className="Career-form-control"
                />
                <Form.Control
                  type="textarea"
                  style={{ height: "170px" }}
                  placeholder="Enter Your Message"
                  className="Career-form-control"
                />
                <Button type="submit" className="Career-form-button">
                  Send Application
                </Button>
              </Form.Group>
            </Form>
          </Col>
        </Row>
        <Row className="Career-row-d">
          <Col>
            <Card className="Career-card-d">
              <Card.Body>
                <Card.Header className="Career-card-header Career-card-header-d">
                  Our Benefits
                </Card.Header>
                <Card.Text className="Career-card-text-d">
                  Our school has been present for over 15 years to provide best
                  quality education for kids.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card body className="Career-card-e">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              dapibus urna quis suscipit posuere. Sed quis felis tempor, iaculis
              justo eget, consectetur nisi. Suspendisse consequat, enim non
              convallis congue, quam diam pretium erat, eget volutpat ipsum ex
              vitae nunc.
            </Card>
          </Col>
        </Row>
        <Row className="Career-row-c">
          <Col sm={12} md={4}>
            <Card className="Career-card-c">
              <Card.Body>
                <Row>
                  <Col xs={3} className="Career-icon-background">
                    <FaTrophy className="Career-icons" />
                  </Col>
                  <Col>
                    <Card.Title className="Career-card-title-c">
                      Award Winning
                    </Card.Title>
                    <Card.Text className="Career-card-text">
                      orem ipsum dolor sit amet, consectetur adipiscing elit.
                    </Card.Text>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} md={4}>
            <Card className="Career-card-c">
              <Card.Body>
                <Row>
                  <Col xs={3} className="Career-icon-background">
                    <FaCoins className="Career-icons" />
                  </Col>
                  <Col>
                    <Card.Title className="Career-card-title-c">
                      Affordable Fees
                    </Card.Title>
                    <Card.Text className="Career-card-text">
                      orem ipsum dolor sit amet, consectetur adipiscing elit.
                    </Card.Text>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} md={4}>
            <Card className="Career-card-c">
              <Card.Body>
                <Row>
                  <Col xs={3} className="Career-icon-background">
                    <FaSchool className="Career-icons" />
                  </Col>
                  <Col>
                    <Card.Title className="Career-card-title-c">
                      Best Environment
                    </Card.Title>
                    <Card.Text className="Career-card-text">
                      orem ipsum dolor sit amet, consectetur adipiscing elit.
                    </Card.Text>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Career;
