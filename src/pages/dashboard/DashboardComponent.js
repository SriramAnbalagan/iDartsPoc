import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {
    CompanyHeader,
    CompanyStats,
    ProgressBarComponent,
    Buttons,
    PieChartComponent,
    ReturnComponent
} from '../../components';
import {DASHBOARD} from '../../constants';

import './dashboard.scss';


export const DashboardComponent = (props) => {

    useEffect(() => {
        props.getRecords();
    }, []);

    const {market} = props;
    const {marketInfo, spinner} = market || {};

    return (
        <div className="dashboard-wrapper">
            <h1>
                {DASHBOARD}
            </h1>
            <div className="container dashboard-content">
                {
                    spinner ?
                        <div className="spinner-container">
                            <div className="spinner-border" role="status">
                            </div>
                        </div> :
                        marketInfo && marketInfo.map((item) => {
                            return (
                                <div className="row container-row">
                                    <div className="col-3">
                                        <CompanyHeader
                                            item={item}
                                        />
                                    </div>
                                    <div className="col-2">
                                        <CompanyStats
                                            item={item}
                                        />
                                    </div>
                                    <div className="col-2">
                                        <ProgressBarComponent
                                            item={item}
                                        />
                                    </div>
                                    <div className="col-2">
                                        <ReturnComponent
                                            item={item}
                                        />
                                    </div>
                                    <div className="col-1 button">
                                        <Buttons />
                                    </div>
                                    <hr />
                                </div>
                            )
                        })
                }
                <div className="pie-chart-wrapper">
                    <PieChartComponent
                        marketInfo={marketInfo}
                        spinner={spinner}
                    />
                </div>
            </div>
        </div>
    )
}

DashboardComponent.propTypes = {
    market: PropTypes.object
};