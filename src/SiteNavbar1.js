import React, { useEffect, useState } from "react";
import { Nav, Navbar, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "react-sticky-header/styles.css";
import StickyHeader from "react-sticky-header";
import Sidebar from "react-sidebar";
import { render } from "react-dom";
import { slide as Menu } from "react-burger-menu";

class SiteNavbar extends React.Component {
  showSettings(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <Menu>
          <a id="home" className="menu-item" href="/">
            Home
          </a>
          <a id="about" className="menu-item" href="/about">
            About
          </a>
          <a id="contact" className="menu-item" href="/contact">
            Contact
          </a>
          <a onClick={this.showSettings} className="menu-item--small" href="">
            Settings
          </a>
        </Menu>
        <Row className="d-flex justify-content-center text-center">
          <Link to="/Home">
            <h1 className="pl-2 m-0">Zac Evans</h1>
          </Link>
        </Row>
        <Row className="d-flex justify-content-center text-center">
          <p className="italic">Full-Stack Developer</p>
        </Row>
      </div>
    );
  }
}

export default SiteNavbar;
