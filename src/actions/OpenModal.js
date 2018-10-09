import * as constants from '../constants/constants';

export function openModal(modal) {  /*action creator*/
    return {
        type: constants.OPEN_MODAL, /*type of action being performed*/
        payload: {                            /*payload of data sent from application to store*/
            modal
        }
    };
}