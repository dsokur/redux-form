import $ from 'jquery'
import * as constants from '../constants/constants';

function sendSalesForm(json) {  /*action creator*/
    return {
            link: json.link,
            shop: json.shop,
    }
}

function loadSalesFormData(data){
    console.log(data,'data');
    return {
        type: constants.LOAD_SALESFORM, /*type of action being performed*/
        payload: {
            data
        }
    };
}
export const receiveSalesFormData = (values) => {
    console.log(values.link,'receiveSalesFormData');
    return (dispatch) => {
        $.ajax('http://74.208.183.194:8888/api/v1/dropshipping/fetch-product-data/buyer/', {
            headers: {
                'Accept': 'application/json',
                'Authorization': 'Token e3930b35d47572cb2211e76343cd32b4b3cb86b1'
            },
            method: 'POST',
            data:sendSalesForm(values),
            success(json) {
                dispatch(loadSalesFormData(json));
            },
            error(error) {
            }
        });
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