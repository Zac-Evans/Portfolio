import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CardHeader from "@material-ui/core/CardHeader";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import fakeazonLogo from "./img/fakeazon-logo-dark.png";
import { Image, Row, Col } from "react-bootstrap";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import { faMicrochip } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fadeIn, slideInRight } from "react-animations";
import Radium, { StyleRoot } from "radium";
import { useSpring, animated as a } from "react-spring";
import ShopBg from "./img/shop-bg.jpg";

const useStyles = makeStyles({
  root: {
    maxWidth: 500,
    backgroundColor: "#E5E5E5",
    marginLeft: "auto",
    marginRight: "auto",
  },
});

export default function Fakeazon() {
  const classes = useStyles();
  const [flipped, set] = useState(false);

  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  });

  // const [props, set] = useSpring(() => ({
  //   xys: [0, 0, 0.9],
  //   config: { mass: 10, tension: 100, friction: 90 },
  // }));

  const styles = {
    fadeIn: {
      animation: "x 2s",
      animationName: Radium.keyframes(fadeIn, "fadeIn"),
    },
  };
  // const calc = (x, y) => [
  //   -(y - window.innerHeight / 2) / 20,
  //   (x - window.innerWidth / -25) / 30,
  //   0.9,
  // ];
  // const trans = (x, y, s) =>
  //   `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

  return (
    <a.div onClick={() => set((state) => !state)}>
      <a.div
        class="c back"
        style={{
          opacity: opacity.interpolate((o) => 1 - o),
          transform,
          backgroundImage: `url(${ShopBg})`,
        }}
      >
        <StyleRoot>
          <div style={styles.fadeIn}>
            <CardActionArea
            // href="https://e-commerce-project-2020.netlify.app/"
            // target="_blank"
            >
              <Image fluid src={fakeazonLogo} className="m-0 p-0" />
              <CardContent>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="p"
                  style={{ fontSize: "32px" }}
                >
                  An e-commerce demo.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions
              style={{
                backgroundColor: "#000000",
              }}
              className="d-flex justify-content-around"
            >
              <Button
                size="large"
                color="primary"
                // href="https://e-commerce-project-2020.netlify.app/"
                // target="_blank"
              >
                <h6>
                  <b>Visit</b>
                </h6>
              </Button>
            </CardActions>
          </div>
        </StyleRoot>
      </a.div>
      <a.div
        class="c front"
        style={{
          opacity,
          transform: transform.interpolate((t) => `${t} rotateX(180deg)`),
        }}
      >
        <StyleRoot>
          <div style={styles.fadeIn}>
            <CardActionArea
            // href="https://e-commerce-project-2020.netlify.app/"
            // target="_blank"
            >
              <Image fluid src={fakeazonLogo} className="m-0 p-0" />
              <CardContent>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="p"
                  style={{ fontSize: "32px" }}
                >
                  An e-commerce demo.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions
              style={{
                backgroundColor: "#000000",
              }}
              className="d-flex justify-content-around"
            >
              <Button
                size="large"
                color="primary"
                // href="https://e-commerce-project-2020.netlify.app/"
                // target="_blank"
              >
                <h6>
                  <b>Visit</b>
                </h6>
              </Button>
            </CardActions>
          </div>
        </StyleRoot>
      </a.div>
    </a.div>
  );
}
