import {combineReducers} from 'redux';
import {currentUser} from '../reducers/index';

const reducer = combineReducers({
    currentUser
});

export default reducer;
