import React, { Component } from "react";
import Background from "./img/blue-bg.jpg";
import Overlay from "./img/overlay.gif";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/style.default.css";
import Container from "react-bootstrap/Container";
import HomeContainer from "./HomeContainer";
import FooterNavigation from "./FooterNavigation";
import About from "./About";
import Skills from "./Skills";
import Contact from "./Contact";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import Projects from "./Projects";
import SiteNavBar from "./SiteNavbar";

class App extends Component {
  overlayStyle = {
    width: "100%",
    height: "100%",

    backgroundImage: `url(${Overlay})`,
    overflow: "auto",
    backgroundPosition: "center",
  };

  backgroundStyle = {
    width: "100%",
    height: "100%",
    boxShadow: "inset 0 0 0 1000px blue",
    opacity: 0.6,
    overflow: "auto",
    backgroundPosition: "center",
  };
  render() {
    return (
      <div style={this.overlayStyle}>
        <Container
          className="vh-100 intro d-flex flex-column justify-content-between"
          fluid
        >
          <SiteNavBar />

          <Router>
            <Switch>
              <Route exact path="/" component={About} />
              <Route exact path="/Home" component={About} />
              <Route path="/Projects" component={Projects} />
              <Route path="/About" component={About} />
              <Route path="/Skills" component={Skills} />
              <Route path="/Contact" component={Contact} />
            </Switch>
          </Router>
          <FooterNavigation />
        </Container>
      </div>
    );
  }
}

export default App;
