import React from 'react';
import {Link} from 'react-router-dom';
import { Carousel } from 'bootstrap';
import image1 from '../images/future2.1.jpg'
import image4 from '../images/quote1.jpg'
import inter from '../images/intermediate.jpg'
import poly from '../images/polytechnic.jpg'
import iti from '../images/iti.jpg'
import gov from '../images/govt.avif'
import para from '../images/para.jpg'
import short from '../images/Short-Term-Courses.jpg'
import what2 from '../images/whatnext2.jpg'
import pathway from '../images/pathway.jpg' 
function Home() {
    return ( 
        <div className='App'>
          

{/* <div id="carouselExampleControls" className="carousel slide " data-bs-ride="carousel active">
  <div className="carousel-inner">
    <div className="carousel-item ">
      <img src={image1} className=" w-100" />
    </div>
    <div className="carousel-item ">
      <img src={image4} className=" w-100" />
    </div>
    <div className="carousel-item">
      <img src={image2} className="w-100" />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span> 
  </button>
</div> */}




<div id="carouselExampleControls" className="carousel slide pb-3" data-bs-ride="carousel active">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={pathway} className="w-100 h-100" alt="..."/>
    </div>
    <div className="carousel-item ">
      <img src={image4} className=" w-100" alt="..."/>
    </div>
    <div className="carousel-item ">
      <img src={image1} className=" w-100" alt="..."/>
    </div>

  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div> 

<div className='container border border-dark bg-warning'>
    <p className='text-left'><span className='display-6'><b>W</b></span>e are at the dawn of a new era of massively amplified learning, 
    creativity and inventiveness. We now have the technology to make education accessible to 
    everyone in the world and the adaptable digital 
    learning tools to personalize the way everyone learns and works.But this new era requires 
    a new emphasis on lifelong learning and creativity. Today’s students must become self-directed lifelong learners 
    because in the fast-paced digital economy,
     it is a necessity to be constantly adapting by learning new knowledge and skills.</p>
</div>
<div>
    <p className='display-6 pt-5'><b>What stream to be taken after 10th Standard Examination?</b></p>
</div>


<div class="card-group gap-5 mt-5 container">
          <div class="card">
            <img class="card-img-top" src={inter} alt="..."/>
            <div class="card-body">
              <h6 class="card-title">INTERMEDIATE</h6>
           <Link className="btn btn-primary active"to="/intermediate">View</Link> 
            </div>
            <div class="card-footer">
              <small class="text-muted">2 Years</small>
            </div>
          </div>
          <div class="card">
            <img class="card-img-top" src={poly} alt="..."/>
            <div class="card-body">
              <h6 class="card-title">POLYTECHNIC</h6>
              <Link className="active btn btn-primary"to="/polytechnic">View</Link> 
            </div>
            <div class="card-footer">
              <small class="text-muted">3 Years</small>
            </div>
          </div>
          <div class="card">
            <img class="card-img-top" src={iti} alt="..."/>
            <div class="card-body">
              <h6 class="card-title">ITI</h6>
              <Link className="active btn btn-primary"to="/iti">View</Link> 
            </div>
            <div class="card-footer">
              <small class="text-muted">2 Years</small>
            </div>
          </div>
          
          

        </div>
    

        <div class="card-group gap-5 mt-5 container"> 
        <div class="card">
            <img class="card-img-top" src={para} alt="..."/>
            <div class="card-body">
              <h6 class="card-title">PARAMEDICAL</h6>
           <Link className="btn btn-primary active"to="/paramedical">View</Link> 
            </div>
            <div class="card-footer">
              <small class="text-muted">3 Years</small>
            </div>
          </div>

          <div class="card">
            <img class="card-img-top" src={short} alt="..."/>
            <div class="card-body">
              <h6 class="card-title">SHORT TERM COURSES</h6>
              <Link className="active btn btn-primary"to="/shorttermcourses">View</Link> 
            </div>
            <div class="card-footer">
              <small class="text-muted">3 Years</small>
            </div>
          </div>
          
          <div class="card">
            <img class="card-img-top" src={gov} alt="..."/>
            <div class="card-body">
              <h6 class="card-title">GOVRNMENT JOBS</h6>
              <Link className="active btn btn-primary"to="/govtjobs">View</Link> 
            </div>
            <div class="card-footer">
              <small class="text-muted">Accordingly</small>
            </div>
          </div>
          
          
        </div>
            

        </div>
     );
}

export default Home;