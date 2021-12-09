import "./App.css";
import AdvertisingApplicationForm from "./Components/AdvertisingApplicationForm";
import ApplicationForm from "./Components/ApplicationForm";
import JobList from "./Components/JobList";
import AppliedList from "./Components/AppliedList";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";


function App() {

  return (
    <Router>
<div className="App">
    <Routes>
    <Route path="/" element={<Navigate to="applicationform"/>} />   
     <Route path="/Applicationform/*" element={<ApplicationForm />} />   
      <Route path="/advertise" element={<AdvertisingApplicationForm />} />
      <Route path="/list" element={<JobList />} />
      <Route path="/applied" element={<AppliedList />} />
    </Routes>
    
    </div>
    </Router>
  );
}

export default App;
