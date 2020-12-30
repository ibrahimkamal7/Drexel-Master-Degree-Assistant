import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormLabel from '@material-ui/core/FormLabel';

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

export default function SignIn() {
  const classes = useStyles();
  const [hasCSBackground, setHasCSBackground] = useState(false);

  const handleSubmit = () =>{
    if(document.getElementsByTagName("input")[0].value === "" || (!document.getElementsByTagName("input")[1].checked && !document.getElementsByTagName("input")[2].checked)){
        console.log(1)
        window.alert("Fill out the form")
    }
    else{
        if(document.getElementsByTagName("input")[1].checked){
            setHasCSBackground(true)
        }
        if(document.getElementsByTagName("input")[2].checked){
            setHasCSBackground(false)
        }
    }
}
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="name"
            label="Name"
            name="name"
            autoFocus
          />
          <FormLabel component="legend">Do you have a CS background?</FormLabel>
          <RadioGroup
            aria-label="cs-background"
            name="cs-background"
          >
            <FormControlLabel
              value="yes"
              control={<Radio />}
              label="Yes"
            />
            <FormControlLabel value="No" control={<Radio />} label="No" />
          </RadioGroup>
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
