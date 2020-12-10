import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import EmailIcon from "@material-ui/icons/Email";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import SiteNavbar from "./SiteNavbar";
import { Fade } from "react-awesome-reveal";
import emailjs from "emailjs-com";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import ComputerGif from "./img/computer.gif";

// function Copyright() {
//   return (
//     <Typography variant="body2" color="textSecondary" align="center">
//       {"Copyright © "}
//       <Link color="inherit" href="https://material-ui.com/">
//         Your Website
//       </Link>{" "}
//       {new Date().getFullYear()}
//       {"."}
//     </Typography>
//   );
// }

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(1),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: "#000000",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
    color: "white",
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },

  multilineColor: {
    color: "white",
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paperModal: {
    backgroundColor: theme.palette.background.paper,
    border: "5px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    height: "430px",
    width: "400px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    marginTop: "10px",
  },
}));

export default function SignUp() {
  const classes = useStyles();

  const emailIsValid = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    let userName = document.getElementById("from_name").value;
    let userEmail = document.getElementById("reply_to").value;
    let userMessage = document.getElementById("message").value;
    if (!userName || !userEmail || !userMessage) {
      handleFailOpen();
      return;
    } else if (!emailIsValid(userEmail)) {
      handleFailEmailOpen();
      return;
    }
    emailjs
      .sendForm(
        "service_zvbxv7f",
        "template_in0g9or",
        e.target,
        "user_M8t3OUu3Qbj8S6mu5Icqi"
      )
      .then(
        () => {
          {
            handleOpen();
          }
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  const [open, setOpen] = React.useState(false);
  const [openFail, setFailOpen] = React.useState(false);
  const [openFailEmail, setFailEmailOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleFailOpen = () => {
    setFailOpen(true);
  };

  const handleFailEmailOpen = () => {
    setFailEmailOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setFailOpen(false);
    setFailEmailOpen(false);
  };

  return (
    <Container
      component="main"
      maxWidth="xs"
      style={{
        backgroundColor: "rgb(20, 33, 61, .7)",
      }}
      className="my-auto"
    >
      <Fade duration={2000}>
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <EmailIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            <b>Get in touch</b>
          </Typography>
          <form className={classes.form} noValidate onSubmit={sendEmail}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12}>
                <TextField
                  autoComplete="fname"
                  name="from_name"
                  variant="outlined"
                  required
                  fullWidth
                  id="from_name"
                  InputProps={{
                    className: classes.multilineColor,
                  }}
                  label={
                    <div
                      style={{
                        color: "white",
                      }}
                    >
                      Name
                    </div>
                  }
                  autoFocus
                  style={{
                    backgroundColor: "rgb(255, 255, 255, 0)",
                  }}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="reply_to"
                  InputProps={{
                    className: classes.multilineColor,
                  }}
                  label={
                    <div
                      style={{
                        color: "white",
                      }}
                    >
                      Email Address
                    </div>
                  }
                  name="reply_to"
                  autoComplete="email"
                  type="email"
                  style={{
                    backgroundColor: "rgb(255, 255, 255, 0)",
                    color: "white",
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  InputProps={{
                    className: classes.multilineColor,
                  }}
                  multiline
                  rows={4}
                  name="message"
                  label={
                    <div
                      style={{
                        color: "white",
                      }}
                    >
                      Message
                    </div>
                  }
                  type="message"
                  id="message"
                  style={{
                    backgroundColor: "rgb(255, 255, 255, 0)",
                  }}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              <b>Submit</b>
            </Button>
          </form>
        </div>
      </Fade>
      <Modal
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <div className={classes.paperModal}>
          <h4>Thanks for your message!</h4>
          <hr />
          <h6>I'll be sure to get back to shortly.</h6>
          <img src={ComputerGif} width="200vw" />
          <h5 onClick={handleClose}>←Back</h5>
        </div>
      </Modal>
      <Modal
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        className={classes.modal}
        open={openFail}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <div className={classes.paperModal}>
          <h4>Oops!</h4>
          <hr />
          <h6>Be sure to fill out all fields.</h6>
          <img src={ComputerGif} width="200vw" />
          <h5 onClick={handleClose}>←Back</h5>
        </div>
      </Modal>
      <Modal
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        className={classes.modal}
        open={openFailEmail}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <div className={classes.paperModal}>
          <h4>Oops!</h4>
          <hr />
          <h6>Please enter a valid email address.</h6>
          <img src={ComputerGif} width="200vw" />
          <h5 onClick={handleClose}>←Back</h5>
        </div>
      </Modal>
    </Container>
  );
}
