import React, { useState } from "react";
import { useDispatch } from "react-redux";
import AdvertisingApplicationForm from '../Components/AdvertisingApplicationForm'
import { login } from "../features/login"
import { Link } from "react-router-dom";

import "../App.css";

const ApplicationForm = () => {
  const [firstname, setFirstname] = useState();
    const [lastname, setLastname] = useState();
      const [choose, setChoose] = useState();


const dispatch = useDispatch()

const handleSubmit = (e) => {
  e.preventDefault();
if (firstname && lastname && choose !== '') {
  
  dispatch(login({
    firstname: firstname,
    lastname: lastname,
    choose: choose,
    loggedIn:true
  }));
}

  if (login.loggedIn !== true) {
    return <AdvertisingApplicationForm/>

  }
  
  
}
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
            onChange={(e) => setChoose(e.target.value)}
            class="form-control"
          >
            <option disabled selected>
              Choose
            </option>
            <option value={choose} >Job Advertise</option>
            <option value={choose} >Job Markerting</option>
          </select>
        </div>
        <br />
        <div>
        <Link disabled to="/advertise" >
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default ApplicationForm;
