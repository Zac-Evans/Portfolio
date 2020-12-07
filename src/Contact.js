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
const styles = (theme) => ({
  multilineColor: {
    color: "red",
  },
});
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
}));

export default function SignUp() {
  const classes = useStyles();

  return (
    <div className="row p-4">
      <Container
        component="main"
        maxWidth="xs"
        style={{
          backgroundColor: "rgb(20, 33, 61, .7)",
        }}
        className="my-auto"
      >
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <EmailIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            <b>Get in touch</b>
          </Typography>
          <form className={classes.form} noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="fname"
                  name="firstName"
                  variant="outlined"
                  required
                  fullWidth
                  id="firstName"
                  InputProps={{
                    className: classes.multilineColor,
                  }}
                  label={
                    <div
                      style={{
                        color: "white",
                      }}
                    >
                      First Name
                    </div>
                  }
                  autoFocus
                  style={{
                    backgroundColor: "rgb(255, 255, 255, 0)",
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="lastName"
                  InputProps={{
                    className: classes.multilineColor,
                  }}
                  label={
                    <div
                      style={{
                        color: "white",
                      }}
                    >
                      Last Name
                    </div>
                  }
                  name="lastName"
                  autoComplete="lname"
                  style={{
                    backgroundColor: "rgb(255, 255, 255, 0)",
                    fontColor: "white",
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
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
                  name="email"
                  autoComplete="email"
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
        <Box mt={5}>{/* <Copyright /> */}</Box>
      </Container>
    </div>
  );
}
