import axios from 'axios';
import { setAlert } from "./alert";

import { 
    GET_PROFILE, 
    PROFILE_ERROR
} from './types'

// // Get current users profile
// export const getCurrentProfile = () => async dispatch =>  {
//     try {
//         const res = axios.get("http://localhost:5000/api/profile/me");

//         dispatch({
//             type: GET_PROFILE,
//             payload: res.data 
//         })
//     } catch (err) {
//         dispatch({
//             type: PROFILE_ERROR,
//             payload: { msg: err.response.statusText, status: err.response.status}
//         })
//     }
// }

//Get Current user Profile
export const getCurrentProfile = () => async dispatch => {
    try {
        const res = await axios.get('/api/profile/me');
        dispatch({
            type: GET_PROFILE,
            payload: res.data
        })
    } catch (error) {
        dispatch({
          type: PROFILE_ERROR,
          payload: {
            msg: error.response.statusText,
            status: error.response.status,
          },
        });
    }
}