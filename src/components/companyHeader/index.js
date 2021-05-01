import React from 'react';
import PropTypes from 'prop-types';
import './companyHeader.scss';

export const CompanyHeader = (props) => {
    const {item} = props;
    return (
        <div className="container vertical-scrollable">
            <div className="row content-wrapper">
                <div className="col-2 menu-icon">
                    <i className="fa fa-bars" />
                </div>
                <div className="col-4 flex-container header">
                    <div className="item">
                        {item.scripName}
                    </div>
                    <div className="item">
                        <span className="dollar">&#36;</span>
                        <span className="price">{item.price}</span>
                        
                    </div>
                </div>
                <div className="col-6 flex-container">
                    <div className="item company-name">
                        {item.companyName}
                    </div>
                    <div className="item founder">
                        {item.createdBy}
                    </div>
                    <div className="item sub-name">
                        {item.companySubName}
                    </div>
                    <div className="item footer">
                        {item.companyFooter}
                    </div>
                </div>
            </div>
        </div>
    )
}

CompanyHeader.propTypes = {
    item: PropTypes.object
};