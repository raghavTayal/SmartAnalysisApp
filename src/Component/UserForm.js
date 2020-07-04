import React, { useState, Fragment } from "react";
import "./style.css";
import axios from "axios";

export default function UserForm(props) {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [contact, setContact] = useState(0);
  const [picture, setPicture] = useState(null);
  const [sex, setSex] = useState("Male");
  let response = null;
  const inputHandler = e => {
    // e.preventDefault();
    if (e.target.id === "username") {
      setName(e.target.value);
    } else if (e.target.id === "age") {
      setAge(e.target.value);
    } else if (e.target.id === "contact") {
      setContact(e.target.value);
    } else {
      setSex(e.target.value);
    }
  };

  // const onDrop = (picture) => {
  //   setPicture(picture);
  //   console.log(picture);
  // };
  const submit = async e => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("name", name);
    formData.append("age", age);
    formData.append("sex", sex);
    formData.append("contact_no", contact);
    formData.append("image", picture);

    // let response = await fetch(
    //   `https://floating-retreat-64345.herokuapp.com/?name=raghav&age=24&sex=Male&contact_no=9992186348`,
    //   {
    //     method: "POST",
    //     body: formData,
    //   }
    // );
    // response = response.json();

    response = await axios.post(
      `https://floating-retreat-64345.herokuapp.com/`,
      formData
    );
    response = response["data"];
    console.log(response);
    props.setResult(response);
    props.navigator();
  };

  const fileChangedHandler = async e => {
    await setPicture(e.target.files[0]);
  };
  return (
    <div id="form">
      <label> Name</label>
      <input id="username" value={name} onChange={inputHandler} />
      <label> Age</label>
      <input id="age" value={age} onChange={inputHandler} />
      <label> Sex </label>
      <select id="sex" onChange={inputHandler}>
        <option value="Male">M</option>
        <option value="Female">F</option>
      </select>
      <label> Contact no.</label>
      <input id="contact" value={contact} onChange={inputHandler} />
      {/* <ImageUploader
        withIcon={true}
        buttonText="Choose images"
        onChange={onDrop}
        imgExtension={[".jpg", ".gif", ".png", ".gif"]}
      /> */}
      <input type="file" onChange={fileChangedHandler} />
      {/* {console.log(picture)} */}
      <button className="btn" onClick={submit} type="submit">
        Submit
      </button>
    </div>
  );
}
