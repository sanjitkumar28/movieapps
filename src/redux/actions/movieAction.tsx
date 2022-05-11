import { actionTypes } from "../constants/action-types";
export const setMovie=(movie:MovieList)=>{
  return{
      type:actionTypes.SET_MOVIES,
      payload:movie
  }
}
export const addFavMovie=(movie:MovieList)=>{
  return{
    type:actionTypes.ADD_FAV,
    payload:movie
  }
}
export const apiRequest = (url:string) => ({
  type: actionTypes.API_REQUEST,
  payload: url,
});