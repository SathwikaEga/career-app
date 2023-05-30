import React from 'react';
import cse from '../images/cse.jpg'
import ece from '../images/ece.jpg'
import it from '../images/it.jpg'
import civil from '../images/civil.jpg'
import eee from '../images/eee.jpg'
import mech from '../images/mech.jpg'
import { Link, Outlet } from 'react-router-dom';
function Engineering() {
    return ( <div className='Engineering'>
        <p className='display-6'>ENGINEERING</p>
        <div className='container head'>
        <div className=''>Elgibility     : MPC</div>
        <div>Entrance Tests : EAMCET, JEE, IIT, AIEEE, BITSAT etc...</div>
          </div>
        <div class="card-group gap-5 mt-5 container">
          <div class="card">
            <img class="card-img-top" src={cse} alt="..."/>
            <div class="card-body">
              <h5 class="card-title">CSE</h5>
           
           
            </div>
            <div class="card-footer">
            <Link className="btn btn-primary active"to="/cse">View</Link> 
            </div>
          </div>
          <div class="card">
            <img class="card-img-top" src={ece} alt="..."/>
            <div class="card-body">
              <h5 class="card-title">ECE</h5>
              
             
            </div>
            <div class="card-footer">
            <Link className="active btn btn-primary"to="/ece">View</Link> 
            </div>
          </div>
          <div class="card">
            <img class="card-img-top" src={it} alt="..."/>
            <div class="card-body">
              <h5 class="card-title">IT</h5>
              
              
            </div>
            <div class="card-footer">
            <Link className="active btn btn-primary"to="/it">View</Link>  
            </div>
          </div>
        </div>

        <div class="card-group gap-5 mt-5 container">
          <div class="card">
            <img class="card-img-top" src={civil} alt="..."/>
            <div class="card-body">
              <h5 class="card-title">CIVIL</h5>
           
           
            </div>
            <div class="card-footer">
            <Link className="btn btn-primary active"to="/civil">View</Link> 
            </div>
          </div>
          <div class="card">
            <img class="card-img-top" src={eee} alt="..."/>
            <div class="card-body">
              <h5 class="card-title">EEE</h5>
              
             
            </div>
            <div class="card-footer">
            <Link className="active btn btn-primary"to="/eee">View</Link> 
            </div>
          </div>
          <div class="card">
            <img class="card-img-top" src={mech} alt="..."/>
            <div class="card-body">
              <h5 class="card-title">MECHANICAL</h5>
              
              
            </div>
            <div class="card-footer">
            <Link className="active btn btn-primary"to="/mechanical">View</Link>  
            </div>
          </div>
        </div>
<Outlet/>
    </div> );
}

export default Engineering;