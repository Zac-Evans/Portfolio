import React, { Component } from "react";
import { Col, Row, Image } from "react-bootstrap";
import SiteNavbar from "./SiteNavbar";
import { Paper } from "@material-ui/core";
import Headshot from "./img/headshot.jpg";

class About extends Component {
  render() {
    return (
      <div>
        <SiteNavbar />
        <Row className="align-items-center h-100">
          <Col className="col-0 col-xl-1 " />
          <Col className="col-12 col-xl-3 d-flex justify-content-center">
            <Paper elevation={3}>
              <img src={Headshot} width="300" className="" />
            </Paper>
          </Col>

          <Col className="col-12 col-xl-7 p-4 m-4">
            <h2>About me</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </Col>
          <Col className="col-0 col-xl-1" />
        </Row>
      </div>
    );
  }
}

export default About;
