// const loggerMiddleWare=(store: { getState: () => any; })=>{
//     return(next: (arg0: any) => any)=>{
//         return(action: any)=>{
//             console.log('state',store.getState());
//             console.log('action',action);
//             const res=next(action);
//             console.log('next state',store.getState());
//             return res;
//         }
//     }
// }
import { actionTypes } from "../constants/action-types";
import axios from "axios";
import { useDispatch } from "react-redux";

import { setMovie } from "../actions/movieAction";
// export default loggerMiddleWare

const loggerMiddleWare=({dispatch}:any)=>{
    // const dispatch=useDispatch();
    return(next: (arg0: any) => any)=>{
        return(action: any)=>{
          if(action.type===actionTypes.API_REQUEST){
            const responseData=axios.get(action.payload)
            .then((response)=>{
                console.log(response.data.Search);
                dispatch(setMovie(response.data.Search))
                // store.dispatch(setMovie(response.data.Search))
            })
          }
        }
    }
}
export default loggerMiddleWare