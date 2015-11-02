import getCurrentUser from '../get-current-user/index';


export const currentUser = function(state = getCurrentUser(), action) {

    switch (action.type) {

        case 'REGISTER':
        case 'SIGN_IN':
        case 'SIGN_OUT':
            return action.payload;

        default:
            return state;

    }

};
