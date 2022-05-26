import React, { Fragment, useState } from "react";
import axios from "axios";
import "../components/addUser.css";

function AddUser() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [registrationType, setRegistrationType] = useState("");

  const userSubmit = async (e) => {
    e.preventDefault();

    const myForm = new FormData();
    myForm.set("name", name);
    myForm.set("email", email);
    myForm.set("phoneNumber", phoneNumber);
    myForm.set("registrationType", registrationType);
    console.log(myForm);

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(
      "http://localhost:4000/api/v1/user",
      myForm,
      config
    );
    console.log(data);

    alert("user added successfully");
  };

  return (
    <Fragment>
      <div className="addUserContainer">
        <form
          className="addUserForm"
          encType="multipart/form-data"
          onSubmit={userSubmit}
        >
          <h1>Event Registration</h1>

          <div>
            <input
              type="text"
              required
              placeholder="User Name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div>
            <input
              type="email"
              required
              name="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <input
              type="tel"
              required
              name="phoneNumber"
              placeholder="Phone Number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>

          <div onChange={(e) => setRegistrationType(e.target.value)}>
            {/* <label htmlFor="interest">Interest </label> */}
            <select name="interest" id="interest">
              <option value="">Registration Type</option>
              <option value="virtual">Virtual</option>
              <option value="offline">Offline</option>
            </select>
          </div>

          <input type="submit" id="addUserBtn" value="Add User" />
        </form>
      </div>
    </Fragment>
  );
}

export default AddUser;
