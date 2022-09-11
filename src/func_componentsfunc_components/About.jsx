import React from 'react'
import { NavLink, Outlet, useNavigate } from 'react-router-dom'

export default function About() {
    let navigate = useNavigate();
    const back = () => {
        navigate("/home");
    }
  return (
    <div className='alert alert-success p-5'>
        <h1>
            Hello from About
        </h1>
        <button className='btn btn-outline-primary mt-5' onClick={back}>Back To Home</button>
        <div className='bg-white mt-5'>
          <div className='container p-5'>
            <div className='row'>
              <div className='col-sm'>
                <ul>
                  <li><NavLink to="lib" className="nav-link">Libarary</NavLink></li>
                  <li><NavLink to="Company" className="nav-link">Company</NavLink></li>
                </ul>
              </div>
              <div className='col-sm'><Outlet></Outlet></div>
            </div>
          </div>
        </div>
    </div>
  )
}
