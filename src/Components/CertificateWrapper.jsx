import "../App.css";
import "../Styles/certificate.css"
import "../Styles/certificateWrapper.css"

import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { useState } from "react";
import Tooltip from "@material-ui/core/Tooltip";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { withStyles } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";
import Checkbox from "@material-ui/core/Checkbox";
import getDegrees from "./Degrees";
import Grid from "@material-ui/core/Grid";
import CertificateSelector from "./CertificateSelector"

const degrees = [
  {
    title: "Master of Science in Information",
    requirements: [
      "HCI/UX",
      "Foundations of Data Science",
      "Front End Development",
    ],
    mustHave: "HCI/UX",
  },
  {
    title: "Master of Science in Computer Science",
    requirements: [
      "Computer Science Foundations",
      "Software Architecture",
      "Advanced Computer Science",
    ],
    mustHave: "Advanced Computer Science",
  },
  {
    title: "Master of Science in Cyber Security",
    requirements: [
      "Foundations of Data Science",
      "Software Architecture",
      "Cybersecurity",
    ],
    mustHave: "Cybersecurity",
  },
  {
    title: "Master of Science in Technology Leadership",
    requirements: [
      "Information Systems",
      "Technology Leadership",
      "Computer Science Foundations",
    ],
    mustHave: "Technology Leadership",
  },
  {
    title: "Master of Science in Data Science",
    requirements: [
      "Computer Science Foundations",
      "Foundations of Data Science",
      "AI/Machine Learning",
      "HCI/UX",
    ],
    mustHave: "Foundations of Data Science",
  },
  {
    title: "Master of Science in Information Systems",
    requirements: ["Information Systems", "Software Architecture", "HCI/UX"],
    mustHave: "Information Systems",
  },
  {
    title: "Master of Science in MLAI",
    requirements: [
      "Artificial Intelligence/Machine Learning",
      "Computer Science Foundations",
      "Foundations of Data Science",
    ],
    mustHave: "Artificial Intelligence/Machine Learning",
  },
];

const getMustHave = (deg) => {
  return degrees
    .filter((f) => f.title === deg)
    .reduce((previous, current) => current.mustHave + previous, "");
};

