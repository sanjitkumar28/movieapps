import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../redux/reducer';
import { Link } from 'react-router-dom';
 const FavuoriteMovie=()=>{
    const moviesList:FavMovieList[]=useSelector((state:RootState)=>state.FavMovieList);
    console.log(moviesList);
    
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
         <div className="cards cardcontainers">
     { 
        moviesList.map((movie:MovieList)=>(
           <div className='moviecardimage'>
            <img src={movie.Poster} alt="..." className='moviecardimage'/>
            <h5 className="movie-title">{movie.Title}</h5>
         </div>
      )
    )
    }  
    </div>
      </>
   
  )
}
export default FavuoriteMovie
