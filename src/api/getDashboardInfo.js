import {GET_MARKET_DATA_API} from '../constants';

export const getDashboardInfo = async () => {
    try {
        const response = await fetch(GET_MARKET_DATA_API, {credentials: 'same-origin'});
        if (!response.ok) throw GET_MARKET_DATA_API;
        const responseJSON = await response.json();
        return responseJSON;
    } catch (error) {
        throw GET_MARKET_DATA_API;
    }
};