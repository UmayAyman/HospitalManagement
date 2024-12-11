import React from "react";
import { TrendingDown, TrendingUp } from 'react-feather';
import { FaArrowAltCircleUp } from "react-icons/fa";
import "./Cards.css";

const Card = (props) => {
    return (
        <div className="Card">
            <h1>{props.title}</h1>
            <p>{props.description}</p>

            <div className="icon-container">
                {props.showGraph && (
                    <div className="percentage-value" style={{ color: props.graphColor }}>
                        {props.percentage}
                    </div>
                )}
                {props.showGraph && (
                    <TrendingUp style={{ color: props.graphColor, width: '30px', height: '30px' }} />
                )}

                {props.showDecreaseIcon && (
                    <div className="percentage-value" style={{ color: props.decreaseColor || "red" }}>
                        {props.percentage}
                    </div>
                )}
                {props.showDecreaseIcon && (
                    <TrendingDown style={{ color: props.decreaseColor || "red", width: '30px', height: '30px' }} />
                )}
            </div>

            <FaArrowAltCircleUp style={{ color: props.iconColor || "green", fontSize: '14px', marginBottom: '-1.5px', marginRight: '8px', marginLeft: '5px' }} />
            <span>{props.average}</span>
            <small>{props.paragraph}</small>
        </div>
    );
};

export default Card;
