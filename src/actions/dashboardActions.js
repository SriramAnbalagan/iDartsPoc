import {
    SHOW_DASHBOARD_SPINNER,
    HIDE_DASHBOARD_SPINNER,
    UPDATE_SHARES_DATA, 
    WATCH_SHARES_DATA
} from '../constants';

// Spinner Action
export const showDashboardSpinner = () => ({
    type: SHOW_DASHBOARD_SPINNER
});

export const hideDashboardSpinner = () => ({
    type: HIDE_DASHBOARD_SPINNER
});

// Fetch data Action
export const getInitialRecords = () => ({
    type: WATCH_SHARES_DATA,
});

export const getInitialRecordsAction = (data) => ({
    type: UPDATE_SHARES_DATA,
    marketInfo: data
});
