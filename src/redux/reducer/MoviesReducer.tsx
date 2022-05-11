import { Action } from "redux";
import { actionTypes } from "../constants/action-types";
const initialState={
    movies:[]
}
export default function moviesReducer(state=initialState, action:any) {
    if(action.type==actionTypes.SET_MOVIES){
        console.log('dispatch');
        
        return {...state,movies:action.payload}
    }
    else{
        return state;
    }
  }