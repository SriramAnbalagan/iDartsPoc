import React from 'react';
import {
    BUY,
    SELL
} from '../../constants'
import './buttons.scss';

export const Buttons = () => {
    return (
        <div className="btn-container">
            <button
                type="button"
                className="btn btn-outline-warning"
            >
                {BUY}
            </button>
            <button
                type="button"
                className="btn btn-outline-warning"
            >
                {SELL}
            </button>
        </div>
    )
};