import { GETAPI } from "../types";

const initialState = {
    data:[]
};

export default function fetchReducer(state = initialState, action) {

    switch(action.type){
        case GETAPI:
            return {
                ...state,
                data:action.payload.map((data) => data)
            }
        default: 
        return state;
    }
}

