
import { PUT_FETCH } from  "../actions/images";
import { PUT_IMG } from  "../actions/images";


const initialState = {
    utente: {},
}

const imagesReducer = function (state = initialState, action) {
    switch (action.type) {


        case PUT_FETCH:
            return {
                ...state,
                utente: [action.payload]
            }

        case PUT_IMG:
            return {
                ...state,
                utente: [action.payload]
            }

  
        default:
            return state;
    }

}
export default imagesReducer;