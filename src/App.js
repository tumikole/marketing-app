import './App.css';
// import Home from './Components/Home'
import ApplicationForm from './Components/ApplicationForm'
// import AdvertisingApplicationForm from './Components/AdvertisingApplicationForm'
// import JobList from './Components/JobList'

// import AppliedList from './Components/AppliedList'
// import {BrowserRouter as Router, useRoutes} from "react-router-dom"
// import './Css/navbar.css'


// const Header =  () => {
//   let Routes = useRoutes([
// { path:"/home", exact: true, element:<Home /> },
// { path:"registration", element:<ApplicationForm /> },
// { path:"/advertise", element:<AdvertisingApplicationForm /> },
// { path:"/vacancies", element:<JobList /> },
// { path:"/applied", element:<AppliedList /> },
//   ])
// return Routes
// }

function App() {
  return (
    <div className="App">
  
      <ApplicationForm />
   
    </div>
  );
}

export default App;
