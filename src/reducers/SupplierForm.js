import * as constants from "../constants/constants";
const initialState ={
    supplier:'yeeee'
};

export default (state = initialState, action) =>{
    switch (action.type) {
        case constants.SEND_SUPPLIERFORM:
            return action.data;
        default:
            return state;
    }
};