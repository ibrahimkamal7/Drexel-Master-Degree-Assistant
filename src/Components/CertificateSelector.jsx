import "../App.css";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { useState } from "react";
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';

const certificates = [
  { title: "HCI/UX", preRequisite: "" },
  { title: "Information Systems", preRequisite: "" },
  { title: "Foundations of Data Science", preRequisite: "" },
  {
    title: "Artificial Intelligence/Machine Learning",
    preRequisite: "Base CS Foundation Course",
  },
  { title: "Technology Leadership", preRequisite: "" },
  { title: "Cybersecurity", preRequisite: "Base CS Foundation Course" },
  { title: "Computer Science Foundations", preRequisite: "" },
  {
    title: "Advanced Computer Science",
    preRequisite: "Base CS Foundation Course",
  },
  {
    title: "Software Architecture",
    preRequisite: "Base CS Foundation Course",
  },
  { title: "Front-End Development", preRequisite: "" },
];


function CertificateSelector(props) {
  let selectedCertificate = ["", "", ""];
  const [selectCerts, setSelectCerts] = useState(['','','']);
  
  const handleChange = () => {
    console.log(props.count);
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
    document.getElementById("proceed" + props.count).disabled = disabled;
  };

  return (
    <div className="App">
      <div>
        <table>
          <tbody>
            <tr>
              <td>
                <select
                  className={"certificate" + props.count}
                  id="certificate1"
                  onChange={handleChange}
                >
                  <option value="Cert1" key="Cert1">
                    Certifcate 1
                  </option>
                  {certificates.map((certificate) => (
                    <option value={certificate.title} key={certificate.title} disabled={
                      selectCerts.includes(certificate.title)
                    }>
                      {certificate.title}
                    </option>
                  ))}
                </select>
              </td>
              <td></td>
              <td>
                <select
                  className={"certificate" + props.count}
                  id="certificate2"
                  onChange={handleChange}
                >
                  <option value="Cert2" key="Cert2">
                    Certifcate 2
                  </option>
                  {certificates.map((certificate) => (
                    <option value={certificate.title} key={certificate.title} disabled={
                      selectCerts.includes(certificate.title)
                    }>
                      {certificate.title}
                    </option>
                  ))}
                </select>
              </td>
              <td></td>
              <td>
                <select
                  className={"certificate" + props.count}
                  id="certificate3"
                  onChange={handleChange}
                >
                  <option value="Cert3" key="Cert3" >
                    Certifcate 3
                  </option>
                  {certificates.map((certificate) => (
                    <option value={certificate.title} key={certificate.title} disabled={
                      selectCerts.includes(certificate.title)
                    }>
                      {certificate.title}
                    </option>
                  ))}
                </select>
              </td>
              <td></td>
              <td>
                <button id={"proceed" + props.count} disabled>
                <DoubleArrowIcon />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

function CertificateWrapper(props) {
  const [vis, setVis] = useState(false);
  const [selectCerts, setSelectCerts] = useState(['','','']);
  const style={
    backgroundColor: "white",
    //border:"2px solid black", 
    margin: "20px"
  }

  const handleSelectCerts = (CertificateSelectorArr) => {
    setSelectCerts(CertificateSelectorArr);
    console.log(selectCerts)
  }

  return (
    <div style={style}>
      <ExpansionPanel expanded={vis}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon onClick={()=>{setVis(!vis)}}/>}
          style={{backgroundColor: "white"}}
        >
          <CertificateSelector count={props.count} handleSelectCerts={handleSelectCerts}/>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <table>
            <tbody>
              <tr>
                <td>
                  {
                    selectCerts[0]
                  }
                </td>
                <td>
                  {selectCerts[1]}
                </td>
                <td>
                  {selectCerts[2]}
                </td>
              </tr>
            </tbody>
          </table>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}
//export default CertificateSelector;
export default CertificateWrapper;
