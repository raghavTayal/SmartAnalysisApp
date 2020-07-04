import React from "react";
export default function displayResult(props) {
  const obj = props.report["report"];
  console.log(obj);
  window.onpopstate = () => {
    props.navigator();
  };
  const reportItems = Object.entries(obj).map(([key, value]) => {
    return (
      <div id="params" key={key.toString()}>
        {key} : {value.toString()}
      </div>
    );
  });
  return (
    <div id="report">
      <div id="row">
        <div>
          <label>Name : </label>
          <label>{props.report["name"]}</label>
        </div>

        <div>
          <label>Sex : </label>
          <label>{props.report["sex"]}</label>
        </div>
      </div>
      <div id="row">
        <div>
          <label>Contact : </label>
          <label>{props.report["contact_no"]}</label>
        </div>
        <div>
          <label>Age : </label>
          <label>{props.report["age"]}</label>
        </div>
      </div>
      <div id="results">
        <h2>Report</h2>
        {reportItems}
      </div>
    </div>
  );
}
