import { connect } from 'react-redux' /*connect to store*/
import { bindActionCreators }  from 'redux'; /*pre-binding the action creators so in component we can call action by callback*/
import Main from '../components/Main/Main'; /*import component in which we want to path state and action*/
import {openModal} from '../actions/OpenModal' /*connect functions from actions*/
import { receiveSalesFormData } from '../actions/SendSalesForm'
import { receiveSupplierFormData } from '../actions/SendSupplierForm'


const mapStateToProps = (state) => ({ /*dispose state to props*/
    /*variableName.reducerName.initialStateKey*/
    modalIsOpen: state.Main.modalIsOpen,
    initialValues: state.SalesForm.data
});



const mapDispatchToProps = (dispatch) => {  /*dispose action to props*/
    return {
        openModal: bindActionCreators(openModal, dispatch), /*can call this action in component by this.props.someCallback() and not this.props.dispatch(someActionCreator())*/
        receiveSalesFormData:bindActionCreators(receiveSalesFormData, dispatch),
        receiveSupplierFormData:bindActionCreators(receiveSupplierFormData, dispatch),
    };
};



export default connect(mapStateToProps, mapDispatchToProps)(Main);