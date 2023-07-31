import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

import Rating from './Rating';
import { Link } from 'react-router-dom';

export default function Newproduct() {
    return (
        <div className='container-fluid mt-2 bg-dark'>
            <div className='row'>
                <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="image\3.webp" className="d-block w-100" alt="..." height={450} />
                        </div>
                        <div className="carousel-item">
                            <img src="image\2.webp" className="d-block w-100" alt="..." height={450} />
                        </div>
                        <div className="carousel-item">
                            <img src="image\1.png" className="d-block w-100" alt="..." height={450} />
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
            </div>
            <div><h1 class="text-center bg-info mt-5" id="Week1">React Week-3 and Week-4 work</h1>
                </div>
            <div className='row my-4 text-center'>
                <div className='col-md-4'>
                <div className="card">
                <div class="card-body">
                    <h5 class="card-title">First component</h5>
                    <p class="card-text">Task-1.</p>
                    <Link className="btn btn-primary" to='/firstComponent'>Click</Link>
                </div>
                </div>
                </div>
                <div className='col-md-4'>
                <div className="card">
                <div class="card-body">
                     <h5 class="card-title">Object Component</h5>
                     <p class="card-text">Print the text with array and object.</p>
                     <Link className="btn btn-primary" to='/demo22'>Click</Link>
                </div>
                </div>
                </div>
                <div className='col-md-4'>
                <div className="card">
                <div class="card-body">
                    <h5 class="card-title">Evalution</h5>
                    <p class="card-text">Evalute the task with condition operator.</p>
                    <Link className="btn btn-primary" to='/algebric'>Click</Link>
                </div>
                </div>
                </div>
            </div>
            <div className='row mb-4 text-center'>
                <div className='col-md-4'>
                <div className="card">
                <div class="card-body">
                <h5 class="card-title">Bootstrap Apply </h5>
                    <p class="card-text">First task of bootstrap.</p>
                    <Link className="btn btn-primary" to='/bootstrap'>Click</Link>
                </div>
                </div>
                </div>
                <div className='col-md-4'>
                <div className="card">
                <div class="card-body">
                    <h5 class="card-title">Product Profile</h5>
                    <p class="card-text">Task for making product interface.</p>
                    <Link className="btn btn-primary" to='/diffproduct'>Click</Link>
                </div>
                </div>
                </div>
                <div className='col-md-4'>
                <div className="card">
                <div class="card-body">
                    <h5 class="card-title">Gallery</h5>
                    <p class="card-text">Making a gallery with react.</p>
                    <Link className="btn btn-primary" to='/gallery1'>Click</Link>
                </div>
                </div>
                </div>
            </div>
            <div className='row mb-4 text-center'>
                <div className='col-md-4'>
                <div className="card">
                <div class="card-body">
                    <h5 class="card-title">In linecss</h5>
                    <p class="card-text">Apply a inline css i react.</p>
                    <Link className="btn btn-primary" to='/inlinecss'>Click</Link>
                </div>
                </div>
                </div>
                <div className='col-md-4'>
                <div className="card">
                <div class="card-body">
                    <h5 class="card-title">Another Product Task</h5>
                    <p class="card-text">Task for making product interface.</p>
                    <Link className="btn btn-primary" to='/product'>Click</Link>
                </div>
                </div>
                </div>
                <div className='col-md-4'>
                <div className="card">
                <div class="card-body">
                    <h5 class="card-title">Counter Component</h5>
                    <p class="card-text">Making a counter component in react.</p>
                    <Link className="btn btn-primary" to='/countercomp'>Click</Link>
                </div>
                </div>
                </div>
            </div>
            <div className='row mb-4 text-center'>
                <div className='col-md-4'>
                <div className="card">
                <div class="card-body">
                    <h5 class="card-title">Like/Dislike</h5>
                    <p class="card-text">Show the like dislike working.</p>
                    <Link className="btn btn-primary" to='/likedislike'>Click</Link>
                </div>
                </div>
                </div>
            </div>
            <section className="">
      {/* Footer */}
      <footer className="text-center text-white" style={{ backgroundColor: '#0a4275' }}>
        {/* Grid container */}
        <div className="container p-4 pb-0">
          {/* Section: CTA */}
          <section className="">
            <p className="d-flex justify-content-center align-items-center">
              <h3>React portfolio:</h3>
              <h3>Satyam singh</h3>
            </p>
          </section>
          {/* Section: CTA */}
        </div>
        {/* Grid container */}

        {/* Copyright */}
        <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
          © 2023 Copyright:
          <a className="text-white" to="/">Satyam singh</a>
        </div>
        {/* Copyright */}
      </footer>
      {/* Footer */}
    </section>
        </div>
    )
}
