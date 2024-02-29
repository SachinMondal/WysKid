import axios from 'axios';
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from './Action';


export const loginUser = (userData) => {
    console.log(userData);
    return async (dispatch) => {
        dispatch(LOGIN_REQUEST());
        try {
            const response = await axios.post('http://localhost:5000/api/v1/user/login', userData);
            console.log("data", response.data);
            dispatch(LOGIN_SUCCESS(response.data));
        } catch (error) {
            dispatch(LOGIN_FAILURE(error.message));
            console.log("error", error);
        }
    };
};
