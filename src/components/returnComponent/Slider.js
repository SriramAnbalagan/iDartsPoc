import React from 'react';
import PropTypes from 'prop-types';

import './return.scss';

export const Slider = (props) => {
    const {returnValue} = props;
    const isPositiveInteger = returnValue > 0;

    return (
        <div className="slidecontainer">
            <input
                type="range"
                min="0"
                max="100"
                value={returnValue}
                className={isPositiveInteger ? "slider slider-pos" : "slider slider-neg"}
                id="myRange"
            >
            </input>
        </div>
    )
}

Slider.propTypes = {
    returnValue: PropTypes.number
};