import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faMusic } from "@fortawesome/free-solid-svg-icons";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

class FooterNavigation extends Component {
  render() {
    return (
      <Navbar
        style={{ backgroundColor: "rgb(0,0,0,0)", position: "relative" }}
        className="pt-4 mt-4"
      >
        <div className="col-12 text-center mx-auto">
          <Nav className="justify-content-center">
            <a href="https://github.com/Zac-Evans" target="_blank">
              <FontAwesomeIcon
                icon={faGithub}
                className="m-2"
                style={{ color: "white", fontSize: "50px" }}
              />
            </a>
            <a
              href="https://www.linkedin.com/in/zacevanscoding/"
              target="_blank"
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                className="m-2"
                style={{ color: "white", fontSize: "50px" }}
              />
            </a>
            <a href="/contact">
              <FontAwesomeIcon
                icon={faEnvelope}
                className="m-2"
                style={{ color: "white", fontSize: "50px" }}
              />
            </a>
            <a href="https://www.zacevansmusic.com" target="_blank">
              <FontAwesomeIcon
                icon={faMusic}
                className="m-2"
                style={{ color: "white", fontSize: "50px" }}
              />
            </a>
          </Nav>
        </div>
      </Navbar>
    );
  }
}

export default FooterNavigation;
