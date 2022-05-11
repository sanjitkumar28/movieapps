import React,{useState}from 'react'
import SearchMovie from './SearchMovie'
import { useSelector } from 'react-redux'
import { RootState } from '../redux/reducer'
import { useDispatch } from 'react-redux'
import FavMovie from '../redux/reducer/FavMovieReducer'
import { addFavMovie } from '../redux/actions/movieAction'
import { useNavigate } from 'react-router-dom'
import './movieResult.css'
import axios from 'axios'
import { Link } from 'react-router-dom'
const MovieResult=()=>{
  const navigate=useNavigate();
    const moviesList:MovieList[]=useSelector((state:RootState)=>state.MoviesList.movies);
    const dispatch=useDispatch();
    const[hover,setHover]=useState(' ');

   const handleClick=(movie:MovieList)=>{
    console.log('movie',movie);
    dispatch(addFavMovie(movie));
   }
   const handleMovieClick=(event:React.MouseEvent<HTMLElement>)=>{
    navigate('/details')
   }
  return (
    <>
     <div className="cards cardcontainers">
    {
      
        moviesList.map((movie:MovieList)=>(
           <div className='moviecardimage' onMouseEnter={()=>{setHover(movie.imdbID)}} onMouseLeave={()=>{setHover('')}}  >
            <img src={movie.Poster} alt="..." className='moviecardimage' onClick={()=> navigate('/details',{state:{img:movie.Poster,title:movie.Title,year:movie.Year,type:movie.Type}})}/ >
            <h5 className="movie-title">{movie.Title}</h5>
            <div className="button-wrapper" style={{display:'flex',width:'100%',justifyContent:'center'}}>  
                    {
                     hover==movie.imdbID?
                     <a className="btn btn-primary moviesbutton" onClick={()=>handleClick(movie)}>Add to Favourites</a>
                     :<p></p>
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
