import React from "react";
import { Card, Row, Col, Container, Form, Button } from "react-bootstrap";
import Image1 from "../img/happy-little-girl-in-protective-hat-riding-her-bik-W9757CG.jpg"
import Image2 from "../img/adorable-kids-playing-with-constructor-on-floor-in-ZP6VC78.jpg"
import Image3 from "../img/kindergarten-age-girl-learning-about-the-planets-a-EKX3YDA.jpg"
import Image4 from "../img/mother-or-nursery-teacher-teaches-her-children-to--QK27JT7.jpg"
import Image5 from "../img/painting-together-P9VHLJH.jpg"
import Image6 from "../img/sitting-on-a-carpet-P8BAWTX.jpg"


function Classes(props) {
  return (
    <div>
      <div className="Head-Container">
        <h1 className="Head-H1">Classes</h1>
      </div>
      <Container>
        <Row className="Classes-Row-1">
          <Col className="Classes-Col">
            <Card
              className="Classes-Card"
              style={{ backgroundColor: "rgb(254,93,55)" }}
            >
              <Card.Img
                className="Classes-Card-Img"
                variant="top"
                src={Image1}
              />
              <Card.Body className="Classes-Card-Body">
                <Card.Title>Physical Class</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Row>
                  <Col className="Classes-Card-Col">
                    <Card.Text>Age 2-5 Years</Card.Text>
                  </Col>
                  <Col className="Classes-Card-Col">
                    <Card.Text>Size 18 Seats</Card.Text>
                  </Col>
                  <Col>
                    <Card.Text>Price $22/m</Card.Text>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>

          <Col className="Classes-Col">
            <Card
              className="Classes-Card"
              style={{ backgroundColor: "rgb(234,170,20)" }}
            >
              <Card.Img
                className="Classes-Card-Img"
                variant="top"
                src={Image2}
              />
              <Card.Body className="Classes-Card-Body">
                <Card.Title>Creative Class</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Row>
                  <Col className="Classes-Card-Col">
                    <Card.Text>Age 2-5 Years</Card.Text>
                  </Col>
                  <Col className="Classes-Card-Col">
                    <Card.Text>Size 18 Seats</Card.Text>
                  </Col>
                  <Col>
                    <Card.Text>Price $22/m</Card.Text>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>

          <Col className="Classes-Col">
            <Card
              className="Classes-Card"
              style={{ backgroundColor: "rgb(4,185,146)" }}
            >
              <Card.Img
                className="Classes-Card-Img"
                variant="top"
                src={Image3}/>
              <Card.Body className="Classes-Card-Body">
                <Card.Title>Learning Class</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Row>
                  <Col className="Classes-Card-Col">
                    <Card.Text>Age 2-5 Years</Card.Text>
                  </Col>
                  <Col className="Classes-Card-Col">
                    <Card.Text>Size 18 Seats</Card.Text>
                  </Col>
                  <Col>
                    <Card.Text>Price $22/m</Card.Text>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="Classes-Row-2">
          <Col className="Classes-Col">
            <Card
              className="Classes-Card"
              style={{ backgroundColor: "rgb(254,93,55)" }}
            >
              <Card.Img
                className="Classes-Card-Img"
                variant="top"
                src={Image4}
              />
              <Card.Body className="Classes-Card-Body">
                <Card.Title>Game Session</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Row>
                  <Col className="Classes-Card-Col">
                    <Card.Text>Age 2-5 Years</Card.Text>
                  </Col>
                  <Col className="Classes-Card-Col">
                    <Card.Text>Size 18 Seats</Card.Text>
                  </Col>
                  <Col>
                    <Card.Text>Price $22/m</Card.Text>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>

          <Col className="Classes-Col">
            <Card
              className="Classes-Card"
              style={{ backgroundColor: "rgb(234,170,20)" }}
            >
              <Card.Img
                className="Classes-Card-Img"
                variant="top"
                src={Image5}/>
              <Card.Body className="Classes-Card-Body">
                <Card.Title>Painting</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Row>
                  <Col className="Classes-Card-Col">
                    <Card.Text>Age 2-5 Years</Card.Text>
                  </Col>
                  <Col className="Classes-Card-Col">
                    <Card.Text>Size 18 Seats</Card.Text>
                  </Col>
                  <Col>
                    <Card.Text>Price $22/m</Card.Text>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>

          <Col className="Classes-Col">
            <Card
              className="Classes-Card"
              style={{ backgroundColor: "rgb(4,185,146)" }}
            >
              <Card.Img
                className="Classes-Card-Img"
                variant="top"
                src={Image6}/>
              <Card.Body className="Classes-Card-Body">
                <Card.Title>Musical</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Row>
                  <Col className="Classes-Card-Col">
                    <Card.Text>Age 2-5 Years</Card.Text>
                  </Col>
                  <Col className="Classes-Card-Col">
                    <Card.Text>Size 18 Seats</Card.Text>
                  </Col>
                  <Col>
                    <Card.Text>Price $22/m</Card.Text>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="Classes-Row-3">
          <Col>
            <Card.Body>
              <Card.Title className="Classes-Body-Title ">
                Get Online Class For Free
              </Card.Title>
              <Card.Text className="Classes-Body-Text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit
                amet porttitor eget dolor morbi non. At imperdiet dui accumsan
                sit amet nulla facilisi.Lorem ipsum dolor sit amet.
              </Card.Text>
            </Card.Body>
          </Col>
          <Col className="Classes-Col-Form">
            <Form className="Classes-Form">
              <h4> Register Now</h4>
              <h8>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </h8>
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Control type="name" placeholder="Name" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicMsg">
                <Form.Control
                  as="textarea"
                  rows={4}
                  type="msg"
                  placeholder="Message"
                />
              </Form.Group>
              <Button
                className="Classes-Form-Button"
                variant="primary"
                type="submit"
              >
                Submit Now
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Classes;
