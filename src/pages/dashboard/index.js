import {connect} from 'react-redux';
import {getInitialRecords} from '../../actions/dashboardActions';
import {DashboardComponent} from './DashboardComponent';

const mapStateToProps = (state) => {
    const {market} = state;
    return ({
        market
    });
};

const mapDispatchToProps = (dispatch) => {
    return ({
        getRecords: () => dispatch(getInitialRecords())
    });
};

export const Dashboard = connect(
    mapStateToProps,
    mapDispatchToProps
)(DashboardComponent);