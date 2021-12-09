import React from "react";
import {useSelector} from "react-redux"
const JobList = () => {
  const user  = useSelector((state) => state.user.value);
  return (
    <div>
      
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

          {user.map((user, id) => {

            return (
          <tr key={id}>
            
            <th scope="row">{user.company}</th>
            <td>{user.title}</td>
            <td>{user.address}</td>
            <td>{user.contact}</td>
            <td>{user.position}</td>

            <td>
              <button type="submit" class="btn btn-primary">
                Select 
              </button>
            </td>
          </tr>


            )
          })}
        </tbody>
      </table>
    </div>
  );
};

export default JobList;
