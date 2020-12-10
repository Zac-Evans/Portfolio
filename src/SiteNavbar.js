import React, { Component } from "react";
import { Nav, Navbar, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "react-sticky-header/styles.css";
import StickyHeader from "react-sticky-header";
import Typewriter from "typewriter-effect";
import { Fade } from "react-awesome-reveal";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import CssBaseline from "@material-ui/core/CssBaseline";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import EmojiPeopleIcon from "@material-ui/icons/EmojiPeople";
import FaceIcon from "@material-ui/icons/Face";
import ImportantDevicesIcon from "@material-ui/icons/ImportantDevices";
import GamesIcon from "@material-ui/icons/Games";
import ComputerGif from "./img/computer.gif";
import Audio from "./Audio";

const drawerWidth = 325;

const useStyles = makeStyles((theme) => ({
  root: {},
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    backgroundColor: "rgb(0,0,0,0)",
    position: "relative",
    height: "100px",
    paddingTop: "20px",
    paddingBottom: "110px",
  },
  appBarShift: {
    // width: `calc(100% - ${drawerWidth}px)`,
    // transition: theme.transitions.create(["margin", "width"], {
    //   easing: theme.transitions.easing.easeOut,
    //   duration: theme.transitions.duration.enteringScreen,
    // }),
    // marginRight: -drawerWidth,
  },
  title: {
    flexGrow: 1,
  },
  hide: {
    visibility: "hidden",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    marginRight: -drawerWidth,
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: "rgb(10,10,10)",
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-start",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: 0,
  },
  typewriter: {
    fontFamily: "'Courier New', monospace",
    fontWeight: 700,
    color: "rgb(255,255,255,.8)",
    fontSize: "clamp(16px, 5vw, 30px)",
  },
}));

export default function SiteNavBar() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />

      <AppBar
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
        elevation={0}
      >
        <Toolbar>
          <IconButton
            style={{
              marginRight: "auto",
              marginLeft: "0px",
              visibility: "hidden",
            }}
            disabled
          >
            <MenuIcon style={{ fontSize: "40px" }} />
          </IconButton>
          <a href="/Home" className="mx-auto">
            <h1
              style={{
                fontSize: "clamp(30px, 6vw, 90px)",
              }}
              className="text-center mx-auto"
            >
              Zac Evans
            </h1>
          </a>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerOpen}
            className={clsx(open && classes.hide)}
            style={{
              marginLeft: "auto",
              marginRight: "0px",
            }}
          >
            <MenuIcon style={{ fontSize: "40px" }} />
          </IconButton>
        </Toolbar>
        <hr className="white  m-2" style={{ border: "1px solid white" }} />
        <Row
          className="d-flex justify-content-center text-center"
          style={{ fontSize: 20 }}
        >
          <div className={classes.typewriter}>
            <Typewriter
              style={{ fontFamily: "Courier New" }}
              options={{
                strings: [
                  "Full-Stack Developer",
                  "Tech Enthusiast",
                  "Jazz Nerd",
                  "Design Guy",
                  "Friendly Neighbor",
                  "Reluctant Cat Owner",
                ],
                autoStart: true,
                loop: true,
                skipAddStyles: "true",
              }}
            />
          </div>
        </Row>
      </AppBar>

      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="right"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton style={{ color: "white" }} onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        {/* <Audio /> */}
        <Divider style={{ border: "1px solid white" }} />
        <List>
          {["About", "Projects", "Skills", "Contact"].map((text, index) => (
            <a href={"/" + text}>
              <ListItem button key={text}>
                <ListItemIcon>
                  {index === 0 ? (
                    <FaceIcon fontSize="large" style={{ color: "white" }} />
                  ) : index === 1 ? (
                    <ImportantDevicesIcon
                      fontSize="large"
                      style={{ color: "white" }}
                    />
                  ) : index === 2 ? (
                    <GamesIcon fontSize="large" style={{ color: "white" }} />
                  ) : (
                    <MailIcon fontSize="large" style={{ color: "white" }} />
                  )}
                </ListItemIcon>

                <ListItemText style={{ color: "white" }} primary={text} />
              </ListItem>
            </a>
          ))}
        </List>
        <div className="d-flex flex-column justify-content-end align-self-end h-100">
          <img src={ComputerGif} width="200vw" />
        </div>
      </Drawer>
    </div>
  );
}

// render() {
//   const navLinks = ["Projects", "About", "Skills", "Contact"];
//   return (
//     <div>
// <Fade>
//   <Row className="d-flex justify-content-center text-center">
//     <Link to="/Home">
//       <h1
//         className="pl-2 m-0"
//         style={{ fontSize: "clamp(60px, 8vw, 100px)" }}
//       >
//         Zac Evans
//       </h1>
//     </Link>
//   </Row>
//   <Row
//     className="d-flex justify-content-center text-center"
//     style={{ fontSize: 30 }}
//   >
//     <Typewriter
//       options={{
//         strings: [
//           "Full-Stack Developer",
//           "Tech Enthusiast",
//           "Jazz Nerd",
//           "Design Snob",
//           "Friendly Neighbor",
//           "Reluctant Cat Owner",
//         ],
//         autoStart: true,
//         loop: true,
//       }}
//     />
//   </Row>
//         <Row className="d-flex justify-content-center text-center">
//           <Navbar
//             expand="lg"
//             className="mb-4 navbar-dark"
//             style={{
//               backgroundColor: "#FFFFFF00",
//             }}
//           >
//             <Navbar.Toggle aria-controls="basic-navbar-nav" />
//             <Navbar.Collapse id="basic-navbar-nav">
//               <div>
//                 <Nav>
//                   {navLinks.map((nav, i) => {
//                     return (
//                       <Link key={i} className="p-4 text-light" to={nav}>
//                         <h5>{nav}</h5>
//                       </Link>
//                     );
//                   })}
//                 </Nav>
//               </div>
//             </Navbar.Collapse>
//           </Navbar>
//         </Row>
//       </Fade>
//     </div>
//   );
// }
