import React, { useState } from "react";
import { BiSolidBuildingHouse } from "react-icons/bi";
import { BsClipboardCheck } from "react-icons/bs";
import { FaHiking, FaRegClipboard } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineAddChart, MdOutlineDashboard, MdOutlineMedicalServices, MdOutlineMonitorHeart, MdOutlineNotificationsActive, MdOutlineWheelchairPickup, } from "react-icons/md";
import { TbUserSquare } from "react-icons/tb";

import "./Sidebar.css";

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(true);

    const toggleSidebar = () => {
    setIsOpen(!isOpen);
    };

    return (
    <div style = {{marginTop: '80px'}}>
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <ul className="menu-item">
            <li className="active">
            <MdOutlineDashboard />
            <span>Dashboard</span>
            </li>
            <li>
            <BsClipboardCheck />
            <span>Reservation</span>
            </li>
            <li>
            <TbUserSquare />
            <span>Front Office</span>
            </li>
            <li>
            <FaHiking />
            <span>Patient Journey</span>
            </li>
            <li>
            <MdOutlineMedicalServices />
            <span>Doctor EMR</span>
            </li>
            <li>
            <FaRegClipboard />
            <span>Nurse EMR</span>
            </li>
        </ul>
        <div className="other-departments">
            <small>Other Departments</small>
            <ul className="list2">
            <li>
                <MdOutlineWheelchairPickup />
                <span>Clinical Services</span>
            </li>
            <li>
                <MdOutlineAddChart />
                <span>Finance</span>
            </li>
            <li>
                <BiSolidBuildingHouse />
                <span>Administration</span>
            </li>
            <li>
                <MdOutlineMonitorHeart />
                <span>Configurations</span>
            </li>
            </ul>
        </div>
        <div className="list3">
            <ul>
            <li>
                <MdOutlineNotificationsActive />
                <span>Notifications</span>
            </li>
            <li>
                <IoSettingsOutline />
                <span>Settings</span>
            </li>
            </ul>
        </div>
    </div>
    </div>
);
};

export default Sidebar;
