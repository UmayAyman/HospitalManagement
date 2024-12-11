import React from 'react';
import { PiNotePencilFill } from "react-icons/pi";
import './Table.css';

const Table = () => {
const data = [
    {
        mrdNumber: 'RCC22279',
        regDate: '2-2-2025',
        patientName: 'Imran',
        dob: '12-11-2000',
        gender: 'Male',
        nationality: 'India',
        nationalID: 'Yes',
        mobile: '+918075518911',
        emergencyContact: 'Label',
        status: <PiNotePencilFill />,
    },
    {
        mrdNumber: 'RCC22279',
        regDate: '2-2-2025',
        patientName: 'Imran',
        dob: '12-11-2000',
        gender: 'Male',
        nationality: 'India',
        nationalID: 'Yes',
        mobile: '+918075518911',
        emergencyContact: 'Label',
        status: <PiNotePencilFill />,
    },
    {
        mrdNumber: 'RCC22279',
        regDate: '2-2-2025',
        patientName: 'Imran',
        dob: '12-11-2000',
        gender: 'Male',
        nationality: 'India',
        nationalID: 'Yes',
        mobile: '+918075518911',
        emergencyContact: 'Label',
        status: <PiNotePencilFill />,
    },
    {
        mrdNumber: 'RCC22279',
        regDate: '2-2-2025',
        patientName: 'Imran',
        dob: '12-11-2000',
        gender: 'Male',
        nationality: 'India',
        nationalID: 'Yes',
        mobile: '+918075518911',
        emergencyContact: 'Label',
        status: <PiNotePencilFill />,
    },
    {
        mrdNumber: 'RCC22279',
        regDate: '2-2-2025',
        patientName: 'Imran',
        dob: '12-11-2000',
        gender: 'Male',
        nationality: 'India',
        nationalID: 'Yes',
        mobile: '+918075518911',
        emergencyContact: 'Label',
        status: <PiNotePencilFill />,
    },
    {
        mrdNumber: 'RCC22279',
        regDate: '2-2-2025',
        patientName: 'Imran',
        dob: '12-11-2000',
        gender: 'Male',
        nationality: 'India',
        nationalID: 'Yes',
        mobile: '+918075518911',
        emergencyContact: 'Label',
        status: <PiNotePencilFill />,
    },
];

return (
    <div className="table-container" style = {{borderRadius: '10px'}}>
        <table className="custom-table">
        <thead>
        <tr>
            <th>MRD Number</th>
            <th>Reg. Date</th>
            <th>Patient Name</th>
            <th>DOB</th>
            <th>Gender</th>
            <th>Nationality</th>
            <th>National ID</th>
            <th>Mobile</th>
            <th>Emerg. Contact Number</th>
            <th>Status</th>
        </tr>
        </thead>
        <tbody>
        {data.map((row, index) => (
            <tr key={index}>
                <td>{row.mrdNumber}</td>
                <td>{row.regDate}</td>
                <td>{row.patientName}</td>
                <td>{row.dob}</td>
                <td>{row.gender}</td>
                <td>{row.nationality}</td>
                <td>{row.nationalID}</td>
                <td>{row.mobile}</td>
                <td>{row.emergencyContact}</td>
                <td>{row.status}</td>
            </tr>
            ))}
        </tbody>
        </table>
    </div>
);
};

export default Table;
