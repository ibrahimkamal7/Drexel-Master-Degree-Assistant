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

  const ch = () =>{
    console.log("11")
  }
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
                  style={{border: "2px solid #07294d"}}
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
              <td>
                <select
                  className={"certificate" + props.count}
                  id="certificate2"
                  onChange={handleChange}
                  style={{border: "2px solid #07294d"}}
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
              <td>
                <select
                  className={"certificate" + props.count}
                  id="certificate3"
                  onChange={handleChange}
                  style={{border: "2px solid #07294d"}}
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
              <td>
                <button id={"proceed" + props.count} disabled>
                  <DoubleArrowIcon  onClick={props.Expander}/>
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
    margin: "20px",
  }

  const handleSelectCerts = (CertificateSelectorArr) => {
    setSelectCerts(CertificateSelectorArr);
    console.log(selectCerts)
  }

  const Expander = () => {
    console.log("In Expander");
    setVis(true);
  }

  return (
    <div style={style}>
      <ExpansionPanel expanded={vis} style={{border: "2px solid #07294d", borderRadius:"15px"}}> 
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon onClick={()=>{setVis(!vis)}} />}
          style={{backgroundColor: "white"}}
        >
          <CertificateSelector count={props.count} Expander={Expander} handleSelectCerts={handleSelectCerts}/>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <div>
          <table>
            <tbody>
              <tr>
                <td style={{width: "250px", border:"2px solid #07294d", borderRadius:"15px"}}>
                  <table>
                    <tbody>
                      <tr>
                        <td>Pre-reqs</td>
                      </tr>
                      <tr><td>{selectCerts[0]}</td></tr>
                    </tbody>
                  </table>
                </td>
                <td style={{width: "250px", border:"2px solid #07294d", borderRadius:"15px"}}> 
                <table>
                    <tbody>
                      <tr>
                        <td>Pre-reqs</td>
                      </tr>
                      <tr><td>{selectCerts[1]}</td></tr>
                    </tbody>
                  </table>
                </td>
                <td style={{width: "250px", border:"2px solid #07294d", borderRadius:"15px"}}> 
                <table>
                    <tbody>
                      <tr>
                        <td>Pre-reqs</td>
                      </tr>
                      <tr><td>{selectCerts[2]}</td></tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
          <table>
            <tbody>
              <tr><td>Degrees</td></tr>
              <tr>
                <td style={{width: "250px"}}>{selectCerts[0]}</td>
                <td style={{width: "250px"}}>{selectCerts[1]}</td>
                <td style={{width: "250px"}}>{selectCerts[2]}</td>
              </tr>
            </tbody>
          </table>
          </div>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}
//export default CertificateSelector;
export default CertificateWrapper;
