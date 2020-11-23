import React, { useEffect } from "react";
import { Nav, Navbar, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "react-sticky-header/styles.css";
import StickyHeader from "react-sticky-header";

const SiteNavbar = () => {
  const navLinks = ["Projects", "About", "Skills", "Contact"];

  return (
    <div>
      <Row className="d-flex justify-content-center text-center">
        <Link to="/Home">
          <h1 className="pl-2 m-0">Zac Evans</h1>
        </Link>
      </Row>
      <Row className="d-flex justify-content-center text-center">
        <p className="italic">Full-Stack Developer</p>
      </Row>
      <Row className="d-flex justify-content-center text-center">
        <Navbar
          expand="lg"
          className="mb-4 navbar-dark"
          style={{
            backgroundColor: "#FFFFFF00",
          }}
        >
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <div>
              <Nav>
                {navLinks.map((nav, i) => {
                  return (
                    <Link key={i} className="p-4 text-light" to={nav}>
                      <h5>{nav}</h5>
                    </Link>
                  );
                })}
              </Nav>
            </div>
          </Navbar.Collapse>
        </Navbar>
      </Row>
    </div>
  );
};

export default SiteNavbar;
