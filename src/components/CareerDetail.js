import React from "react";
import {
  Button,
  Card,
  Col,
  Container,
  ListGroup,
  Row,
  Tabs,
  Tab,
  Accordion,
} from "react-bootstrap";
import { FaFacebook, FaFileInvoice } from "react-icons/fa";
import Image1 from "../img/tutor-and-multicultural-kids-playing-with-construc-M27G27Q.jpg";

function CareerDetail() {
  return (
    <div>
      <div className="Head-Container">
        <h1 className="Head-H1">Career Detail</h1>
      </div>
      <Container>
        <Row>
          <Col sm={12} md={5} className="CareerDetail-Column">
            <Row>
              <Card className="CareerDetail-Card">
                <Card.Body>
                  <Card.Header className="CareerDetail-card-header">
                    How to Apply?
                  </Card.Header>
                  <ListGroup>
                    <ListGroup.Item className="CareerDetail-list-group-item">
                      <span className="CareerDetail-span">—</span>Lorem Ipsum
                    </ListGroup.Item>
                    <ListGroup.Item className="CareerDetail-list-group-item">
                      <span className="CareerDetail-span">—</span>Lorem Ipsum
                    </ListGroup.Item>
                    <ListGroup.Item className="CareerDetail-list-group-item">
                      <span className="CareerDetail-span">—</span>Lorem Ipsum
                    </ListGroup.Item>
                    <ListGroup.Item className="CareerDetail-list-group-item">
                      <span className="CareerDetail-span">—</span>Lorem Ipsum
                    </ListGroup.Item>
                    <ListGroup.Item className="CareerDetail-list-group-item">
                      <span className="CareerDetail-span">—</span>Lorem Ipsum
                    </ListGroup.Item>
                  </ListGroup>
                </Card.Body>
              </Card>
            </Row>
            <Row>
              <Card className="CareerDetail-beige-background-card CareerDetail-Card">
                <Card.Body>
                  <Card.Header className="CareerDetail-card-header">
                    Frequently Asked Questions
                  </Card.Header>
                  <Accordion>
                    <Accordion.Item
                      eventKey="0"
                      className="CareerDetail-accordion-item"
                    >
                      <Accordion.Header>
                        When the announcements?
                      </Accordion.Header>
                      <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item
                      eventKey="1"
                      className="CareerDetail-accordion-item"
                    >
                      <Accordion.Header>
                        Can I apply after rejection?
                      </Accordion.Header>
                      <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item
                      eventKey="2"
                      className="CareerDetail-accordion-item"
                    >
                      <Accordion.Header>Where to interview?</Accordion.Header>
                      <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </Card.Body>
              </Card>
            </Row>
            <Row>
              <Card className="CareerDetail-beige-background-card CareerDetail-Card">
                <Card.Body className="CareerDetial-Card-Body">
                  <Card.Text className="CareerDetail-fa">
                    <FaFileInvoice />
                  </Card.Text>
                  <Card.Title>Send us your C.V.</Card.Title>
                  <Card.Text>
                    Do you want to work with us? Please, send your CV to
                    domain123@gmail.com
                  </Card.Text>
                  <Card.Text>-- OR --</Card.Text>
                  <Button className="CareerDetail-Button">Contact Us</Button>
                </Card.Body>
              </Card>
            </Row>
          </Col>
          <Col sm={12} md={6} className="CareerDetail-Colum">
            <Row>
              <Card className="CareerDetail-Card">
                <Card.Body className="CareerDetail-Card-Body">
                  <Row className="CareerDetial-Right-Row">
                    <Col className="CareerDetail-Right-Colum">
                      <Card.Text className="CareerDetial-Right-Row-Row">
                        <p>Post:</p>
                        <p>Teacher</p>
                      </Card.Text>
                    </Col>
                    <Col className="CareerDetail-Right-Colum">
                      <Card.Text>
                        <p>Time:</p>
                        <p>Full Time</p>
                      </Card.Text>
                    </Col>
                    <Col className="CareerDetail-Right-Colum">
                      <Card.Text>
                        <p>Salary:</p>
                        <p>Negotiable</p>
                      </Card.Text>
                    </Col>
                    <Col className="CareerDetail-Right-Colum">
                      <Card.Text>
                        <p>No. of Vacancy:</p>
                        <p>8</p>
                      </Card.Text>
                    </Col>
                  </Row>
                </Card.Body>
                <Row>
                  <Card.Img src={Image1}></Card.Img>{" "}
                </Row>
              </Card>
            </Row>
            <Row>
              <Tabs>
                <Tab eventKey="description" title="Job Description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Tab>
                <Tab eventKey="experience" title="Experience & Overview">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Tab>
                <Tab eventKey="requirement" title="Requirement">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Tab>
              </Tabs>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default CareerDetail;
