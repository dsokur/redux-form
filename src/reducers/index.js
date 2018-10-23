import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'
import Main from './Main'
import SalesForm from './SalesForm'
import SupplierForm from './SupplierForm'

export default combineReducers({
    Main,
    SalesForm,
    SupplierForm,
    form
});