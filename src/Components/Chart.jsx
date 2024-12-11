import { CategoryScale, Chart as ChartJS, LinearScale, LineElement, PointElement, Tooltip } from 'chart.js';
import React from 'react';
import { Line } from 'react-chartjs-2';
import { Link } from 'react-router-dom';
import './Chart.css';

ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale, Tooltip);

const Chart = () => {
    const data = {
        labels: ['16', '18', '20', '22', '24', '26'],
        datasets: [
            {
                label: 'Patient Visits',
                data: [1200, 1500, 1800, 2500, 2200, 2800],
                borderColor: '#2CA8',
                fill: false,
                tension: 0.4,
                pointBackgroundColor: '#2CA8',
                pointRadius: 6,
                pointHoverRadius: 8,
                pointBorderColor: '#fff',
                pointBorderWidth: 2,
            },
        ],
    };

    const options = {
        plugins: {
            legend: { display: false },
            tooltip: {
                callbacks: {
                    label: function (tooltipItem) {
                        return tooltipItem.raw / 1000 + 'k';
                    },
                },
            },
        },
        scales: {
            x: {
                grid: {
                    display: false,
                },
            },
            y: {
                beginAtZero: true,
                ticks: {
                    display: false,
                },
                grid: {
                    display: true,
                    borderDash: [5, 5],
                },
            },
        },
    };

    return (
        <div className="chart-container">
            <div className="chart-header">
                <span className="chart-title">Booking</span>
                <Link to="/Homepage" className="view-details">View Details→</Link>
            </div>
            <small className='visit-list'>Jan 16 - Jan 30 Patient visit chart</small>
            <Line data={data} options={options} style={{ maxWidth: '500px', height: '300px' }} />
        </div>
    );
};

export default Chart;
