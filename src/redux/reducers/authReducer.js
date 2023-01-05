import { ActionTypes } from "../constants/action-types";

const initialState = {
    loggedin: false,
    token: null
}

export const authReducer = (state = initialState, { type, payload }) => {
    switch (type)
    {
        case ActionTypes.LOGGEDIN:
            return {
                ...state,
                ...state.loggedin =true
            }
        case ActionTypes.ADD_TOKEN:
            return {
                ...state,
                ...state.token =  payload
            }
        
        default:
            return state;
    }
}