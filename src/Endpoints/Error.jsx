import React from "react";
import Grid from "@material-ui/core/Grid";
import "../App.css"

function Error() {
  return (
    <div>
      <div style={{ backgroundColor: "#07294d" }}>
        <Grid container spacing={4}>
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
              }}
            >
              Welcome To Degree Assistant
            </div>
          </Grid>
        </Grid>
      </div>
      <h1>404 Not Found</h1>)
    </div>
  );
}

export default Error;
