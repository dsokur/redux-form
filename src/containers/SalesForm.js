import { connect } from 'react-redux' /*connect to store*/
import { bindActionCreators }  from 'redux'; /*pre-binding the action creators so in component we can call action by callback*/
import SalesForm from '../components/Forms/SalesForm'; /*import component in which we want to path state and action*/
import { receiveSalesFormData } from '../actions/SendSalesForm'
import {reduxForm} from "redux-form";


const mapStateToProps = (state) => ({ /*dispose state to props*/
    /*variableName.reducerName.initialStateKey*/
    initialValues: state.SalesForm.data
});

const mapDispatchToProps = (dispatch) => {  /*dispose action to props*/
    return {
        receiveSalesFormData:bindActionCreators(receiveSalesFormData, dispatch),
    };
};
const SalesReduxForm = reduxForm({
	form: 'sales', // a unique identifier for this form
    asyncBlurFields: [],
})(SalesForm);/*component name*/



export default connect(mapStateToProps, mapDispatchToProps)(SalesReduxForm);/*form name*/