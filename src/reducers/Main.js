import * as constants from '../constants/constants'/*import all constants*/


/*set initialState*/
const initialState = {
    modalIsOpen: false
};

export default (state = initialState, action) =>{
    // const { payload } = action; /*import payload obj. from action*/
    switch (action.type) { /*switch between different action types*/
        case constants.OPEN_MODAL:
            return Object.assign({}, state, {
                ...state,
                modalIsOpen: !state.modalIsOpen
            });
        default:
            return state
    }
}