import React, { Component } from "react";
import Tumi from "../Images/img_497174.png.crdownload";
import Navbar from "./Navbar";
const JobList = () => {
  return (
    <div>
      <Navbar />
      
      <h1>Job Vacancy List</h1>;
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Company Name</th>
            <th scope="col">Job Title</th>
            <th scope="col">Address</th>
            <th scope="col">Contact Number</th>
            <th scope="col">Position</th>
            <th scope="col">Select</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">hkjKJjk</th>
            <td>dkfunvduif</td>
            <td>jbjvdkj</td>
            <td>@kjfnvekjf</td>
            <td>@kjfnvekjf</td>
            <td>
              <button type="submit" class="btn btn-primary">
                {" "}
                Select <img style={{ height: "20px" }} src={Tumi} alt="" />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default JobList;
