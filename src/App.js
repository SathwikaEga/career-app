import './App.css';
import React from 'react';
import {Link,Route,Routes} from 'react-router-dom'
import Intermediate from './components/Intermediate';
import Polytechnic from './components/Polytechnic';
import Iti from './components/Iti';
import Paramedical from './components/Paramedical';
import ShortTermCourses from './components/ShortTermCourses';
import GovtJobs from './components/GovtJobs';
import Home from './components/Home';
import Engineering from './components/Engineering';
import Medical from './components/Medical';
import Degree from './components/Degree';
import Teaching from './components/Teaching';
import Nda from './components/Nda';
import Others from './components/Others';
import Cse from './components/Cse';
import Ece from './components/Ece';
import It from './components/It';
import Civil from './components/Civil';
import Mechanical from './components/Mechanical';
import Eee from './components/Eee';


function App() {
  return (
    <div className="text-center bg-light App">
  
  {/* Navbar */}
<nav className="navbar navbar-expand-lg bg-dark navbar-dark">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/home">CareerPath</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
        </li>
        {/* <li className="nav-item">
          <Link className="nav-link" to="home">AboutUs</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link ">ContactUs</Link>
        </li> */}
      </ul>
    </div>
  </div>
</nav>


  {/* Defining routes */}
  
  <Routes>
    <Route path='/'element={<Home/>}></Route>
    <Route path='/home'element={<Home/>}></Route>
    <Route path='/intermediate'element={<Intermediate/>}></Route>
    <Route path='/engineering' element={<Engineering/>}></Route>
         <Route path='/cse'element={<Cse/>}></Route>
        <Route path='/ece'element={<Ece/>}></Route>
        <Route path='/it'element={<It/>}></Route>
        <Route path='/civil'element={<Civil/>}></Route>
        <Route path='/mechanical'element={<Mechanical/>}></Route>
        <Route path='/eee'element={<Eee/>}></Route>

      <Route path='/medical'element={<Medical/>}></Route>
      <Route path='/degree'element={<Degree/>}></Route>
      <Route path='/teaching'element={<Teaching/>}></Route>
      <Route path='/nda'element={<Nda/>}></Route>
      <Route path='/others'element={<Others/>}></Route>

    <Route path='/polytechnic'element={<Polytechnic/>}></Route>
    <Route path='/iti' element={<Iti/>}></Route>
    <Route path='/paramedical' element={<Paramedical/>}></Route>
    <Route path='/shorttermcourses'element={<ShortTermCourses/>}></Route>
    <Route path='/govtjobs'element={<GovtJobs/>}></Route>


  </Routes>

  <div class="card mt-5  ms-0 me-0 w-100">
            <h5 class="card-header">About Us</h5>
            <div class="card-body bg-dark text-light">
              <h5 class="card-title">VNRVJIET</h5>
              <p class="card-text">Contributing to the college by Computer Science and Engineering and Internet Of Things Students.</p>
              <Link className='btn btn-primary active' to="/home">Go to Home</Link>
            </div>
          </div>


</div>

    
  );
}

export default App;
