import * as constants from '../constants/constants';
import $ from 'jquery'

export function sendSalesForm(json) {  /*action creator*/
    console.log(json,'sendSalesForm_data');
    return {
        // type: constants.SEND_SALESFORM, /*type of action being performed*/
        data: {                            /*payload of data sent from application to store*/
            json
        }
    };
}


export const receiveSalesFormData = (values) => {
    console.log(JSON.stringify(sendSalesForm(values)),'values');
    console.log(values,'receiveSalesFormData_values');
    return (dispatch) => {
        $.ajax('', {
            headers: '',
            method: 'POST',
            data:JSON.stringify(sendSalesForm(values)),
            success: (json) => {
                console.log('success_log');
                dispatch(loadSalesFormData());
            },
            error: (error) => {

            }
        });

    };
};

export function loadSalesFormData() {
    return (dispatch) => {
        // dispatch(startLoadingSalesFormData());
        $.ajax('', {
            headers: {
                // 'Accept': 'application/vnd.pms.v1',
                // 'Content-Type': 'application/json'
            },
            method: 'GET',
            success(json) {
                // dispatch(saveSalesFormData(json));
            },
            error(error) {
                // errorLoadSalesFormData(error);
            }
        });
    };
}