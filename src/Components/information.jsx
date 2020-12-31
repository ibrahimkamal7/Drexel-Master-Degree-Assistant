import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormLabel from '@material-ui/core/FormLabel';
import { useHistory } from "react-router";
import "../App.css"
const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const userDatabse = [
  {userid:"ik363", password:"123456", hasCSBackground:true},
  {userid:"hv59", password:"123456", hasCSBackground:false},
  {userid:"hg387", password:"123456", hasCSBackground:true},
]
export default function SignIn(props) {
  const classes = useStyles();
  const history = useHistory();
  let hasCSBackground = false
  const handleSubmit = () =>{
    if(document.getElementsByTagName("input")[0].value === "" || document.getElementsByTagName("input")[1].value === ""){
        window.alert("Fill out the form")
    }
    else{
      let tmp = userDatabse.filter((f) => {
          return (f.userid == document.getElementsByTagName("input")[0].value && f.password == document.getElementsByTagName("input")[1].value)
        }).reduce((previous, current) => {
          return (current.hasCSBackground)
        }, "");

      if (tmp !== "") {
        hasCSBackground = tmp
        history.push({
          pathname:  "/certificate",
          state: {
            hasCSBackground: hasCSBackground
          } 
       });
      }
      else{
        window.alert("User Name OR Password is not correct");
      }
    }
}
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper} id="bg">
        <h1>Drexel Connect</h1>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label="User ID"
            name="username"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="password"
            label="Password"
            name="password"
            autoFocus
          />
        </form>
        <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleSubmit}
          >
            Submit
          </Button>
      </div>
    </Container>
  );
}
