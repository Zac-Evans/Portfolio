import React, { Component } from "react";
import { Col, Row, Image } from "react-bootstrap";
import SiteNavbar from "./SiteNavbar";
import { Paper } from "@material-ui/core";
import Headshot from "./img/headshot.gif";

class About extends Component {
  render() {
    return (
      <div>
        <SiteNavbar />
        <Row className="d-flex align-self-center">
          <Col xl="2" lg="2" md="0" sm="0" xs="0" />
          <Col
            className="d-flex justify-content-center"
            xl="3"
            lg="3"
            md="12"
            sm="12"
            xs="12"
          >
            <img
              src={Headshot}
              width="300"
              height="300"
              className="d-flex align-self-center"
            />
          </Col>

          <Col className="p-4 m-4 w-100" xl="5" lg="5" md="12" sm="12" xs="12">
            <h2>About me</h2>
            <p>
              With a professional background in music, I have always been
              dedicated towards the idea of applying technical ability towards
              creative endeavors. As more of our lives take place on the web, I
              have discovered a passion for building and designing enjoyable and
              engaging spaces for people online. The combination of design,
              technology, ingenuity and creativity is what initial drew me to
              the field of software and web development, and I aim to bring that
              marriage of ideas to life in each project work on.
            </p>
          </Col>
          <Col xl="2" lg="2" md="0" sm="0" xs="0" />
        </Row>
      </div>
    );
  }
}

export default About;
