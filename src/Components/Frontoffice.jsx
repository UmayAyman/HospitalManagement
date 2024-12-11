import React from "react";
import { MdOutlineShareLocation } from "react-icons/md";
import { PiNotepad } from "react-icons/pi";
import { RiTeamLine } from "react-icons/ri";
import './Frontoffice.css';


const officeStaff = () => {
    return (
        <>
        <div className="Front-Office">
    <div className="Alex">
        <img src="src/assets/alexthompson.JPG" alt="Alex Thompson" />
        <h1>Alex Thompson</h1>
        <p>Front Office Staff</p>
    </div>
    <div className="details">
        <div>
            <RiTeamLine style = {{marginBottom: '-33px', marginLeft: '30px'}}/>
            <h2>Department</h2>
            <small style = {{marginLeft: '60px'}}>IT & Operators</small>
        </div>
        <div>
            <MdOutlineShareLocation style = {{marginBottom: '-33px', marginLeft: '30px'}}/>
            <h2>Hospital</h2>
            <small style = {{marginLeft: '60px'}}>City General Hospital</small>
        </div>
        <div>
            <PiNotepad style = {{marginBottom: '-33px', marginLeft: '30px'}}/>
            <h2>Previous Check-in</h2>
            <small style = {{marginLeft: '60px'}}>September 30, 2025, 1:49 PM</small>
        </div>
        <div>
            <PiNotepad style = {{marginBottom: '-33px', marginLeft: '30px'}}/>
            <h2>Last Appointments</h2>
            <small style = {{marginLeft: '60px', marginBottom: '30px'}}>February 14, 2025, 7:25 AM</small>
        </div>
    </div>
</div>
        </>
    )
}

export default officeStaff;