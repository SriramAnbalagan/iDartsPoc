import {combineReducers} from 'redux';
import marketReducer from './market';

export default combineReducers({
    market: marketReducer
});
