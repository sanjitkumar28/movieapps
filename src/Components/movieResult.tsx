import React,{useState}from 'react'
import SearchMovie from './SearchMovie'
import { useSelector } from 'react-redux'
import { RootState } from '../redux/reducer'
import { useDispatch } from 'react-redux'
import FavMovie from '../redux/reducer/FavMovieReducer'
import { addFavMovie } from '../redux/actions/movieAction'
import './movieResult.css'
import axios from 'axios'
import { Link } from 'react-router-dom'
const MovieResult=()=>{
    const moviesList:MovieList[]=useSelector((state:RootState)=>state.MoviesList.movies);
    const dispatch=useDispatch();
    const[hover,setHover]=useState(' ');
   const handleClick=(movie:MovieList)=>{
    const responsedata=axios.get(`http://www.omdbapi.com/?i=${hover}&apikey=333bea2b`)
     .then((response)=>{
        console.log(response.data);
       
     })
    //  dispatch(FavMovie())
    console.log(movie);
    dispatch(addFavMovie(movie));
   }
  return (
    <>
     <div className="cards cardcontainers">
    {
      
        moviesList.map((movie:MovieList)=>(
           <div className='moviecardimage' onMouseEnter={()=>{setHover(movie.imdbID)}} onMouseLeave={()=>{setHover('')}}>
            <img src={movie.Poster} alt="..." className='moviecardimage'/>
            <h5 className="movie-title">{movie.Title}</h5>
            <div className="button-wrapper" style={{display:'flex',width:'100%',justifyContent:'center'}}>  
                    {
                     hover==movie.imdbID?
                     <a className="btn btn-primary moviesbutton" onClick={()=>handleClick(movie)}>Add to Favourites</a>
                     :<p></p>
                    //  <Link to="/favourite" className="btn btn-primary moviesbutton" onClick={()=>handleClick(movie)}>Add to Favourites</Link>:<p></p>
                    }
                   </div>
         </div>
      )
    )
    }
    </div>
    </>
   
  )
}
export default MovieResult
