import React, { Component } from "react";
import { Col, Row, Image } from "react-bootstrap";
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

class Skills extends Component {
  render() {
    return (
      <div>
        <SiteNavbar />
        <Row className="align-items-center h-100">
          <Col className="col-xl-0 col-xl-1" />

          <Col className="col-12 col-xl-3 p-4">
            <h2>My Skills</h2>
            <p>
              With my experience, I bring a wide variety of skills to help you
              acheive your goals and create a product that works for you.
            </p>
          </Col>
          <Col className="col-12 col-xl-8 ">
            <Row className="p-4 d-flex" style={{ maxWidth: "1500px" }}>
              <Col className="m-4">
                <Image src={Html5Logo} height="200px" />
              </Col>
              <Col className="m-4 ">
                <Image src={CSSLogo} height="200px" />
              </Col>
              <Col className="m-4">
                <Image src={JavascriptLogo} height="200px" />
              </Col>
              <Col className="m-4">
                <Image src={JqueryLogo} width="200px" />
              </Col>
              <Col className="m-4">
                <Image src={ExpressNodeLogo} width="200px" />
              </Col>

              <Col className="m-4">
                <Image src={PostgresLogo} width="200px" />
              </Col>
              <Col className="m-4">
                <Image src={SequelizeLogo} width="200px" />
              </Col>
              <Col className="m-4">
                <Image src={BootstrapLogo} width="200px" />
              </Col>
              <Col className="m-4">
                <Image src={MaterialUiLogo} width="200px" />
              </Col>
              <Col className="m-4">
                <Image src={BulmaLogo} width="200px" />
              </Col>
            </Row>
          </Col>
          <Col className="col-0 col-xl-1" />
        </Row>
      </div>
    );
  }
}

export default Skills;
