import React, { Component } from "react";
import SiteNavbar from "./SiteNavbar";
import { Container, Row, Col, Image, Card, Nav, Button } from "react-bootstrap";
import fakeazon from "./img/fakeazon.png";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import DateDecider from "./DateDecider";
import Fakeazon from "./Fakeazon1";
import SimplyBudget from "./SimplyBudget";
import ProjectPlaceHolder from "./ProjectPlaceHolder";

class Projects extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showFakeazonComponent: false,
      showSimplyBudgetComponent: false,
      showDateDeciderComponent: false,
      showPlaceholderComponent: true,
    };
  }

  handleFakeazonClick = () => {
    this.setState({
      showFakeazonComponent: true,
      showSimplyBudgetComponent: false,
      showDateDeciderComponent: false,
      showPlaceholderComponent: false,
    });
  };

  handleSimplyBudgetClick = () => {
    this.setState({
      showFakeazonComponent: false,
      showSimplyBudgetComponent: true,
      showDateDeciderComponent: false,
      showPlaceholderComponent: false,
    });
  };

  handleDateDeciderClick = () => {
    this.setState({
      showFakeazonComponent: false,
      showSimplyBudgetComponent: false,
      showDateDeciderComponent: true,
      showPlaceholderComponent: false,
    });
  };

  render() {
    return (
      <div className="text-center pt-4">
        <Container>
          <Card
            style={{
              backgroundColor: "rgb(20, 33, 61, .5)",
              marginBottom: "200px",
            }}
          >
            <Card.Header style={{ backgroundColor: "#FCA311" }}>
              <Nav variant="tabs" defaultActiveKey="#simply-budget">
                <Col className="col-12 col-md-4 p-0 m-0">
                  <Nav.Item>
                    <Nav.Link
                      className="ml-4 mr-4"
                      href="#fakeazon"
                      default
                      onClick={this.handleFakeazonClick}
                    >
                      <h5>Fake-A-Zon</h5>
                    </Nav.Link>
                  </Nav.Item>
                </Col>
                <Col className="col-12 col-md-4 m-0 p-0">
                  <Nav.Item>
                    <Nav.Link
                      className="ml-4 mr-4"
                      href="#simply-budget"
                      onClick={this.handleSimplyBudgetClick}
                    >
                      <h5>Simply Budget</h5>
                    </Nav.Link>
                  </Nav.Item>
                </Col>
                <Col className="col-12 col-md-4 m-0 p-0">
                  <Nav.Item>
                    <Nav.Link
                      className="ml-4 mr-4"
                      href="#date-decider"
                      onClick={this.handleDateDeciderClick}
                    >
                      <h5>Date Decider</h5>
                    </Nav.Link>
                  </Nav.Item>
                </Col>
              </Nav>
            </Card.Header>
            <Card.Body style={{ minHeight: "485px" }} className="text-dark">
              {this.state.showPlaceholderComponent ? <SimplyBudget /> : null}
              {this.state.showFakeazonComponent ? <Fakeazon /> : null}
              {this.state.showSimplyBudgetComponent ? <SimplyBudget /> : null}
              {this.state.showDateDeciderComponent ? <DateDecider /> : null}
            </Card.Body>
          </Card>
        </Container>
      </div>
    );
  }
}

export default Projects;
