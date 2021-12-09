import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { login } from "../features/login"
import "../App.css";

const ApplicationForm = () => {
  const [firstname, setFirstname] = useState({});
    const [lastname, setLastname] = useState({});
      const [choose, setChoose] = useState({});


const dispatch = useDispatch()

const handleSubmit = (e) => {
  e.preventDefault();

  dispatch(login({
    firstname: firstname,
    lastname: lastname,
    choose: choose,
    logged:true,
  }));
}

  console.log("[e.target.value]")
  return (
    <div className="">
      <h1>Application Form</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div>
          <label for="firstname">First Name</label>
          <input
            type="text"
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
            class="form-control"
            placeholder="First Name"
          />
        </div>
        <div>
          <label for="lastname">Las Name</label>
          <input
            type="text"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
            class="form-control"
            placeholder="Last Name"
          />
        </div>
        <div>
          <label for="options">Options</label>
          <select
            
            class="form-control"
          >
            <option disabled selected>
              Choose
            </option>
            <option value={choose} onChange={(e) => setChoose(e.target.value)}>Job Advertise</option>
            <option value={choose} onChange={(e) => setChoose(e.target.value)}>Job Markerting</option>
          </select>
        </div>
        <br />
        <div>
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ApplicationForm;
