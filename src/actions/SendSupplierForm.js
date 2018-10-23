import $ from 'jquery'
import * as constants from '../constants/constants';

//нужен ли он вообще, может можно прокинуть сразу в receiveSalesFormData
export function sendSupplierForm(json) {  /*action creator*/
    return {
        link: json.link,
        shop: json.shop
    }
}

/**/
export const receiveSupplierFormData = (values) => {
    return{
        type: constants.SEND_SALESFORM,
        data: $.ajax('http://74.208.183.194:8888/api/v1/dropshipping/fetch-product-data/supplier/', {
            headers: {
                'Accept': 'application/json',
                'Authorization': 'Token e3930b35d47572cb2211e76343cd32b4b3cb86b1'
            },
            method: 'POST',
            // data:{"shop":"1","link":"https://www.ebay.com/itm/Samsung-Galaxy-Note-8-SM-N950F-DS-64GB-FACTORY-UNLOCKED-Black-Gold-Gray-Pink/192307502828?var=492247439039&_trkparms=%26rpp_cid%3D599f436d05cd4015be380404%26rpp_icid%3D59a742cf8935e41a64fb7e0f"},
            data:sendSupplierForm(values),
            success: (json) => {
                loadSupplierFormData(json);
            },
            error: (error) => {

            }
        })
    };
};

function loadSupplierFormData(data){
    console.log(data,'backEndData');
    return {
        payload: {                   /*payload of data sent from application to store*/
            data
        }
    };
}

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