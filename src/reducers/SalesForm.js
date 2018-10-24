import * as constants from "../constants/constants";

const initialState = {
    defaultState:{}
};

export default (state = {initialState}, action) => {
    const { payload } = action;
    switch (action.type) {
        case constants.SEND_SALESFORM:
            return {
                state,
                defaultState: payload,
            };
        case constants.LOAD_SALESFORM:
            return {
                data: payload.data
            };
        default:
            return state;
    }
};
