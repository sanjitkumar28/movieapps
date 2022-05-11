import axios from 'axios'
import React from 'react'
import { useState,ChangeEvent } from 'react'
import MovieResult from './movieResult'
import { useDispatch } from 'react-redux'
import { setMovie } from '../redux/actions/movieAction'
import { useSelector} from 'react-redux'
import { RootState } from '../redux/reducer'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { apiRequest } from '../redux/actions/movieAction'

const MovieHeader=()=>{
     const[movieName,setmovieName]=useState('harry')
     const dispatch=useDispatch();

     const handleOnChange=(event:React.ChangeEvent<HTMLInputElement>)=>{
         setmovieName(event.target.value);
         console.log(movieName);
     }

    const handleSubmit=(event: React.MouseEvent<HTMLElement>)=>{
     event.preventDefault();
     const url=`http://www.omdbapi.com/?s=${movieName}&apikey=333bea2b`
     dispatch(apiRequest(url))
    }

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
    <form className="d-flex">
      <input className="form-control" type="search" placeholder="Search" aria-label="Search" onChange={handleOnChange}/>
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={handleSubmit}>Search</button>
    </form>
  </div>
</nav>
 <MovieResult/>
</>
  )  
}
export default MovieHeader
