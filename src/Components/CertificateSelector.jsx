import "../App.css";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { useState } from "react";
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';
import Tooltip from '@material-ui/core/Tooltip';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import Checkbox from '@material-ui/core/Checkbox';
import getDegrees from "./Degrees";
import {useEffect} from "react";
import $ from "jquery";

const degrees =[
  {title:"Master of Science in Information", requirements:["HCI/UX", "Foundations of Data Science", "Front End Development"], mustHave:"HCI/UX"},
  {title:"Master of Science in Computer Science", requirements:["Computer Science Foundations", "Software Architecture", "Advanced Computer Science"], mustHave:"Advanced Computer Science"},
  {title:"Master of Science in Cyber Security", requirements:["Foundations of Data Science", "Software Architecture", "Cybersecurity"], mustHave:"Cybersecurity"},
  {title:"Master of Science in Technology Leadership", requirements:["Information Systems", "Technology Leadership", "Computer Science Foundations"], mustHave:"Technology Leadership"},
  {title:"Master of Science in Data Science", requirements:["Computer Science Foundations", "Foundations of Data Science", "AI/Machine Learning", "HCI/UX"], mustHave:"Foundations of Data Science"},
  {title:"Master of Science in Information Systems", requirements:["Information Systems", "Software Architecture", "HCI/UX"], mustHave:"Information Systems"},
  {title:"Master of Science in MLAI", requirements:["Artificial Intelligence/Machine Learning", "Computer Science Foundations", "Foundations of Data Science"], mustHave:"Artificial Intelligence/Machine Learning"},
]

const getMustHave = (deg) => {
  return (degrees.filter((f) => (
      f.title == deg
  )).reduce((previous, current)=> (current.mustHave + previous), ""));
}

const GreenCheckbox = withStyles({
  root: {
    color: green[400],
    '&$checked': {
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
  { title: "Cybersecurity", preRequisite: ["Computer Science Foundation"] },
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
  const [selectCerts, setSelectCerts] = useState(['','','']);
  
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
        <table data-role="table" data-mode="reflow" class="ui-responsive">
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
                <Tooltip title="Proceed" arrow>
                    <button disabled={(selectCerts[0]==="" || selectCerts[1]==="" || selectCerts[2]==="" )?true:false}>
                      <DoubleArrowIcon  onClick={props.Expander}/>
                    </button>
                </Tooltip>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

function FindPreqs(selectCerts) {
  return (certificates.filter((m)=>(m.title === selectCerts)).reduce((previous, current)=>{
    return ((previous.concat(current.preRequisite)))
  }, [])) 
}

function CertificateWrapper(props) {
  const [vis, setVis] = useState(false);
  const [selectCerts, setSelectCerts] = useState(['','','']);
  const [visDegree, setVisDegree] = useState(false);
  const style={
    backgroundColor: "white",
    margin: "20px",
  }

  const handleSelectCerts = (CertificateSelectorArr) => {
    setSelectCerts(CertificateSelectorArr);
    setVisDegree(false);
  }

  const Expander = () => {
    setVisDegree(true);
    console.log(getDegrees(selectCerts[0], selectCerts[1], selectCerts[2]));
    setVis(true);
  }

  useEffect(()=>{
    console.log("only on refresh");
  });

  return (
    <div style={style}>
      <ExpansionPanel expanded={selectCerts[0]!=="" && selectCerts[1]!=="" && selectCerts[2]!=="" && vis} style={{border: "2px solid #07294d", borderRadius:"15px"}}> 
        <ExpansionPanelSummary
          expandIcon={(selectCerts[0]==="" || selectCerts[1]==="" || selectCerts[2]==="")? <div></div> :
          <Tooltip title="Show More" arrow>
            <button onClick={()=>{setVis(!vis)}} style={{backgroundColor: "#07294d"}}>
              <ExpandMoreIcon />
            </button>
          </Tooltip>
          }
          style={{backgroundColor: "white"}}
        >
          <CertificateSelector count={props.count} Expander={Expander} handleSelectCerts={handleSelectCerts}/>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <div>
          <table data-role="table" data-mode="reflow" class="ui-responsive">
            <tbody>
              <tr>
                <td style={{width: "250px", border:"2px solid #07294d", borderRadius:"15px"}}>
                  <table data-role="table" data-mode="reflow" class="ui-responsive">
                    <tbody>
                      <tr class="sub-header">
                        <th>Pre-reqs</th>
                      </tr>
                      <tr><td>
                      {
                        FindPreqs(selectCerts[0]).filter((m)=>(m!=="")).map((m, index) => {
                          return <FormControlLabel key = {index}
                          control={<GreenCheckbox checked={props.hasCSBackground} />}
                          label={m}/>  
                        })
                      }
                      </td></tr>
                    </tbody>
                  </table>
                </td>
                <td style={{width: "250px", border:"2px solid #07294d", borderRadius:"15px"}}> 
                <table data-role="table" data-mode="reflow" class="ui-responsive">
                    <tbody>
                    <tr class="sub-header">
                        <th>Pre-reqs</th>
                      </tr>
                      <tr><td>
                      {
                        FindPreqs(selectCerts[1]).filter((m)=>(m!=="")).map((m, index) => {
                          return <FormControlLabel key = {index}
                          control={<GreenCheckbox checked={props.hasCSBackground} />}
                          label={m}/>  
                        })
                      }
                      </td></tr>
                    </tbody>
                  </table>
                </td>
                <td style={{width: "250px", border:"2px solid #07294d", borderRadius:"15px"}}> 
                <table data-role="table" data-mode="reflow" class="ui-responsive">
                    <tbody>
                      <tr class="sub-header">
                        <th>Pre-reqs</th>
                      </tr>
                      <tr><td>
                      {
                        FindPreqs(selectCerts[2]).filter((m)=>(m!=="")).map((m, index) => {
                          return <FormControlLabel key = {index}
                          control={<GreenCheckbox checked={props.hasCSBackground} />}
                          label={m}/>  
                        }) 
                      }
                      </td></tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
          <div style={{display:(visDegree && selectCerts[0]!=="" && selectCerts[1]!=="" && selectCerts[2]!=="")?
          "block":"none"}}>
          <table data-role="table" data-mode="reflow" class="ui-responsive" style={{width: "865px" ,border:"2px solid #07294d", borderRadius:"15px", marginTop: "15px", marginLeft: "50px"}}>
            <tbody>
              <tr><th>Degrees</th></tr>
              <tr>
                <td>
                <ul>
                  {
                    getDegrees(selectCerts[0], selectCerts[1], selectCerts[2]).map((deg, index) => {
                    return <li key={index}> <b>{deg}</b> <i style={{fontSize:"15px"}}><b style={{color:"red"}}>**</b>(Must Have Certificate: {getMustHave(deg)})</i></li>
                    })
                  }
                </ul>
                </td>
              </tr>
            </tbody>
          </table>
          </div>
          </div>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}
//export default CertificateSelector;
export default CertificateWrapper;
