import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { advertise } from "../features/user.js";

const AdvertisingApplicationForm = () => {
  const [company, setCompany] = useState({});
  const [title, setTitle] = useState({});
  const [address, setAddress] = useState({});
  const [contact, setContact] = useState({});
  const [position, setPosition] = useState({});

  const dispatch = useDispatch();

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(
      advertise({
        company: company,
        title: title,
        address: address,
        contact: contact,
        position: position,
      })
    );
  };



  return (
    <div className="AdvertisingApplicationFormBody">
      <h1>Organization Information</h1>
      <form onSubmit={onSubmit}>
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="firstname">Company Name</label>
            <input
              type="text"
              class="form-control"
              placeholder="Company Name"
              value={company.company}
              onChange={(event) => setCompany(event.target.value)}
            />
          </div>
          <div class="form-group col-md-6">
            <label for="lastname">Job Title</label>
            <input
              type="text"
              class="form-control"
              value={title.title}
              placeholder="Job Title"
              onChange={(event) => setTitle(event.target.value)}
            />
          </div>
          <div class="form-group col-md-6">
            <label for="inputAddress">Address</label>
            <input
              type="text"
              class="form-control"
              placeholder="1234 Main St"
              value={address.address}
              onChange={(event) => setAddress(event.target.value)}
            />
          </div>
          <div class="form-group col-md-6">
            <label for="inputContact">Contact Number</label>
            <input
              type="number"
              class="form-control"
              placeholder="Contact Number"
              value={contact.contact}
              onChange={(event) => setContact(event.target.value)}
            />
          </div>
          <div class="form-group col-md-6">
            <label for="inputPosition">Position</label>
            <input
              type="text"
              class="form-control"
              placeholder="Position"
              value={position.position}
              onChange={(event) => setPosition(event.target.value)}
            />
          </div>
        </div>

        <br />
        <button type="submit" class="btn btn-primary">Adertise</button>
      </form>
    </div>
  );
};

export default AdvertisingApplicationForm;
