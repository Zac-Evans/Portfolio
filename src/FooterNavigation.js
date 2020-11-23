import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

class FooterNavigation extends Component {
  render() {
    return (
      <Navbar className="fixed-bottom" style={{ backgroundColor: "#000000" }}>
        <div className="col-12 text-center mx-auto">
          <Nav className="justify-content-center">
            <FontAwesomeIcon
              icon={faHome}
              className="m-2"
              style={{ color: "white", fontSize: "50px" }}
            />
            <FontAwesomeIcon
              icon={faGithub}
              className="m-2"
              style={{ color: "white", fontSize: "50px" }}
            />
          </Nav>
        </div>
      </Navbar>
    );
  }
}

export default FooterNavigation;
