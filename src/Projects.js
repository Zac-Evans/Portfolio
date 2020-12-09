import React from "react";
import { Container, Row, Col, Image, Nav } from "react-bootstrap";
import DateDecider from "./DateDecider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Fakeazon from "./Fakeazon";
import SimplyBudget from "./SimplyBudget";

import { Button } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const Projects = () => {
  const classes = useStyles();
  const [openFakeazon, setOpenFakeazon] = React.useState(false);
  const [openSimplyBudget, setOpenSimplyBudget] = React.useState(false);
  const [openDateDecider, setOpenDateDecider] = React.useState(false);

  const handleOpenFakeazon = () => {
    setOpenFakeazon(true);
  };
  const handleOpenSimplyBudget = () => {
    setOpenSimplyBudget(true);
  };
  const handleOpenDateDecider = () => {
    setOpenDateDecider(true);
  };

  const handleClose = () => {
    setOpenFakeazon(false);
    setOpenSimplyBudget(false);
    setOpenDateDecider(false);
  };

  return (
    <Container fluid className="text-center">
      <Row>
        <Col className="p-0 col-12 col-md-4">
          <Fakeazon />
          <Row className=" d-flex justify-content-center">
            <Button
              variant="contained"
              color="primary"
              className="m-2"
              onClick={handleOpenFakeazon}
            >
              <b>More Info</b>
            </Button>

            <Button
              color="primary"
              elevation={24}
              className="m-2"
              variant="contained"
              href="https://github.com/Zac-Evans/Fakeazon"
              target="_blank"
            >
              <b>
                <FontAwesomeIcon
                  icon={faGithub}
                  className="mr-2 p-0"
                  style={{ color: "white", fontSize: "16px" }}
                />
                GitHub
              </b>
            </Button>
          </Row>
        </Col>

        <Col className="p-0 col-12 col-md-4">
          <SimplyBudget />
          <Row className=" d-flex justify-content-center">
            <Button
              variant="contained"
              color="primary"
              className="m-2"
              onClick={handleOpenSimplyBudget}
            >
              <b>More Info</b>
            </Button>

            <Button
              color="primary"
              elevation={24}
              className="m-2"
              variant="contained"
              href="https://github.com/Zac-Evans/Simply-Budget"
              target="_blank"
            >
              <b>
                <FontAwesomeIcon
                  icon={faGithub}
                  className="mr-2 p-0"
                  style={{ color: "white", fontSize: "16px" }}
                />
                GitHub
              </b>
            </Button>
          </Row>
        </Col>

        <Col className="p-0 col-12 col-md-4">
          <DateDecider />
          <Row className=" d-flex justify-content-center">
            <Button
              variant="contained"
              color="primary"
              className="m-2"
              onClick={handleOpenDateDecider}
            >
              <b>More Info</b>
            </Button>

            <Button
              color="primary"
              elevation={24}
              className="m-2"
              variant="contained"
              href="https://github.com/Zac-Evans/Date-Decider"
              target="_blank"
            >
              <b>
                <FontAwesomeIcon
                  icon={faGithub}
                  className="mr-2 p-0"
                  style={{ color: "white", fontSize: "16px" }}
                  href=""
                />
                GitHub
              </b>
            </Button>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col>
          <Modal
            aria-labelledby="spring-modal-title"
            aria-describedby="spring-modal-description"
            className={classes.modal}
            open={openFakeazon}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
          >
            <div className={classes.paper}>Fakeazon</div>
          </Modal>
        </Col>
        <Col>
          <Modal
            aria-labelledby="spring-modal-title"
            aria-describedby="spring-modal-description"
            className={classes.modal}
            open={openSimplyBudget}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
          >
            <div className={classes.paper}>Simply Budget</div>
          </Modal>
        </Col>
        <Col>
          <Modal
            aria-labelledby="spring-modal-title"
            aria-describedby="spring-modal-description"
            className={classes.modal}
            open={openDateDecider}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
          >
            <div className={classes.paper}>Date Decider</div>
          </Modal>
        </Col>
      </Row>
    </Container>
  );

  {
    /* <Container>
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
        </Container> */
  }
};

export default Projects;
