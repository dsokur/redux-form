import * as constants from '../constants/constants'/*import all constants*/

const initialState = {
    salesFormData:[]
};

export default (state = initialState, action) =>{
    return Object.assign({}, {
        ...state,
        salesFormData: action
    })
}