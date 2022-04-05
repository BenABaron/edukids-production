import Button from "@restart/ui/esm/Button";
import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import CardHeader from "react-bootstrap/esm/CardHeader";
import Image1 from "../img/adorable-kids-playing-with-constructor-on-floor-in-ZP6VC78.jpg";
import Image2 from "../img/boys-and-girls-dancing-PZNK4D9.jpg";
import Image3 from "../img/cheerful-women-in-printing-office-JQ5K4XE.jpg";
import Image4 from "../img/cute-girl-playing-with-paint-in-art-class-85QTUD9.jpg";
import Image5 from "../img/education-teachers-university-and-schools-concept--JA74V7F.jpg";
import Image6 from "../img/emotion-emoticons-used-by-a-psychologist-during-a--D2BFM6T.jpg";
import Image7 from "../img/happy-educator-hugging-adorable-kids-in-kindergart-CSSFQDV.jpg";
import Image8 from "../img/happy-kids-are-painting-at-home-FSC2Q9C.jpg";
import Image9 from "../img/kindergarten-age-girl-learning-about-the-planets-a-EKX3YDA.jpg";
import Image10 from "../img/mother-or-nursery-teacher-teaches-her-children-to--QK27JT7.jpg";
import Image11 from "../img/painting-together-P9VHLJH.jpg";
import Image12 from "../img/sitting-on-a-carpet-P8BAWTX.jpg";

const Events = () => {
  return (
    <div>
      <div className="Head-Container">
        <h1 className="Head-H1">Events</h1>
      </div>
      <Container>
        <Row className="justify-content-md-center">
          <Col xs lg="4"></Col>
          <Col md="auto">
            <Card className="card text-orange text-center">
              <CardHeader className="ev-header">Games & Events</CardHeader>
            </Card>
          </Col>
          <Col xs lg="4"></Col>
        </Row>

        <Row className="justify-content-md-center">
          <Col xs lg="4"></Col>
          <Col md="auto" className="ev-text-center">
            Our Recent Activities
          </Col>
          <Col xs lg="4"></Col>
        </Row>

        <Row className="justify-content-md-center">
          <Col xs lg="4"></Col>
          <Col md="auto" className="text-center">
            <p>
              Dave found joy in the daily routine of life. He awoke at the same
              time, ate the same breakfast and drove the same commute. He worked
              at a job that never seemed to change and he got home at 6 pm sharp
              every night. It was who he had been for the last ten years and he
              had no idea that was all about to change.
            </p>
          </Col>
          <Col xs lg="4"></Col>
        </Row>

        
        {/* Gallery */}
        <Row>
          <Col className="lg-4 md-12 mb-4 mb-lg-0">
            <img
              src={Image1}
              className="w-100 shadow-1-strong rounded mb-4"
              alt="indoor"
            />

            <img
              src={Image2}
              className="w-100 shadow-1-strong rounded mb-4"
              alt="outdoor"
            />

            <img
              src={Image9}
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
              src={Image3}
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
              src={Image10}
              className="w-100 shadow-1-strong rounded mb-4"
              alt="indoor"
            />
            <img
              src={Image11}
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
    </div>
  );
};

export default Events;
