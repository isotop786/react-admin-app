import { ActionTypes } from "../constants/action-types";

export const loggedin = () => {
    return {
        type: ActionTypes.LOGGEDIN,
        // payload: data
    }
}

export const addToken = (token) => {
    return {
        type: ActionTypes.ADD_TOKEN,
        payload: token
    }
}

export const removeToken = () => {
    return {
        type: ActionTypes.REMOVE_TOKEN
    }
}