import "./App.css";
import CertificateWrapper from "./Components/CertificateSelector";
import React, {useEffect, useState} from "react";
import AddIcon from '@material-ui/icons/Add';
function App() {
  const [count, setCount] = useState(1)
  
  const onClick = () => {
    setCount(count + 1)
  }
  return (
    <div className="App">
      <div className="header">
        <img
          src="https://www.cs.drexel.edu/~dmz38/CCILogo.png"
          alt="Drexel Logo"
          className="logo"
        ></img>
        <button onClick={onClick}><AddIcon /></button>
      </div>
      {[...Array(count).keys()].map((c, index) => {
        return(<CertificateWrapper count={index} key = {index} />)
      })}
    </div>
  );
}

export default App;
