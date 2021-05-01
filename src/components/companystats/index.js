import React from 'react';
import PropTypes from 'prop-types';
import {
    QUANTITY,
    AVG_COST,
    INVT_AMT
} from '../../constants';
import './companyStats.scss';

export const CompanyStats = (props) => {
    const {item} = props;
    const {
        quantity,
        avgCost,
        investedAmount
    } = item;
    return (
        <div className="companyStats-container">
            <div className="row companyStats-wrapper">
                <div className="col-6 companyStats-content">
                    <i className="fa fa-database icon"></i>
                    <div>
                        <span className="label">{QUANTITY}</span>
                    </div>
                </div>
                <div className="col-6 companyStats-content">
                    <span className="label">{quantity}</span>
                </div>

                <div className="col-6 companyStats-content">
                    <i className="fa fa-at icon"></i>
                    <div>
                        <span className="label">{AVG_COST}</span>
                    </div>
                </div>
                <div className="col-6 companyStats-content">
                    <span className="dollar"> &#36; </span>
                    <span className="label">{avgCost}</span>
                </div>

                <div className="col-6 companyStats-content">
                    <i class="fa fa-money icon"></i>
                    <div>
                        <span className="label">{INVT_AMT}</span>
                    </div>
                </div>
                <div className="col-6 companyStats-content">
                    <span className="dollar"> &#36; </span>
                    <span className="label">{investedAmount}</span>
                </div>
            </div>
        </div>
    )
}

CompanyStats.propTypes = {
    item: PropTypes.object
};