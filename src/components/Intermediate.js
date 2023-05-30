import React from 'react';
import {Link,Outlet} from 'react-router-dom'
import engi from '../images/engineer.jpg'
import medi from '../images/medical.webp'
import degree from '../images/degree.jpg'
import nda from '../images/nda.jpg'
import others from '../images/others.webp'
import teach from '../images/teaching.webp'
function Intermediate() {
    return ( <div>
        <p className='display-6'><b>INTERMEDIATE</b></p>
<p>General Courses (Science and Humanities) along with Languages 
  (English, Telugu, Hindi, Sanskrit, French, Arabic) It is a two years course.</p>
        <div class="card-group gap-5 mt-5 container ">
          <div class="card">
            {/* <img class="card-img-top" src={inter} alt="..."/> */}
            <div class="card-body">
              <h5 class="card-title">SCIENCE</h5>
              <div >
              <ul>
                <li>Maths,Physics and Chemistry(MPC)</li>
                <li>Biology(Botany, Zoology),Physics and Chemistry(BiPC)</li>
                <li>Library Science</li>
                </ul>
                </div>
           {/* <Link className="btn btn-primary active"to="/intermediate">View</Link>  */}
            </div>
            <div class="card-footer">
              <small class="text-muted">2 Years</small>
            </div>
          </div>
          <div class="card">
            {/* <img class="card-img-top" src={poly} alt="..."/> */}
            <div class="card-body">
              <h5 class="card-title">COMMERCE</h5>
              {/* <Link className="active btn btn-primary"to="/polytechnic">View</Link>  */}
              <ul>
                <li>Civics, Economics and Commerce(CEC)</li>
              </ul>

            </div>
            <div class="card-footer">
              <small class="text-muted">2 Years</small>
            </div>
          </div>
          <div class="card">
            {/* <img class="card-img-top" src={iti} alt="..."/> */}
            <div class="card-body">
              <h5 class="card-title">ARTS</h5>
              {/* <Link className="active btn btn-primary"to="/iti">View</Link>  */}
              <ul>
                <li>History, Economics and Civics(HEC)</li>
                <li>Mathematics, Economics and Civics(MEC)</li>
              </ul>
            </div>
            <div class="card-footer">
              <small class="text-muted">2 Years</small>
            </div>
          </div>
        </div>



       
    


       <p className='display-6 pt-5'><b>What to take after Intermediate?</b></p>

       
<div class="card-group gap-5 mt-5 container">
          <div class="card">
            <img class="card-img-top" src={engi} alt="..."/>
            <div class="card-body">
              <h5 class="card-title">ENGINEERING</h5>
           <Link className="btn btn-primary active"to="/engineering">View</Link> 
           
            </div>
            <div class="card-footer">
              <small class="text-muted">4 Years</small>
            </div>
          </div>
          <div class="card">
            <img class="card-img-top" src={medi} alt="..."/>
            <div class="card-body">
              <h5 class="card-title">MEDICAL</h5>
              <Link className="active btn btn-primary"to="/medical">View</Link> 
             
            </div>
            <div class="card-footer">
              <small class="text-muted">3 Years</small>
            </div>
          </div>
          <div class="card">
            <img class="card-img-top" src={degree} alt="..."/>
            <div class="card-body">
              <h5 class="card-title">DEGREE</h5>
              <Link className="active btn btn-primary"to="/degree">View</Link> 
              
            </div>
            <div class="card-footer">
              <small class="text-muted">3 Years</small>
            </div>
          </div>
        </div>

        <div class="card-group gap-5 mt-5 container">
          <div class="card w-50">
            <img class="card-img-top" src={teach} alt="..."/>
            <div class="card-body">
              <h5 class="card-title">TEACHING</h5>
           <Link className="btn btn-primary active"to="/teaching">View</Link> 
           
            </div>
            {/* <div class="card-footer">
              <small class="text-muted">4 Years</small>
            </div> */}
          </div>
          <div class="card w-50">
            <img class="card-img-top" src={others} alt="..."/>
            <div class="card-body">
              <h5 class="card-title">OTHERS</h5>
              <Link className="active btn btn-primary"to="/others">View</Link> 
              
            </div>
            {/* <div class="card-footer">
              <small class="text-muted">2 Years</small>
            </div> */}
          </div>
        </div>


       
        <Outlet/>

    </div> );
}

export default Intermediate;