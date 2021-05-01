import React from 'react';
import PropTypes from 'prop-types';
import {Slider} from './Slider';
import {
    UN_REALIZED,
    RETURN
} from '../../constants'
import './return.scss';

export const ReturnComponent = (props) => {
    const {item} = props;
    const {
        pl,
        returnValue
    } = item;

    const isPositiveInteger = returnValue > 0 && returnValue !== 0;

    return (
        <div className="return-container">
            <div className="row content-row">
                <div className="col-7 header-column">
                    <div className="item">
                        {UN_REALIZED}
                    </div>
                </div>
                <div className="col-5 header-column">
                    <div className="item">
                        &#36;{pl ? pl : '-'}
                    </div>
                </div>
            </div>
            <div className="row content-row-portfolio">
                <div className="col-7 header-column-portfolio">
                    <div className="item portfolio">
                        &#37;{RETURN}
                    </div>
                </div>
                <div className="col-5 header-column-portfolio">
                    <div className="item portfolio">
                        <span className="caret-icon">
                            {returnValue === 0 ?
                                null :
                                isPositiveInteger ?
                                    <i className="fa fa-caret-up"></i> :
                                    <i className="fa fa-caret-down"></i>
                            }
                        </span>
                        {returnValue}&#37;
                    </div>
                </div>
            </div>
            <div className="row content-row indicator">
                <div className="col-12 indicator-wrapper">
                    <Slider
                        returnValue={returnValue}
                    />
                </div>
            </div>
        </div>
    )
}

ReturnComponent.propTypes = {
    item: PropTypes.object,
};