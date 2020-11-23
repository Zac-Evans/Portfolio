import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import FooterNavigation from "./FooterNavigation";
import SiteNavbar from "./SiteNavbar";
import Test from "./Projects";

class HomeContainer extends Component {
  render() {
    return (
      <section className="intro">
        <div className="content">
          <Container className="p-4">
            <br />
            <SiteNavbar />
          </Container>
        </div>
      </section>
    );
  }
}

export default HomeContainer;
