import React from 'react' 
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import App from '../App';
import Rating from './Rating';

export default function Product() {
  return (
    <div className='container mt-4 mb-4'>
      <div className="card">
  <img src="image\download.jpeg" className="card-img-top" alt="..." height={450}/>
  <div className="card-body text-center">
    <h1 className="abc">Gamia Laptop</h1>
    <h5>Rs. 33000/-</h5>
    <p className="card-text">An excellent choice for an awesome gaming Laptop</p>
    <Rating rating="4"/>
  </div>
</div>
    </div>
  )
}
