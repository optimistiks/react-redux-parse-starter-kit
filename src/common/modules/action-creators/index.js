import {signOut as actionSignOut} from '../action-repository/index';
import Parse from 'parse';

export const signOut = () => {
    Parse.User.logOut();
    return actionSignOut(Parse.User.current());
};
