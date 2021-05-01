import {
    SHOW_DASHBOARD_SPINNER,
    HIDE_DASHBOARD_SPINNER,
    UPDATE_SHARES_DATA
} from '../constants';

const initialState = {
   marketInfo: [],
   spinner: false
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SHOW_DASHBOARD_SPINNER:
            return ({
                ...state,
                spinner: true
            });
        case HIDE_DASHBOARD_SPINNER:
            return ({
                ...state,
                spinner: false
            });
        case UPDATE_SHARES_DATA:
            return ({
                ...state,
                marketInfo: action.marketInfo
            });
        default:
            return state;
    }
};