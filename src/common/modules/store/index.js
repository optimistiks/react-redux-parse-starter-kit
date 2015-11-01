import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import app from '../combined-reducer/index';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

const store = createStoreWithMiddleware(app);

export default store;
