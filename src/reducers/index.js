/*combiner for main reducer*/
import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
/*import other reducers*/
// import App from './App'
// import Header from './Header'
import Main from './Main'
import SalesForm from './SalesForm'

const DropShipping = combineReducers({
    // App,
    // Header,
    Main,
    SalesForm,
    form: formReducer
});

export default DropShipping