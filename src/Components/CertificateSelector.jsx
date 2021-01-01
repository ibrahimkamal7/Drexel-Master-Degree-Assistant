import "../App.css";
import "../Styles/certificate.css"
import "../Styles/certificateWrapper.css"

import { useState } from "react";
import DoubleArrowIcon from "@material-ui/icons/DoubleArrow";
import Tooltip from "@material-ui/core/Tooltip";
import Grid from "@material-ui/core/Grid";

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
            >
              <option value="Cert1" key="Cert1">
                Certifcate 1
              </option>
              {certificates.map((certificate, index) => (
                <option
                  value={certificate.title}
                  key={index}
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
            >
              <option value="Cert2" key="Cert2">
                Certifcate 2
              </option>
              {certificates.map((certificate, index) => (
                <option
                  value={certificate.title}
                  key={index}
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
            >
              <option value="Cert3" key="Cert3">
                Certifcate 3
              </option>
              {certificates.map((certificate, index) => (
                <option
                  value={certificate.title}
                  key={index}
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
                onClick={props.Expander} 
              >
                <DoubleArrowIcon/>
              </button>
            </Tooltip>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default CertificateSelector;
