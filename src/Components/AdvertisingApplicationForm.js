import React, { Component } from 'react';
import Navbar from './Navbar'

const  AdvertisingApplicationForm = () => {

        return (
            <div className="AdvertisingApplicationFormBody">
                <Navbar />

                <h1>Organization Information</h1>
                <form>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="firstname">Company Name</label>
      <input type="text" class="form-control" placeholder="Company Name"/>
    </div>
    <div class="form-group col-md-6">
      <label for="lastname">Job Title</label>
      <input type="text" class="form-control"  placeholder="Job Title"/>
    </div>
      <div class="form-group col-md-6">
      <label for="inputAddress">Address</label>
    <input type="text" class="form-control"  placeholder="1234 Main St"/>
    </div>
    <div class="form-group col-md-6">
      <label for="inputContact">Contact Number</label>
      <input type="number" class="form-control"  placeholder="Contact Number"/>
    </div>
    <div class="form-group col-md-6">
      <label for="inputPosition">Position</label>
      <input type="text" class="form-control"  placeholder="Position"/>
    </div>
  </div>

 <br />
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
            </div>
        );
    }


export default AdvertisingApplicationForm;