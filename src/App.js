import React, {useState} from "react";
import UserForm from "./Component/UserForm.js";
import DisplayResult from "./Component/DisplayResult.js";


import "./styles.css";
function App() {
  const [toggle, setToggle] = useState(true);
  const [report, setReport] = useState({});
  const navigator = () => {
    setToggle(!toggle);
  } 
  const setResult = (result) => {
    setReport(result);
  }
  if(toggle) {
    return (
      <div className="app">
        <UserForm navigator = {navigator} setResult = {setResult}/>
      </div>
    );
  }
  else {
    return (
      <div>
        <DisplayResult navigator={navigator} report = {report}/>
      </div>
    )
  }
  
}

export default App;