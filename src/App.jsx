import '@fortawesome/fontawesome-free/css/all.min.css';
import { useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Booking from './Components/Booking';
import Card from './Components/Cards';
import Chart from './Components/Chart';
import Frontoffice from './Components/Frontoffice';
import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar';
import Table from './Components/Table';
import Homepage from './Homepage/RegDetails';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <Navbar />
            <div className="main-content">
          <Routes>
            <Route path="/" element={
              <>
                <Sidebar />
                <div className="cards">
                  <Card title="Total Doctors" description="250" average="+22%" paragraph="Increase in 30 days" percentage="+ 22%" iconColor="green" showGraph={true} graphColor="purple" />
                  <Card title="Total Appointments" description="250" average="+5%" paragraph="Increase in 30 days" percentage="+ 5.7%" iconColor="green" showGraph={true} graphColor="green" />
                  <Card title="Total Patients" description="250" average="+12%" paragraph="Increase in 30 days" percentage="+ 12%" iconColor="green" showGraph={true} graphColor="orange" />
                  <Card title="Total Earnings" description="250" average={<span style={{ color: 'red' }}>+18%</span>} percentage="18%" iconColor="red" paragraph="Decrease in 30 days" showDecreaseIcon={true} decreaseColor="red" />
                </div>
                <Frontoffice />
                <Chart />
                <div className="Booking-Details" style = {{marginTop: '20px'}}>
                  <Booking heading="Hospital Visits" description="8950" percent="+ 22%" />
                  <Booking heading="Appointments" description="3034" percent="+ 22%" />
                  <Booking heading="Online Booking" description="1236" percent="+ 22%" />
                </div>
                <Table />
              </>
            } />
            <Route path="/Homepage" element={<Homepage />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
