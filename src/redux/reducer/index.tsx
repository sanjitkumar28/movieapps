import {combineReducers} from "redux"
import moviesReducer from "./MoviesReducer"
import FavMovie from "./FavMovieReducer";
const reducer=combineReducers({
    MoviesList:moviesReducer,
    FavMovieList:FavMovie
})
export type RootState = ReturnType<typeof reducer>;
export default reducer;
