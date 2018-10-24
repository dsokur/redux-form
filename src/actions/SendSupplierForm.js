import $ from 'jquery'
import * as constants from '../constants/constants';

export function sendSupplierForm(json) {  /*action creator*/
    return {
        link: json.link,
        shop: json.shop
    }
}

function loadSupplierFormData(data){
    console.log('sales', data);
    return {
        type: constants.LOAD_SUPPLIERFORM,
        payload: {                   /*payload of data sent from application to store*/
            data
        }
    };
}

export const receiveSupplierFormData = (values) => {
    return(dispatch)=>{
        $.ajax('http://74.208.183.194:8888/api/v1/dropshipping/fetch-product-data/supplier/', {
            headers: {
                'Accept': 'application/json',
                'Authorization': 'Token e3930b35d47572cb2211e76343cd32b4b3cb86b1'
            },
            method: 'POST',
            data:sendSupplierForm(values),
            success: (json) => {
                dispatch(loadSupplierFormData(json));
            },
            error: (error) => {

            }
        })
    };
};



/*working get request GET '/api/v1/dropshipping/fork/list/'*/

// export function loadSalesFormData() {
//     return {
//         // dispatch(startLoadingSalesFormData());
//         // посмотреть эту функцию скорее всего это прелоодер как он написан
//         type: constants.SEND_SALESFORM,
//         data: $.ajax('http://74.208.183.194:8888/api/v1/dropshipping/fork/list/', {
//             headers: {
//                 'Accept': 'application/json',
//                 // 'Content-Type': 'application/json'
//                 'Authorization': 'Token e3930b35d47572cb2211e76343cd32b4b3cb86b1'
//             },
//             method: 'GET',
//             success(json) {
//                 // dispatch(saveSalesFormData(json));
//                 console.log(json,'json')
//             },
//             error(error) {
//                 // errorLoadSalesFormData(error);
//             }
//         })
//     };
// }