import "./App.css";
import CertificateWrapper from "./Components/CertificateSelector";
import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Grid from "@material-ui/core/Grid";
import Tooltip from "@material-ui/core/Tooltip";
import SignIn from "./Components/information"
function App() {
  const [count, setCount] = useState(1);

  const onClick = () => {
    setCount(count + 1);
  };
  
  return (
    <div className="App">
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
          <Grid item xs={4}>
            <Tooltip title="Add another certificate selector component" arrow>
              <button onClick={onClick} style={{ marginTop: "20px" }}>
                <AddIcon />
              </button>
            </Tooltip>
          </Grid>
        </Grid>
      </div>
      {[...Array(count).keys()].map((c, index) => {
        return <CertificateWrapper count={index} key={index} />;
      })}
    </div>
  );
}

export default App;
