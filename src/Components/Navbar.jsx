import React from "react";
import { LuMessagesSquare } from "react-icons/lu";
import { MdHealthAndSafety, MdMenu, MdOutlineNotificationsActive } from "react-icons/md";
import { RxCountdownTimer } from "react-icons/rx";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="Healthcare-logo">
                <MdHealthAndSafety />
                <div className="Medipuls">
                    <span>MediPuls</span>
                </div>
            </div>
            <div className="Mdmenu">
                    <MdMenu />
            </div>

            <div className="icons">
                <div className="Countdown">
                    <RxCountdownTimer />
                </div>

                <div className="icon">
                    <span className="notification-badge">●</span>
                    <MdOutlineNotificationsActive />
                </div>

                <Link to="/messages">
                    <LuMessagesSquare />
                </Link>
            </div>

            <div className="user-info">
                <p>
                    <span>Alex Thompson</span> <br />
                    <small>Admin</small>
                </p>
                <div className="user-avatar">M</div>
            </div>
        </nav>
    );
};

export default Navbar;
