import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

export default function Navlaout() {
  return (
    <>
    <div>
    <nav className="navbar navbar-expand-lg navbar-light bg-primary ">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/home">Satyam React Portfolio</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link active" aria-current="page" to="/newproduct">React task</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link active" aria-current="page" to="/about">About Us</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
    <Outlet/>
    </>

  )
}
