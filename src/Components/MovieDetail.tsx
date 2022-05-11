import React from 'react'
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Moviedetail.css'
export default function MovieDetail() {
  const location = useLocation();
  const data:any=location.state;
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#">MovieApp</a>
       <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
         <span className="navbar-toggler-icon"></span>
       </button>
     <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <Link to="/"  className="nav-link" style={{ color: '#FFF',textDecoration: 'none'}}> Home</Link>
      </li>
      <li className="nav-item">
        <Link to="/favourite"  className="nav-link" style={{ color: '#FFF',textDecoration: 'none'}}> Favourites</Link>
      </li>
    </ul>
  </div>
</nav>

<div className='card cardstyles'>
    <img className='card-img-top' src={data.img} alt={data.title} />
    <div className='card-body'>
         <h4 className='card-title'>{data.title}</h4>
         <h4 className='card-title'>Type:{data.type}</h4>
         <h4 className='card-title'>Year:{data.year}</h4>
 </div>
</div>
    </>
   
     
  )
}
