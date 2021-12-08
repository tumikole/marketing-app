import React, { useState } from "react";
import "../App.css";

const ApplicationForm = () => {
  const [registrationForm, setRegistrationForm] = useState({
    firstname: "",
    lastname: "",
    options: "",
  });
  console.log("[e.target.value]")
  return (
    <div className="">
      <h1>Application Form</h1>
      <form>
        <div>
          <label for="firstname">First Name</label>
          <input
            type="text"
            value={registrationForm.firstname}
            onChange={(e) => setRegistrationForm(e.target.value)}
            class="form-control"
            placeholder="First Name"
          />
        </div>
        <div>
          <label for="lastname">Las Name</label>
          <input
            type="text"
            value={registrationForm.lastname}
            onChange={(e) => setRegistrationForm(e.target.value)}
            class="form-control"
            placeholder="Last Name"
          />
        </div>
        <div>
          <label for="options">Options</label>
          <select
            onChange={(e) => setRegistrationForm(e.target.value)}
            class="form-control"
          >
            <option disabled selected>
              Choose
            </option>
            <option value={registrationForm.option}>Job Advertise</option>
            <option value={registrationForm.option}>Job Markerting</option>
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
