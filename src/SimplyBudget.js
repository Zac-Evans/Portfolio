import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import simplyBudgetLogo from "./img/simply-budget-logo.png";
import CardHeader from "@material-ui/core/CardHeader";
import dateLogo from "./img/date-logo.png";
import fakeazonLogo from "./img/fakeazon-logo-dark.png";
import { Image, Row, Col } from "react-bootstrap";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import { faMicrochip } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fadeIn, slideInRight } from "react-animations";
import Radium, { StyleRoot } from "radium";
import { useSpring, animated } from "react-spring";
import Piggy from "./img/piggy.jpg";

const useStyles = makeStyles({
  root: {
    maxWidth: 500,
    backgroundColor: "#E5E5E5",
    marginDown: "auto",
    marginRight: "auto",
  },
});

const styles = {
  fadeIn: {
    animation: "x 2s",
    animationName: Radium.keyframes(fadeIn, "fadeIn"),
  },
};
const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 20,
  (x - window.innerWidth / 3) / 20,
  0.9,
];
const trans = (x, y, s) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

export default function SimplyBudget() {
  const classes = useStyles();
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 0.9],
    config: { mass: 10, tension: 100, friction: 90 },
  }));
  return (
    <Row>
      <Col className="col-12 col-lg-6">
        <animated.div
          class="cardProject"
          onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
          onMouseLeave={() => set({ xys: [0, 0, 0.9] })}
          style={{
            transform: props.xys.interpolate(trans),
            backgroundImage: `url(${Piggy})`,
          }}
        >
          <StyleRoot>
            <div style={styles.fadeIn}>
              <CardActionArea
                className="m-0 p-0"
                href="https://simplybudget.co"
                target="_blank"
              >
                <Image fluid src={simplyBudgetLogo} />
                <CardContent>
                  <Typography
                    variant="body2"
                    style={{ color: "black", fontSize: "30px" }}
                    component="p"
                  >
                    {<b>Make your budget Simply.</b>}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions
                style={{
                  backgroundColor: "#000000",
                }}
                className="d-flex justify-content-around"
              >
                <Button size="small" color="primary">
                  <h6>
                    <b>Visit</b>
                  </h6>
                </Button>
              </CardActions>
            </div>
          </StyleRoot>
        </animated.div>
      </Col>
      <Col className="col-12 col-lg-6">
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
                <FontAwesomeIcon icon={faMicrochip} className="text-dark" />
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
      </Col>
    </Row>
  );
}
