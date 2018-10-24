import { connect } from 'react-redux' /*connect to store*/
import { bindActionCreators }  from 'redux'; /*pre-binding the action creators so in component we can call action by callback*/
import SupplierForm from '../components/Forms/SupplierForm'; /*import component in which we want to path state and action*/
import { receiveSupplierFormData } from '../actions/SendSupplierForm'
import {reduxForm} from "redux-form";


const mapStateToProps = (state) => ({ /*dispose state to props*/
    /*variableName.reducerName.initialStateKey*/
    initialValues: state.SupplierForm.data,
});



const mapDispatchToProps = (dispatch) => {  /*dispose action to props*/
    return {
        receiveSupplierFormData:bindActionCreators(receiveSupplierFormData, dispatch),
        // loadSalesFormData:bindActionCreators(loadSalesFormData, dispatch)
    };
};

const SupplierReduxForm = reduxForm({
	form: 'supplier', // a unique identifier for this form
    asyncBlurFields: [],
})(SupplierForm);/*component name*/


export default connect(mapStateToProps, mapDispatchToProps)(SupplierReduxForm);