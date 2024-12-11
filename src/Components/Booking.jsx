import React from "react";
import './Booking.css';

const Booking = (props) => {
    return (
        <>
        <div className="Booking" >
            <h3>{props.heading}</h3>
            <b>{props.description}</b>
            <span>{props.percent}</span>
        </div>
        </>
    )
}

export default Booking;