import React from 'react';
import PropTypes from 'prop-types';
import ProgressBar from 'react-bootstrap/ProgressBar'
import {
    MARKET_VALUE,
    PORTFOLIO
} from '../../constants'
import './progressBar.scss';

export const ProgressBarComponent = (props) => {
    const {item} = props;
    const {
        price,
        quantity,
        portfolioValue
    } = item;
    const marketValue = price * quantity;

    return (
        <div className="progressbar-container">
            <div className="row content-row">
                <div className="col-7 header-column">
                    <div className="item">
                        {MARKET_VALUE}
                    </div>
                </div>
                <div className="col-5 header-column">
                    <div className="item">
                    &#36;{marketValue}
                    </div>
                </div>
            </div>
            <div className="row content-row-portfolio">
                <div className="col-7 header-column-portfolio">
                    <div className="item portfolio">
                        {PORTFOLIO}
                    </div>
                </div>
                <div className="col-5 header-column-portfolio">
                    <div className="item portfolio">
                        {portfolioValue}&#37;
                    </div>
                </div>
            </div>
            <div className="row content-row indicator">
                <div className="col-12 indicator-wrapper">
                    <ProgressBar 
                    variant="success"
                    now={portfolioValue} 
                    />
                </div>
            </div>
        </div>
    )
}

ProgressBarComponent.propTypes = {
    item: PropTypes.object
};