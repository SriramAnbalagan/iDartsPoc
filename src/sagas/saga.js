import {takeEvery, put, call, all} from 'redux-saga/effects';
import {WATCH_SHARES_DATA} from '../constants';

import {getDashboardInfo} from '../api/getDashboardInfo'

import {
    showDashboardSpinner,
    hideDashboardSpinner,
    getInitialRecordsAction
} from '../actions/dashboardActions'

function* getMarketData() {
    try {
        yield put(showDashboardSpinner())
        const response = yield call(getDashboardInfo)
        yield put(getInitialRecordsAction(response.data))
        yield put(hideDashboardSpinner())
    } catch (error) {
        yield put(hideDashboardSpinner())
    }
}

export function* watchMarketData() {
    yield takeEvery(WATCH_SHARES_DATA, getMarketData)
}

export default function* rootSaga() {
    yield all([
        watchMarketData()
    ]);
}

