import React, { Component } from 'react';
import Navbar from './Navbar'
const  AppliedList = () => {
    return (
        <div>  
                            <Navbar />
 
            <div class="card" style={{width: "25rem"}}>
            <h1>Applied Vecancy</h1>
  
  <div class="card-body">
    <ul>
<li>Company Name:</li>
<li>Job Title:</li>
<li>Address:</li>
<li>Contact Number:</li>
<li>Position:</li>


    </ul>
  </div>
</div>
        </div>
    );
}

export default AppliedList