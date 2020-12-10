import React from "react";
import { Container, Row, Col, Image, Nav } from "react-bootstrap";
import DateDecider from "./DateDecider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Fakeazon from "./Fakeazon";
import SimplyBudget from "./SimplyBudget";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CardHeader from "@material-ui/core/CardHeader";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import fakeazonLogo from "./img/fakeazon-logo-dark.png";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import { faMicrochip, faLightbulb } from "@fortawesome/free-solid-svg-icons";

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
    maxWidth: "800px",
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
            <div className={classes.paper}>
              {" "}
              <Card
                className="m-4"
                style={{
                  backgroundColor: "rgb(229, 229, 229, .5)",
                  height: "90%",
                }}
              >
                <CardHeader
                  avatar={
                    <Avatar aria-label="recipe" className={classes.avatar}>
                      <FontAwesomeIcon
                        icon={faMicrochip}
                        className="text-dark"
                      />
                    </Avatar>
                  }
                  action={
                    <IconButton aria-label="settings">
                      <MoreVertIcon />
                    </IconButton>
                  }
                  title={<h2>Tech Stack</h2>}
                  subheader=""
                />
                <CardActionArea>
                  <CardContent>
                    <Row>
                      <Col>
                        <h4>Frontend</h4>
                        <ul className="">
                          <li>
                            <h6>React</h6>
                          </li>
                          <li>
                            <h6>CSS</h6>
                          </li>
                          <li>
                            <h6>HTML</h6>
                          </li>
                          <li>
                            <h6>Bootstrap</h6>
                          </li>
                          <li>
                            <h6>Material-UI</h6>
                          </li>
                          <li>
                            <h6>jQuery</h6>
                          </li>
                        </ul>
                      </Col>
                      <Col>
                        <h4>Backend</h4>
                        <ul>
                          <li>
                            <h6>NodeJS</h6>
                          </li>
                          <li>
                            <h6>Express</h6>
                          </li>
                          <li>
                            <h6>PostgresQL</h6>
                          </li>
                          <li>
                            <h6>Sequelize</h6>
                          </li>
                          <li>
                            <h6>Bcrypt</h6>
                          </li>
                        </ul>
                      </Col>
                    </Row>
                    <Row>
                      <a
                        href="https://github.com/Zac-Evans/simply-budget"
                        className="mx-auto m-3"
                      >
                        <h4>View on GitHub</h4>
                      </a>
                    </Row>
                  </CardContent>
                </CardActionArea>
              </Card>
            </div>
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
            <div className={classes.paper}>
              <div>
                <div className="d-flex justify-content-between">
                  <h4>
                    Concept{" "}
                    <FontAwesomeIcon icon={faLightbulb} className="mr-2 p-0" />
                  </h4>
                  <h6 className="text-secondary p-1 btn" onClick={handleClose}>
                    <b>←Back</b>
                  </h6>
                </div>
                <hr />
                <p>
                  <b>Simply Budget</b> is a minimal and user-driven budgeting
                  app that prioritizes not over-complicating the process of
                  making and keeping a budget. This project was created to
                  fufill the capstone requirements for the DigitalCrafts
                  Full-Stack Bootcamp. It's development is ongoing and more
                  functionality plans to be added down the road.
                </p>
              </div>
              <div className="video-responsive">
                <iframe
                  width="420"
                  height="315"
                  src="https://www.youtube.com/embed/cRbwRi5D52k"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <br />
              <div>
                <h4 className="text-center">
                  Tech Stack{" "}
                  <FontAwesomeIcon icon={faMicrochip} className="text-dark" />
                </h4>
                <hr />
                <Row className="d-flex justify-content-center">
                  <div className="mr-4">
                    <h6>Frontend</h6>
                    <ul className="">
                      <li>
                        <p className="m-1">
                          <b>React</b>
                        </p>
                      </li>
                      <li>
                        <p className="m-1">
                          <b>CSS</b>
                        </p>
                      </li>
                      <li>
                        <p className="m-1">
                          <b>HTML</b>
                        </p>
                      </li>
                      <li>
                        <p className="m-1">
                          <b>Bootstrap</b>
                        </p>
                      </li>
                      <li>
                        <p className="m-1">
                          <b>Material-UI</b>
                        </p>
                      </li>
                      <li>
                        <p className="m-1">
                          <b>jQuery</b>
                        </p>
                      </li>
                    </ul>
                  </div>
                  <div className="ml-4">
                    <h6>Backend</h6>
                    <ul>
                      <li>
                        <p className="m-1">
                          <b>Node.js</b>
                        </p>
                      </li>
                      <li>
                        <p className="m-1">
                          <b>Express</b>
                        </p>
                      </li>
                      <li>
                        <p className="m-1">
                          <b>PostgreSQL</b>
                        </p>
                      </li>
                      <li>
                        <p className="m-1">
                          <b>Sequelize</b>
                        </p>
                      </li>
                      <li>
                        <p className="m-1">
                          <b>BCrypt</b>
                        </p>
                      </li>
                    </ul>
                  </div>
                </Row>
              </div>
            </div>
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
            <div className={classes.paper}>
              <Card
                className="m-4"
                style={{
                  backgroundColor: "rgb(229, 229, 229, .5)",
                  height: "90%",
                }}
              >
                <CardHeader
                  avatar={
                    <Avatar aria-label="recipe" className={classes.avatar}>
                      <FontAwesomeIcon
                        icon={faMicrochip}
                        className="text-dark"
                      />
                    </Avatar>
                  }
                  action={
                    <IconButton aria-label="settings">
                      <MoreVertIcon />
                    </IconButton>
                  }
                  title={<h2>Tech Stack</h2>}
                  subheader=""
                />
                <CardActionArea>
                  <CardContent>
                    <Row>
                      <Col>
                        <h4>Frontend</h4>
                        <ul className="">
                          <li>
                            <h6>React</h6>
                          </li>
                          <li>
                            <h6>CSS</h6>
                          </li>
                          <li>
                            <h6>HTML</h6>
                          </li>
                          <li>
                            <h6>Bootstrap</h6>
                          </li>
                          <li>
                            <h6>Material-UI</h6>
                          </li>
                          <li>
                            <h6>jQuery</h6>
                          </li>
                        </ul>
                      </Col>
                      <Col>
                        <h4>Backend</h4>
                        <ul>
                          <li>
                            <h6>NodeJS</h6>
                          </li>
                          <li>
                            <h6>Express</h6>
                          </li>
                          <li>
                            <h6>PostgresQL</h6>
                          </li>
                          <li>
                            <h6>Sequelize</h6>
                          </li>
                          <li>
                            <h6>Bcrypt</h6>
                          </li>
                        </ul>
                      </Col>
                    </Row>
                    <Row>
                      <a
                        href="https://github.com/Zac-Evans/simply-budget"
                        className="mx-auto m-3"
                      >
                        <h4>View on GitHub</h4>
                      </a>
                    </Row>
                  </CardContent>
                </CardActionArea>
              </Card>
            </div>
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
