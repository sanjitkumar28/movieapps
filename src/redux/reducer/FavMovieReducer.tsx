import { Action } from "redux";
import { actionTypes } from "../constants/action-types";
// const initialState={
//     favmovies:[]
// }
const FavMovie=(state=[],action:any)=>{
        if(action.type==actionTypes.ADD_FAV){
            console.log('inside fav movies');
            let favmovie=[...state,action.payload]
            return favmovie;
        }
        else{
            return state;
        }
    }
export default FavMovie