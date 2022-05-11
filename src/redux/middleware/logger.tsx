import { actionTypes } from "../constants/action-types";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setMovie } from "../actions/movieAction";

const loggerMiddleWare=(store: any)=>{
    return(next: (arg0: any) => any)=>{
        return(action: any)=>{
          if(action.type===actionTypes.API_REQUEST){
            const responseData=axios.get(action.payload)
            .then((response)=>{
                console.log(response.data.Search);
               next(setMovie(response.data.Search))
            })
          }
          else{
              return next(action);
          }
        }
    }
}
export default loggerMiddleWare