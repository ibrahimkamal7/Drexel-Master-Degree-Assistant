import React from "react";
import SignIn from "../Components/information";
import Grid from "@material-ui/core/Grid";
import "../App.css"

function Login() {
  return (
    <div>
      <div style={{ backgroundColor: "#07294d" }}>
        <Grid container spacing={3}>
          <Grid item xs={4}>
            <img
              src="https://www.cs.drexel.edu/~dmz38/CCILogo.png"
              alt="Drexel Logo"
              className="logo"
              style={{ marginTop: "5px", maxWidth: "100%" }}
            ></img>
          </Grid>
          <Grid item xs={4}>
            <div
              style={{
                fontWeight: "bold",
                fontSize: "25px",
                color: "white",
                marginTop: "20px",
                marginLeft: "50px"
              }}
            >
              Degree Assistant
            </div>
          </Grid>
        </Grid>
      </div>
      <div>
      <SignIn />
      </div>
    )
    </div>
  );
}

export default Login;
