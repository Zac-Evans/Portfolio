import React, { Component } from "react";
import { Col, Row, Image, Container } from "react-bootstrap";
import { Fade } from "react-awesome-reveal";
import SiteNavbar from "./SiteNavbar";
import { Paper } from "@material-ui/core";
import Headshot from "./img/headshot.jpg";
import BootstrapLogo from "./img/logos/Bootstrap-Logo.png";
import BulmaLogo from "./img/logos/bulma-logo.png";
import CSSLogo from "./img/logos/css3.png";
import ExpressNodeLogo from "./img/logos/express-node-logo.png";
import Html5Logo from "./img/logos/html5.png";
import JavascriptLogo from "./img/logos/JavaScript-Logo.png";
import JqueryLogo from "./img/logos/jquery-logo.png";
import MaterialUiLogo from "./img/logos/material-ui-logo.png";
import PostgresLogo from "./img/logos/postgres-logo.png";
import SequelizeLogo from "./img/logos/sequelize-logo.png";
import { Button } from "@material-ui/core";
import Radium, { StyleRoot } from "radium";

class Skills extends Component {
  render() {
    return (
      <Container fluid>
        <Row className="align-items-center h-100">
          <Col className="col-xl-0 col-xl-1" />

          <Col className="col-12 col-xl-3 p-4 text-center">
            <Fade direction="left" triggerOnce>
              <h2>My Skills</h2>
              <p>
                With my experience, I bring a wide variety of skills to help you
                acheive your goals and create a product that works for you.
              </p>
              <Row className="d-flex justify-content-center">
                <a href="Zac-Evans-Resume.pdf" target="_blank">
                  <Button
                    variant="outlined"
                    color="primary"
                    style={{ width: "200px", height: "80px", fontSize: "20px" }}
                    className="m-2"
                  >
                    View Resume
                  </Button>
                </a>
                <a href="/projects">
                  <Button
                    variant="outlined"
                    color="primary"
                    style={{ width: "200px", height: "80px", fontSize: "20px" }}
                    className="m-2"
                  >
                    See Projects
                  </Button>
                </a>
              </Row>
            </Fade>
          </Col>

          <Col className="col-12 col-xl-8 d-flex justify-content-center">
            <Row
              className="p-4 d-flex justify-content-center"
              style={{ maxWidth: "900px" }}
            >
              <Fade direction="right" triggerOnce>
                <Image src={Html5Logo} className="m-2" height="150px" />
              </Fade>
              <Fade direction="right" triggerOnce>
                <Image src={CSSLogo} className="m-2" height="150px" />
              </Fade>
              <Fade direction="right" triggerOnce>
                <Image src={JavascriptLogo} className="m-2" height="150px" />
              </Fade>
              <Fade direction="right" triggerOnce>
                <Image src={JqueryLogo} className="m-2" width="150px" />
              </Fade>
              <Fade direction="right" triggerOnce>
                <Image src={ExpressNodeLogo} className="m-2" width="150px" />
              </Fade>
              <Fade direction="right" triggerOnce>
                <Image src={PostgresLogo} className="m-2" width="150px" />
              </Fade>
              <Fade direction="right" triggerOnce>
                <Image src={SequelizeLogo} className="m-2" width="150px" />
              </Fade>
              <Fade direction="right" triggerOnce>
                <Image src={BootstrapLogo} className="m-2" width="150px" />
              </Fade>
              <Fade direction="right" triggerOnce>
                <Image src={MaterialUiLogo} className="m-2" width="150px" />
              </Fade>
              <Fade direction="right" triggerOnce>
                <Image src={BulmaLogo} className="m-2" width="150px" />
              </Fade>
            </Row>
          </Col>

          <Col className="col-0 col-xl-1" />
        </Row>
      </Container>
    );
  }
}

export default Skills;
