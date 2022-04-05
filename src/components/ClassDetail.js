import React from "react";
import { Container, Row, Col, Image, Card, CardGroup } from "react-bootstrap";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaGoogle,
  FaYoutube,
  FaCheckCircle,
} from "react-icons/fa";
import ClassDetailImage1 from "../img/adorable-kids-playing-with-constructor-on-floor-in-ZP6VC78.jpg";
import ClassDetailImage2 from "../img/cute-girl-playing-with-paint-in-art-class-85QTUD9.jpg";
import ClassDetailImage3 from "../img/sitting-on-a-carpet-P8BAWTX.jpg";
import ClassDetailImage4 from "../img/painting-together-P9VHLJH.jpg";
import ClassDetailImage5 from "../img/tutor-and-multicultural-kids-playing-with-construc-M27G27Q.jpg";
function ClassDetail() {
  return (
    <div>
      <div className="Head-Container">
        <h1 className="Head-H1">Class Detail</h1>
      </div>
      <Container fluid className="ClassDetail-container">
        <Row className="justify-content-md-center">
          <Col xs={12} md={7}>
            <h2 className="ClassDetail-h2">Class Description</h2>
            <p className="ClassDetail-p">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium fugiat cumque nemo eaque deleniti perferendis vel vero
              in ut assumenda!
            </p>
            <Card>
              <Image
                className="classDetail-Description-image"
                src={ClassDetailImage5}
                rounded
              />
            </Card>
          </Col>
          <Col md="auto">
            {/* ***information card*** */}

            <Card className="ClassDetail-information-card-area">
              <Card.Body className="ClassDetail-information-card">
                <button className="classDetail-information-button">
                  Information
                </button>
                <br />
                <p className="classDetail-information-paragraph">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Doloremque ab et ex repellendus,
                </p>
                <br />
                <p className="classDetail-information-title">Category:</p>
                <p className="classDetail-information-item">Creative Class</p>
                <p className="classDetail-information-title">Age Group:</p>
                <p className="classDetail-information-item">2 - 5 Years Old</p>
                <p className="classDetail-information-title">Class size:</p>
                <p className="classDetail-information-item">
                  20 kids in one class
                </p>
                <p className="classDetail-information-title">Fees Cost:</p>
                <p className="classDetail-information-item">$25/Mon</p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col xs={12} md={7}>
            <h4 className="ClassDetail-h4">Class Curriculum</h4>
            <p className="ClassDetail-p">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti
              accusantium voluptate maxime obcaecati? Impedit maxime dolores
              vero quas? Blanditiis cumque non ullam recusandae fugiat neque
              error totam expedita, magni ea!
            </p>
            <ul className="ClassDetail-list-style">
              <li>
                <span style={{ margin: "10px", color: "rgb(250, 100, 46)" }}>
                  <FaCheckCircle />
                </span>
                Lorem ipsum dolor sit amet consectetur.
              </li>
              <li>
                <span style={{ margin: "10px", color: "rgb(250, 100, 46)" }}>
                  <FaCheckCircle />
                </span>
                Lorem ipsum dolor sit amet consectetur adipisicing.
              </li>
              <li>
                <span style={{ margin: "10px", color: "rgb(250, 100, 46)" }}>
                  <FaCheckCircle />
                </span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </li>
              <li>
                <span style={{ margin: "10px", color: "rgb(250, 100, 46)" }}>
                  <FaCheckCircle />
                </span>
                Lorem ipsum dolor sit amet consectetur.
              </li>
            </ul>

            <h4 className="ClassDetail-h4">Class Activities Gallery:</h4>
            {/* ****gallery goes here**** */}
            <Col xs={8} md={10}>
              <CardGroup>
                <Card>
                  <Image
                    className="classDetail-Activities-gallery-photo"
                    src={ClassDetailImage1}
                    rounded
                  />
                </Card>
                <Card>
                  <Image
                    className="classDetail-Activities-gallery-photo"
                    src={ClassDetailImage2}
                    rounded
                  />
                </Card>
                <Card>
                  <Image
                    className="classDetail-Activities-gallery-photo"
                    src={ClassDetailImage3}
                    rounded
                  />
                </Card>
                <Card>
                  <Image
                    className="classDetail-Activities-gallery-photo"
                    src={ClassDetailImage4}
                    rounded
                  />
                </Card>
              </CardGroup>
            </Col>
          </Col>
          <Col md="auto">
            {/* ***Teacher card *** */}

            <Card className="ClassDetail-teacher-card-area">
              <Card.Body className="ClassDetail-teacher-card">
                <Card.Img
                  variant="top"
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dGVhY2hlciUyMGhlYWRzaG90fGVufDB8fDB8fA%3D%3D/15x15"
                  className="ClassDetail-teacher-img"
                />
                <Card.Text className="ClassDetail-teacher-card-text">
                  <b>Jane Deo</b>
                  <p className="ClassDetail-teacher-small-text">Teacher</p>
                  <p className="ClassDetail-teacher-small-text">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Provident neque libero ipsam corporis distinctio atque fuga
                    mollitia eveniet.
                  </p>
                </Card.Text>
                <div className="ClassDetail-social-container">
                  <a className="ClassDetail-social" href="">
                    <FaFacebook />
                  </a>
                  <a className="ClassDetail-social" href="">
                    <FaTwitter />
                  </a>
                  <a className="ClassDetail-social" href="">
                    <FaGoogle />
                  </a>
                  <a className="ClassDetail-social" href="">
                    <FaInstagram />
                  </a>
                  <a className="ClassDetail-social" href="">
                    <FaYoutube />
                  </a>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ClassDetail;
