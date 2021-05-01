import React from 'react';
import PropTypes from 'prop-types';
import {
    PieChart,
    Pie,
    Legend
} from 'recharts';
import {
    PORTFOLIO_LABEL,
    ASSET,
    MUTUAL_FUND,
    ETF
} from '../../constants'

import './pieChart.scss';

export const PieChartComponent = (props) => {

    const {marketInfo, spinner} = props;
    const mutualFund = marketInfo.slice(0, 4);
    const etf = marketInfo.slice(4);

    const mutualFundVal = mutualFund.map((item) =>
        item.price * item.quantity
    )
    const mFValue = mutualFundVal.reduce((a, b) => a + b, 0);

    const etfVal = etf.map((item) =>
        item.price * item.quantity
    )
    const etfValue = etfVal.reduce((a, b) => a + b, 0);

    const newData = [
        {
            name: MUTUAL_FUND,
            value: mFValue,
            fill: "rgba(24, 178, 233, 0.93)"
        },
        {
            name: ETF,
            value: etfValue,
            fill: "rgba(179, 103, 8, 0.93)"
        }
    ];

    return (
        <>
            {
                !spinner ?
                    <div className="pie-chart">
                        <div className="header-wrapper">
                            <div className="row">
                                <div className="col-6 column header">{PORTFOLIO_LABEL}</div>
                                <div className="col-6 column asset">{ASSET}
                                <i className="fa fa-caret-down icon"></i>
                                </div>
                            </div>

                        </div>

                        <PieChart
                            width={350}
                            height={200}
                        >
                            <Pie
                                data={newData}
                                cx="50%"
                                cy="50%"
                                innerRadius={60}
                                outerRadius={80}
                            />
                            <Legend
                                iconSize={10}
                                width={100}
                                verticalAlign="middle"
                                align="right"
                                layout={'vertical'}
                                wrapperStyle={{fontSize: '12px'}}
                            />
                        </PieChart>
                    </div>
                    : null
            }
        </>

    )
};

PieChartComponent.propTypes = {
    marketInfo: PropTypes.array,
    spinner: PropTypes.bool
};