const GreenCheckbox = withStyles({
  root: {
    color: green[400],
    "&$checked": {
      color: green[600],
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);

const certificates = [
  { title: "HCI/UX", preRequisite: [""] },
  { title: "Information Systems", preRequisite: [""] },
  { title: "Foundations of Data Science", preRequisite: [""] },
  {
    title: "Artificial Intelligence/Machine Learning",
    preRequisite: ["Computer Science Foundation"],
  },
  { title: "Technology Leadership", preRequisite: [""] },
  {
    title: "Cybersecurity",
    preRequisite: ["Computer Science Foundation"],
  },
  { title: "Computer Science Foundations", preRequisite: [""] },
  {
    title: "Advanced Computer Science",
    preRequisite: ["Computer Science Foundation"],
  },
  {
    title: "Software Architecture",
    preRequisite: ["Computer Science Foundation"],
  },
  { title: "Front-End Development", preRequisite: [""] },
];

function FindPreqs(selectCerts) {
    return certificates
      .filter((m) => m.title === selectCerts)
      .reduce((previous, current) => {
        return previous.concat(current.preRequisite);
      }, []);
  }
  
  function CertificateWrapper(props) {
    const [vis, setVis] = useState(false);
    const [selectCerts, setSelectCerts] = useState(["", "", ""]);
    const [visDegree, setVisDegree] = useState(false);
    const style = {
      backgroundColor: "white",
      margin: "20px",
    };
  
    const handleSelectCerts = (CertificateSelectorArr) => {
      setSelectCerts(CertificateSelectorArr);
      setVisDegree(false);
    };
  
    const Expander = () => {
      setVisDegree(true);
      setVis(true);
    };

    return (
      <div style={style}>
        <ExpansionPanel
          expanded={
            selectCerts[0] !== "" &&
            selectCerts[1] !== "" &&
            selectCerts[2] !== "" &&
            vis
          }
          id="expansion-panel"
        >
          <ExpansionPanelSummary
            id="expand-summary"
            expandIcon={
              selectCerts[0] === "" ||
              selectCerts[1] === "" ||
              selectCerts[2] === "" ? (
                <div></div>
              ) : (
                <Tooltip title="Show More" arrow>
                  <button
                    onClick={() => {
                      setVis(!vis);
                    }}
                    id="expand-button"
                  >
                    <ExpandMoreIcon />
                  </button>
                </Tooltip>
              )
            }
          >
            <CertificateSelector
              count={props.count}
              Expander={Expander}
              handleSelectCerts={handleSelectCerts}
            />
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <div>
              <Grid container spacing={3}>
                <Grid
                  item
                  xs={3}
                  id="prereq-container1"
                >
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                    <p><b>Pre-Requisite</b> - <i>Certficate 1</i></p>
                    </Grid>
                    {FindPreqs(selectCerts[0])
                      .filter((m) => m !== "")
                      .map((m, index) => {
                        return (
                          <div>
                            <Grid item xs={12}>
                              {FindPreqs(selectCerts[0])
                                .filter((m) => m !== "")
                                .map((m, index) => {
                                  return (
                                    <FormControlLabel
                                      key={index}
                                      control={
                                        <GreenCheckbox
                                          checked={props.hasCSBackground}
                                        />
                                      }
                                      label={m}
                                    />
                                  );
                                })}
                            </Grid>
                          </div>
                        );
                      })}
                  </Grid>
                </Grid>
                <Grid
                  item
                  xs={3}
                  id="prereq-container2"
                >
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                    <p><b>Pre-Requisite</b> - <i>Certficate 2</i></p>
                    </Grid>
                    {FindPreqs(selectCerts[1])
                      .filter((m) => m !== "")
                      .map((m, index) => {
                        return (
                          <div>
                            <Grid item xs={12}>
                              {FindPreqs(selectCerts[1])
                                .filter((m) => m !== "")
                                .map((m, index) => {
                                  return (
                                    <FormControlLabel
                                      key={index}
                                      control={
                                        <GreenCheckbox
                                          checked={props.hasCSBackground}
                                        />
                                      }
                                      label={m}
                                    />
                                  );
                                })}
                            </Grid>
                          </div>
                        );
                      })}
                  </Grid>
                </Grid>
                <Grid
                  item
                  xs={3}
                  id="prereq-container3"
                >
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <p><b>Pre-Requisite</b> - <i>Certficate 3</i></p>
                    </Grid>
                    {FindPreqs(selectCerts[2])
                      .filter((m) => m !== "")
                      .map((m, index) => {
                        return (
                          <div>
                            <Grid item xs={12}>
                              {FindPreqs(selectCerts[2])
                                .filter((m) => m !== "")
                                .map((m, index) => {
                                  return (
                                    <FormControlLabel
                                      key={index}
                                      control={
                                        <GreenCheckbox
                                          checked={props.hasCSBackground}
                                        />
                                      }
                                      label={m}
                                    />
                                  );
                                })}
                            </Grid>
                          </div>
                        );
                      })}
                  </Grid>
                </Grid>
              </Grid>
              <div
              id="show-degree"
                style={{
                  display:
                    visDegree &&
                    selectCerts[0] !== "" &&
                    selectCerts[1] !== "" &&
                    selectCerts[2] !== ""
                      ? "block"
                      : "none",
                }}
              >
                <Grid
                  container
                  spacing={3}
                  style={{
                    display:
                      visDegree &&
                      selectCerts[0] !== "" &&
                      selectCerts[1] !== "" &&
                      selectCerts[2] !== ""
                        ? "block"
                        : "none",
                  }}
                >
                  <Grid item xs={12}>
                    <div style={{ textAlign: "center" }}>
                      &nbsp;&nbsp;&nbsp;&nbsp;
                      <b>
                        <i>Degrees which can be obtained</i>
                      </b>
                    </div>
                  </Grid>
                  <Grid item xs={12}>
                    <ul>
                      {getDegrees(
                        selectCerts[0],
                        selectCerts[1],
                        selectCerts[2]
                      ).map((deg, index) => {
                        return (
                          <li key={index}>
                            {" "}
                            <b>{deg}</b>{" "}
                            <i style={{ fontSize: "15px" }}>
                              <b style={{ color: "red" }}>**</b>(Must Have
                              Certificate: {getMustHave(deg)})
                            </i>
                          </li>
                        );
                      })}
                    </ul>
                  </Grid>
                </Grid>
              </div>
            </div>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
    );
  }
  export default CertificateWrapper;