import "../App.css";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { useState } from "react";
import DoubleArrowIcon from "@material-ui/icons/DoubleArrow";
import Tooltip from "@material-ui/core/Tooltip";
import { withStyles } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";
import Checkbox from "@material-ui/core/Checkbox";
import getDegrees from "./Degrees";
import Grid from "@material-ui/core/Grid";

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
  { title: "HCI/UX", preRequisite: ["None"] },
  { title: "Information Systems", preRequisite: ["None"] },
  { title: "Foundations of Data Science", preRequisite: ["None"] },
  {
    title: "Artificial Intelligence/Machine Learning",
    preRequisite: ["Computer Science Foundation"],
  },
  { title: "Technology Leadership", preRequisite: ["None"] },
  { title: "Cybersecurity", preRequisite: ["Computer Science Foundation"] },
  { title: "Computer Science Foundations", preRequisite: ["None"] },
  {
    title: "Advanced Computer Science",
    preRequisite: ["Computer Science Foundation"],
  },
  {
    title: "Software Architecture",
    preRequisite: ["Computer Science Foundation"],
  },
  { title: "Front-End Development", preRequisite: ["None"] },
];

function CertificateSelector(props) {
  let selectedCertificate = ["", "", ""];
  const [selectCerts, setSelectCerts] = useState(["", "", ""]);

  const handleChange = () => {
    const certifcateElement = document.getElementsByClassName(
      "certificate" + props.count
    );
    for (var i = 0; i < certifcateElement.length; i++) {
      if (
        certifcateElement[i].value !== "Cert1" &&
        certifcateElement[i].value !== "Cert2" &&
        certifcateElement[i].value !== "Cert3"
      ) {
        selectedCertificate[i] = certifcateElement[i].value;
      } else {
        selectedCertificate[i] = "";
      }
      setSelectCerts(selectedCertificate);
    }
    handleProceedButton();
    props.handleSelectCerts(selectedCertificate);
  };

  const handleProceedButton = () => {
    var disabled = false;
    for (var j = 0; j < selectedCertificate.length; j++) {
      if (selectedCertificate[j] === "") disabled = true;
    }
  };

  return (
    <div className="App">
      <div>
        <Grid container spacing={3}>
          <Grid item xs={3}>
            <select
              className={"certificate" + props.count}
              id="certificate1"
              onChange={handleChange}
              style={{ border: "2px solid #07294d" }}
            >
              <option value="Cert1" key="Cert1">
                Certifcate 1
              </option>
              {certificates.map((certificate) => (
                <option
                  value={certificate.title}
                  key={certificate.title}
                  disabled={selectCerts.includes(certificate.title)}
                >
                  {certificate.title}
                </option>
              ))}
            </select>
          </Grid>
          <Grid item xs={3}>
            <select
              className={"certificate" + props.count}
              id="certificate2"
              onChange={handleChange}
              style={{ border: "2px solid #07294d" }}
            >
              <option value="Cert2" key="Cert2">
                Certifcate 2
              </option>
              {certificates.map((certificate) => (
                <option
                  value={certificate.title}
                  key={certificate.title}
                  disabled={selectCerts.includes(certificate.title)}
                >
                  {certificate.title}
                </option>
              ))}
            </select>
          </Grid>
          <Grid item xs={3}>
            <select
              className={"certificate" + props.count}
              id="certificate3"
              onChange={handleChange}
              style={{ border: "2px solid #07294d" }}
            >
              <option value="Cert3" key="Cert3">
                Certifcate 3
              </option>
              {certificates.map((certificate) => (
                <option
                  value={certificate.title}
                  key={certificate.title}
                  disabled={selectCerts.includes(certificate.title)}
                >
                  {certificate.title}
                </option>
              ))}
            </select>
          </Grid>
          <Grid item xs={3}>
            <Tooltip title="Get Degrees" arrow>
              <button
                disabled={
                  selectCerts[0] === "" ||
                  selectCerts[1] === "" ||
                  selectCerts[2] === ""
                    ? true
                    : false
                }
              >
                <DoubleArrowIcon onClick={props.Expander} />
              </button>
            </Tooltip>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

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
    console.log(getDegrees(selectCerts[0], selectCerts[1], selectCerts[2]));
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
        style={{
          border: "2px solid #07294d",
          borderRadius: "15px",
          width: "100%",
        }}
      >
        <ExpansionPanelSummary
          expandIcon={
            selectCerts[0] === "" ||
            selectCerts[1] === "" ||
            selectCerts[2] === "" ? (
              <div></div>
            ) : (
              <Tooltip title="View Pre-Requisite" arrow>
                <button
                  onClick={() => {
                    setVis(!vis);
                  }}
                  style={{ backgroundColor: "#07294d" }}
                >
                  <ExpandMoreIcon />
                </button>
              </Tooltip>
            )
          }
          style={{ backgroundColor: "white" }}
        >
          <CertificateSelector
            count={props.count}
            Expander={Expander}
            handleSelectCerts={handleSelectCerts}
          />
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <div>
            <div
              style={{
                border: "2px solid #07294d",
                borderRadius: "15px",
              }}
            >
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <div style={{ textAlign: "center" }}>
                    &nbsp;&nbsp;&nbsp;&nbsp;<b><i>Pre-Requisites</i></b>
                  </div>
                </Grid>
                <Grid item xs={12}>
                  <ul>
                    <li>
                      <b>Certificate 1 : </b>
                      {FindPreqs(selectCerts[0])
                        .filter((m) => m !== "")
                        .map((m, index) => {
                          return (
                            <span key={index}>
                              <i style={{ fontSize: "15px" }}>{m}</i>
                            </span>
                          );
                        })}
                    </li>
                    <li>
                      <b>Certificate 2 : </b>
                      {FindPreqs(selectCerts[1])
                        .filter((m) => m !== "")
                        .map((m, index) => {
                          return (
                            <span key={index}>
                              <i style={{ fontSize: "15px" }}>{m}</i>
                            </span>
                          );
                        })}
                    </li>
                    <li>
                      <b>Certificate 3 : </b>
                      {FindPreqs(selectCerts[2])
                        .filter((m) => m !== "")
                        .map((m, index) => {
                          return (
                            <span key={index}>
                              <i style={{ fontSize: "15px" }}>{m}</i>
                            </span>
                          );
                        })}
                    </li>
                  </ul>
                </Grid>
              </Grid>

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
                    &nbsp;&nbsp;&nbsp;&nbsp;<b><i>Degrees which can be obtained</i></b>
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
//export default CertificateSelector;
export default CertificateWrapper;
