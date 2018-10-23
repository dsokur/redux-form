import * as constants from "../constants/constants";



export default (state = {}, action) => {
    const { payload } = action;
    switch (action.type) {
        case constants.LOAD_SALESFORM:
            return {
                data: payload.data
            };
        default:
            return state;
    }
};
