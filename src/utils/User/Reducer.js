// reducer.js

import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "./Action";


const initialState = {
    loading: false,
    userData: null,
    error: null
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
                userData: action.payload,
                error: null
            };
        case LOGIN_FAILURE:
            return {
                ...state,
                loading: false,
                userData: null,
                error: action.payload
            };
        default:
            return state;
    }
};

export default userReducer;
