import React, { useState } from "react";
import { BsFillPersonCheckFill } from "react-icons/bs";
import { HiEye } from "react-icons/hi2";
import { MdAddBox, MdNoteAlt, MdSchedule } from "react-icons/md";
import { PiNotePencilFill } from "react-icons/pi";
import { TbClockHour4 } from "react-icons/tb";
import "./RegDetails.css";

function GeneralInformationForm() {
  const [selectedTab, setSelectedTab] = useState("New Registration");

  const tabs = [
    "New Registration",
    "Patients List",
    "Patient Visit List",
    "Patient Revisit List",
  ];

  const renderContent = () => {
    switch (selectedTab) {
      case "New Registration":
        return (
          <>
            <div className="General-Info">
              <h3>General Information</h3>
              <form>
                <div className="input">
                  <label>MRD Number</label>
                  <input type="text" name="mrdNumber" placeholder="ACC22279" />
                </div>
                <div className="input">
                  <label>Visit ID</label>
                  <input type="text" name="visitID" placeholder="#004" />
                </div>
                <div className="input">
                  <label>
                    Reg. Date{" "}
                    <b style={{ color: "red", fontSize: "12px" }}>*</b>
                  </label>
                  <input
                    style={{ color: "grey" }}
                    type="date"
                    name="regDate"
                    placeholder="11-11-24"
                  />
                </div>
                <div className="input">
                  <label>
                    Visit Type{" "}
                    <b style={{ color: "red", fontSize: "12px" }}>*</b>
                  </label>
                  <select style={{ width: "248px" }} name="visitType">
                    <option value="">Select</option>
                    <option value="Consultation">Consultation</option>
                    <option value="Follow-up">Follow-up</option>
                  </select>
                </div>
                <div className="row">
                  <div className="input half">
                    <label>Refer Type</label>
                    <select style={{ width: "80px" }} name="referType">
                      <option value="">Select</option>
                      <option value="Self">Self</option>
                      <option value="Doctor">Doctor</option>
                    </select>
                  </div>
                  <div className="input half">
                    <label style={{ marginLeft: "-38px" }}>Referred By</label>
                    <select
                      style={{ marginLeft: "-38px", width: "155px" }}
                      name="referredBy"
                    >
                      <option value="">Select</option>
                      <option value="Dr. Raheela">Dr. Raheela</option>
                      <option value="Dr. Ahmed">Dr. Ahmed</option>
                    </select>
                  </div>
                </div>
              </form>
            </div>

            <div className="Patient-Information">
              <h3>Patient Information</h3>
              <form>
                <div className="Pat-Input">
                  <label style={{ marginTop: "-5px" }}>
                    Patient Name{" "}
                    <b style={{ color: "red", fontSize: "12px" }}>*</b>
                  </label>
                  <input
                    style={{ width: "458px" }}
                    type="text"
                    name="Patient Name"
                  />
                </div>

                <div className="Pat-Input">
                  <label>
                    Date of Birth{" "}
                    <b style={{ color: "red", fontSize: "12px" }}>*</b>
                  </label>
                  <input
                    style={{ width: "215px" }}
                    type="date"
                    name="Date of Birth"
                    placeholder="Select date of birth"
                  />
                </div>

                <div className="Pat-Input">
                  <label>Age</label>
                  <input
                    style={{ width: "215px" }}
                    type="text"
                    name="Age"
                    placeholder="-"
                  />
                </div>

                <div className="Pat-Input">
                  <label>Gender</label>
                  <select name="Select Gender" style={{ width: "233px" }}>
                    <option value="">Select</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>

                <div className="Pat-Input">
                  <label>
                    Nationality <b>*</b>
                  </label>
                  <select name="Select Nationality" style={{ width: "233px" }}>
                    <option value="">Select</option>
                    <option value="Pakistan">Pakistan</option>
                    <option value="Swedish">Swedish</option>
                    <option value="German">German</option>
                  </select>
                </div>

                <div className="Pat-Input">
                  <label>
                    Visa Type{" "}
                    <b style={{ color: "red", fontSize: "12px" }}>*</b>
                  </label>
                  <select name="Select Visa Type" style={{ width: "233px" }}>
                    <option value="">Select</option>
                    <option value="Visitor Visa">Visitor Visa</option>
                    <option value="Family Immigration Visa">
                      Family Immigration Visa
                    </option>
                    <option value="J1 Visa">J1 Visa</option>
                  </select>
                </div>

                <div className="Pat-Input">
                  <label>
                    National ID{" "}
                    <b style={{ color: "red", fontSize: "12px" }}>*</b>
                  </label>
                  <select name="Select National ID" style={{ width: "233px" }}>
                    <option value="">Select</option>
                    <option value="CNIC">CNIC</option>
                  </select>
                </div>

                <div className="Pat-Input">
                  <label>
                    Email ID <b style={{ color: "red", fontSize: "12px" }}>*</b>
                  </label>
                  <input
                    style={{ width: "215px" }}
                    type="text"
                    name="Age"
                    placeholder="Enter mail ID"
                  />
                </div>

                <div className="Pat-Input">
                  <label>
                    Other ID <b style={{ color: "red", fontSize: "12px" }}>*</b>
                  </label>
                  <select name="Other ID" style={{ width: "233px" }}>
                    <option value="Select">Select</option>
                    <option value="Email ID">Email ID</option>
                    <option value="Yahoo">Yahoo</option>
                    <option value="Outlook">Outlook</option>
                  </select>
                </div>
              </form>
            </div>

            <div className="Contact-Details">
              <h3>Contact Details</h3>
              <form>
                <div className="row">
                  <div className="input half">
                    <label>
                      Primary Contact <b style={{ color: "red" }}>*</b>
                    </label>
                    <select style={{ width: "80px" }} name="ContactDetails">
                      <option value="">+234</option>
                      <option value="">+92</option>
                      <option value="">+91</option>
                    </select>
                  </div>
                  <div className="input half">
                    <input
                      style={{
                        marginLeft: "-315px",
                        width: "275px",
                        marginTop: "17px",
                        height: "14.5px",
                      }}
                      type="text"
                      name="Contact Number"
                      placeholder="Enter Primary Contact Number"
                    />
                  </div>
                </div>
                <div
                  className="Inline"
                  style={{ marginLeft: "790px", marginTop: "-80px" }}
                >
                  <div className="row">
                    <div className="input half">
                      <label style={{ marginLeft: "-400px" }}>
                        Secondary Contact
                      </label>
                      <select
                        style={{ width: "80px", marginLeft: "-400px" }}
                        name="ContactDetails"
                      >
                        <option value="">+234</option>
                        <option value="">+92</option>
                        <option value="">+91</option>
                      </select>
                    </div>
                    <div className="input half">
                      <input
                        style={{
                          marginLeft: "-325px",
                          width: "275px",
                          marginTop: "17px",
                          height: "14.5px",
                        }}
                        type="text"
                        name="Contact Number"
                        placeholder="Enter Secondary Contact Number"
                      />
                    </div>
                  </div>
                </div>
                <div class="whatsapp-checkbox" style={{ marginBottom: "15px" }}>
                  <input type="checkbox" id="whatsapp" />
                  <label for="whatsapp">
                    <span class="checkmark"></span>
                    Save as WhatsApp number
                  </label>
                </div>

                <div className="row">
                  <div className="input half">
                    <label>WhatsApp Number</label>
                    <select style={{ width: "80px" }} name="ContactDetails">
                      <option value="">+234</option>
                      <option value="">+92</option>
                      <option value="">+91</option>
                    </select>
                  </div>
                  <div className="input half">
                    <input
                      style={{
                        marginLeft: "-315px",
                        width: "275px",
                        marginTop: "17px",
                        height: "14.5px",
                      }}
                      type="text"
                      name="Contact Number"
                      placeholder="Enter Whatsapp Number"
                    />
                  </div>
                </div>
                <div
                  className="Inline"
                  style={{
                    marginLeft: "790px",
                    marginTop: "-80px",
                    marginBottom: "50px",
                  }}
                >
                  <div className="row">
                    <div className="input half">
                      <label style={{ marginLeft: "-400px" }}>Land Phone</label>
                      <select
                        style={{ width: "80px", marginLeft: "-400px" }}
                        name="ContactDetails"
                      >
                        <option value="">+234</option>
                        <option value="">+92</option>
                        <option value="">+91</option>
                      </select>
                    </div>
                    <div className="input half">
                      <input
                        style={{
                          marginLeft: "-325px",
                          width: "275px",
                          marginTop: "17px",
                          height: "14.5px",
                        }}
                        type="text"
                        name="Contact Number"
                        placeholder="Enter Phone Number"
                      />
                    </div>
                  </div>
                </div>

                <div className="row" style={{ marginTop: "-30px" }}>
                  <div className="input half">
                    <label>Info.Source</label>
                    <select style={{ width: "380px" }} name="Info.Source">
                      <option value="">Select</option>
                      <option value="">FaceBook</option>
                      <option value="">Twitter</option>
                    </select>
                  </div>
                </div>
                <div
                  className="Inline"
                  style={{ marginLeft: "790px", marginTop: "-80px" }}
                >
                  <div className="row">
                    <div className="input half">
                      <label style={{ marginLeft: "-400px" }}>
                        Governrates
                      </label>
                      <select
                        style={{ width: "380px", marginLeft: "-400px" }}
                        name="ContactDetails"
                      >
                        <option value="">Select</option>
                        <option value="">+92</option>
                        <option value="">+91</option>
                      </select>
                    </div>
                  </div>
                </div>
              </form>
            </div>

            <section className="marvin-card">
              <div className="marvin-header">
                <img
                  src="src/assets/marvin.JPG"
                  alt="Marvin McKinney"
                  class="marvin-image"
                />
                <div>
                  <h1 className="marvin-name">Marvin McKinney</h1>
                  <p className="marvin-id">RCC22279 | UAE</p>
                </div>
              </div>
              <div className="marvin-details">
                <span>
                  <b style={{ fontWeight: "400" }}>Date of registration</b>{" "}
                  <br />
                  <small style={{ color: "grey" }}>11-12-2024</small>
                </span>
                <span>
                  <b style={{ fontWeight: "400" }}>Age & Gender</b> <br />
                  <small style={{ color: "grey" }}>24, Male</small>
                </span>
              </div>
              <button className="marvin-register-button">Register</button>
            </section>

            <div className="Demographic-Details">
              <h3 style={{ marginTop: "20px" }}>
                Patients Demographic Details
              </h3>
              <input
                style={{ width: "295px" }}
                type="text"
                name="Patients Demographic Details"
                placeholder="Enter National ID For CIVIL ID Reader"
              />
              <div
                class="ID-checkbox"
                style={{ marginBottom: "25px", marginTop: "20px" }}
              >
                <input type="checkbox" id="National ID" />
                <label for="National ID">
                  <span class="checkmark"></span>
                  Read from National ID
                </label>
              </div>
              <div class="ID-checkbox" style={{ marginBottom: "15px" }}>
                <input type="checkbox" id="Eligibility" />
                <label for="Eligibility">
                  <span class="checkmark"></span>
                  Eligibility Check
                </label>
              </div>
            </div>

            <div className="Consultation-Details">
              <h3>Consultation Details</h3>
              <div className="Con-Det">
                <label>
                  Speciality <b style={{ color: "red" }}>*</b>
                </label>
                <select style={{ width: "300px" }} name="Specialities">
                  <option value="">Select</option>
                  <option value="">Cardiology</option>
                  <option value="">Dermatology</option>
                  <option value="">Anesthesiology</option>
                  <option value="">Diagnostic Radiology</option>
                </select>
              </div>
              <div className="Con-Det">
                <label>
                  Doctor Name<b style={{ color: "red" }}>*</b>
                </label>
                <select style={{ width: "300px" }} name="Doctor">
                  <option value="">Select</option>
                  <option value="">Dr.Abrar</option>
                  <option value="">Dr.Raheela</option>
                  <option value="">Dr.Aaiza</option>
                  <option value="">Dr.Hussain</option>
                </select>
              </div>
              <div className="Con-Det">
                <label>
                  Payment Type <b style={{ color: "red" }}>*</b>
                </label>
                <select style={{ width: "300px" }} name="Payment">
                  <option value="">Select</option>
                  <option value="">Cash</option>
                  <option value="">Mezan Bank</option>
                  <option value="">Allied Bank</option>
                  <option value="">Askari Bank</option>
                </select>
              </div>
            </div>
          </>
        );

      case "Patients List":
        return (
          <>
            <div className="Patients-List">
              <form>
                <div className="Pat-List">
                  <label>MRD Number</label>
                  <input
                    type="text"
                    name="MRD Number"
                    placeholder="MRD Number"
                  />
                </div>
                <div className="Pat-List">
                  <label>Registration Date</label>
                  <input
                    type="date"
                    name="Registration Date"
                    placeholder="From to"
                  />
                </div>
                <div className="Pat-List">
                  <label>Patient Name</label>
                  <input
                    type="text"
                    name="Pat.Name"
                    placeholder="Patient Name"
                  />
                </div>
                <div className="Pat-List">
                  <label>DOB</label>
                  <input type="text" name="dob" placeholder="DOB" />
                </div>
                <div className="Pat-List">
                  <label>Old file no.</label>
                  <input
                    type="text"
                    name="File Number"
                    placeholder="File Number"
                  />
                </div>
                <div className="Pat-List">
                  <label>Passport No.</label>
                  <input
                    type="text"
                    name="Passport Number"
                    placeholder="Enter Passport Number"
                  />
                </div>
                <div className="Pat-List">
                  <label>National ID</label>
                  <input
                    type="text"
                    name="National ID"
                    placeholder="Enter National ID"
                  />
                </div>
                <div className="Pat-List">
                  <label>Mobile</label>
                  <input
                    type="tel"
                    name="Mobile Number"
                    placeholder="Mobile Number"
                  />
                </div>
              </form>
            </div>
            <div className="pat-container">
              <table className="Pat-Table">
                <thead>
                  <tr>
                    <th>MRD Number</th>
                    <th>Reg.Date</th>
                    <th>Patient Name</th>
                    <th>DOB</th>
                    <th>Gender</th>
                    <th>Nationality</th>
                    <th>National ID</th>
                    <th>Mobile</th>
                    <th>Emerg.Contact Person</th>
                    <th>Emerg.Contact Number</th>
                    <th>Status</th>
                    <th>Options</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>RCC2279</td>
                    <td>2-2-2025</td>
                    <td>Imran</td>
                    <td>12-11-2000</td>
                    <td>Male</td>
                    <td>India</td>
                    <td>Yes</td>
                    <td>+918075518911</td>
                    <td>Ashiq</td>
                    <td>+918075518911</td>
                    <td>Label</td>
                    <td>
                      <PiNotePencilFill />
                      <div className="dropdown">
                        <select>
                          <option value="icon">
                            <PiNotePencilFill />
                          </option>
                          <option value="Add">
                            <MdSchedule /> Schedule Appointments
                          </option>
                          <option value="Add">
                            <MdAddBox /> Add Remarks
                          </option>
                          <option value="view">
                            <HiEye /> View Remarks
                          </option>
                          <option value="Add">
                            <MdNoteAlt /> Add Status
                          </option>
                        </select>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>RCC2279</td>
                    <td>2-2-2025</td>
                    <td>Imran</td>
                    <td>12-11-2000</td>
                    <td>Male</td>
                    <td>India</td>
                    <td>Yes</td>
                    <td>+918075518911</td>
                    <td>Ashiq</td>
                    <td>+918075518911</td>
                    <td>Label</td>
                    <td>
                      <PiNotePencilFill />
                      <div className="dropdown">
                        <select>
                          <option value="icon">
                            <PiNotePencilFill />
                          </option>
                          <option value="Add">
                            <MdSchedule /> Schedule Appointments
                          </option>
                          <option value="Add">
                            <MdAddBox /> Add Remarks
                          </option>
                          <option value="view">
                            <HiEye /> View Remarks
                          </option>
                          <option value="Add">
                            <MdNoteAlt /> Add Status
                          </option>
                        </select>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>RCC2279</td>
                    <td>2-2-2025</td>
                    <td>Imran</td>
                    <td>12-11-2000</td>
                    <td>Male</td>
                    <td>India</td>
                    <td>Yes</td>
                    <td>+918075518911</td>
                    <td>Ashiq</td>
                    <td>+918075518911</td>
                    <td>Label</td>
                    <td>
                      <PiNotePencilFill />
                      <div className="dropdown">
                        <select>
                          <option value="icon">
                            <PiNotePencilFill />
                          </option>
                          <option value="Add">
                            <MdSchedule /> Schedule Appointments
                          </option>
                          <option value="Add">
                            <MdAddBox /> Add Remarks
                          </option>
                          <option value="view">
                            <HiEye /> View Remarks
                          </option>
                          <option value="Add">
                            <MdNoteAlt /> Add Status
                          </option>
                        </select>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>RCC2279</td>
                    <td>2-2-2025</td>
                    <td>Imran</td>
                    <td>12-11-2000</td>
                    <td>Male</td>
                    <td>India</td>
                    <td>Yes</td>
                    <td>+918075518911</td>
                    <td>Ashiq</td>
                    <td>+918075518911</td>
                    <td>Label</td>
                    <td>
                      <PiNotePencilFill />
                      <div className="dropdown">
                        <select>
                          <option value="icon">
                            <PiNotePencilFill />
                          </option>
                          <option value="Add">
                            <MdSchedule /> Schedule Appointments
                          </option>
                          <option value="Add">
                            <MdAddBox /> Add Remarks
                          </option>
                          <option value="view">
                            <HiEye /> View Remarks
                          </option>
                          <option value="Add">
                            <MdNoteAlt /> Add Status
                          </option>
                        </select>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>RCC2279</td>
                    <td>2-2-2025</td>
                    <td>Imran</td>
                    <td>12-11-2000</td>
                    <td>Male</td>
                    <td>India</td>
                    <td>Yes</td>
                    <td>+918075518911</td>
                    <td>Ashiq</td>
                    <td>+918075518911</td>
                    <td>Label</td>
                    <td>
                      <PiNotePencilFill />
                      <div className="dropdown">
                        <select>
                          <option value="icon">
                            <PiNotePencilFill />
                          </option>
                          <option value="Add">
                            <MdSchedule /> Schedule Appointments
                          </option>
                          <option value="Add">
                            <MdAddBox /> Add Remarks
                          </option>
                          <option value="view">
                            <HiEye /> View Remarks
                          </option>
                          <option value="Add">
                            <MdNoteAlt /> Add Status
                          </option>
                        </select>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>RCC2279</td>
                    <td>2-2-2025</td>
                    <td>Imran</td>
                    <td>12-11-2000</td>
                    <td>Male</td>
                    <td>India</td>
                    <td>Yes</td>
                    <td>+918075518911</td>
                    <td>Ashiq</td>
                    <td>+918075518911</td>
                    <td>Label</td>
                    <td>
                      <PiNotePencilFill />
                      <div className="dropdown">
                        <select>
                          <option value="icon">
                            <PiNotePencilFill />
                          </option>
                          <option value="Add">
                            <MdSchedule /> Schedule Appointments
                          </option>
                          <option value="Add">
                            <MdAddBox /> Add Remarks
                          </option>
                          <option value="view">
                            <HiEye /> View Remarks
                          </option>
                          <option value="Add">
                            <MdNoteAlt /> Add Status
                          </option>
                        </select>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>RCC2279</td>
                    <td>2-2-2025</td>
                    <td>Imran</td>
                    <td>12-11-2000</td>
                    <td>Male</td>
                    <td>India</td>
                    <td>Yes</td>
                    <td>+918075518911</td>
                    <td>Ashiq</td>
                    <td>+918075518911</td>
                    <td>Label</td>
                    <td>
                      <PiNotePencilFill />
                      <div className="dropdown">
                        <select>
                          <option value="icon">
                            <PiNotePencilFill />
                          </option>
                          <option value="Add">
                            <MdSchedule /> Schedule Appointments
                          </option>
                          <option value="Add">
                            <MdAddBox /> Add Remarks
                          </option>
                          <option value="view">
                            <HiEye /> View Remarks
                          </option>
                          <option value="Add">
                            <MdNoteAlt /> Add Status
                          </option>
                        </select>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </>
        );

      case "Patient Visit List":
        return (
          <>
            <div className="Patients-List">
              <form>
                <div className="Pat-List">
                  <label>MRD Number</label>
                  <input
                    type="text"
                    name="MRD Number"
                    placeholder="MRD Number"
                  />
                </div>
                <div className="Pat-List">
                  <label>Consult Date</label>
                  <input
                    type="date"
                    name="Consult Date"
                    placeholder="From to"
                  />
                </div>
                <div className="Pat-List">
                  <label>Patient Name</label>
                  <input
                    type="text"
                    name="Pat.Name"
                    placeholder="Patient Name"
                  />
                </div>
                <div className="Pat-List">
                  <label>Doctor</label>
                  <select
                    style={{
                      width: "225px",
                      height: "31px",
                      marginRight: "10px",
                    }}
                    name="Doctor"
                  >
                    <option value="">Select Doctor</option>
                    <option value="">Dr.Abrar</option>
                    <option value="">Dr.Raheela</option>
                    <option value="">Dr.Aaiza</option>
                    <option value="">Dr.Hussain</option>
                  </select>
                </div>
                <div className="Pat-List">
                  <label>Insurance</label>
                  <input
                    type="text"
                    name="Insurance Number"
                    placeholder="Enter Insurance Number"
                  />
                </div>
                <div className="Pat-List">
                  <label>Mobile</label>
                  <input
                    type="tel"
                    name="Mobile Number"
                    placeholder="Mobile Number"
                  />
                </div>
              </form>
            </div>
            <div className="pat-container">
              <table className="Pat-Table">
                <thead>
                  <tr>
                    <th>SL.NO</th>
                    <th>Status</th>
                    <th>MRD Number</th>
                    <th>Consult Date</th>
                    <th>Patient Name</th>
                    <th>Doctor</th>
                    <th>Insurance</th>
                    <th>Booked By</th>
                    <th>Registered By</th>
                    <th>Options</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Visited</td>
                    <td>ACC22279</td>
                    <td>12-2-2024</td>
                    <td>Imran</td>
                    <td>Vandana Sharma</td>
                    <td>Yes</td>
                    <td>Label</td>
                    <td>Label</td>
                    <td>Label</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Visited</td>
                    <td>ACC22274</td>
                    <td>11-2-2024</td>
                    <td>Janvik</td>
                    <td>Vandana Sharma</td>
                    <td>Yes</td>
                    <td>Label</td>
                    <td>Label</td>
                    <td>Label</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Revisit</td>
                    <td>ACC2279</td>
                    <td>12-2-2024</td>
                    <td>Kasim</td>
                    <td>Vandana Sharma</td>
                    <td>No</td>
                    <td>Label</td>
                    <td>Label</td>
                    <td>Label</td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>Visited</td>
                    <td>ACC22279</td>
                    <td>12-2-2024</td>
                    <td>Aron</td>
                    <td>Vandana Sharma</td>
                    <td>No</td>
                    <td>Label</td>
                    <td>Label</td>
                    <td>Label</td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>Visited</td>
                    <td>ACC22276</td>
                    <td>23-2-2024</td>
                    <td>Varshik</td>
                    <td>Arun Gopal</td>
                    <td>No</td>
                    <td>Label</td>
                    <td>Label</td>
                    <td>Label</td>
                  </tr>
                  <tr>
                    <td>6</td>
                    <td>Visited</td>
                    <td>ACC22273</td>
                    <td>24-2-2024</td>
                    <td>Naik</td>
                    <td>Joseph Paul</td>
                    <td>Yes</td>
                    <td>Label</td>
                    <td>Label</td>
                    <td>Label</td>
                  </tr>
                  <tr>
                    <td>7</td>
                    <td>Revisit</td>
                    <td>ACC22279</td>
                    <td>21-2-2024</td>
                    <td>Manu</td>
                    <td>Vandana Sharma</td>
                    <td>No</td>
                    <td>Label</td>
                    <td>Label</td>
                    <td>Label</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </>
        );

      case "Patient Revisit List":
        return (
          <>
            <div className="Find-Details">
              <h4 style={{ fontSize: "12px", fontWeight: "bold" }}>
                Find patient details
              </h4>
              <div className="input-value">
                <input type="text" placeholder="ACC2279" />
                <b
                  style={{
                    color: "grey",
                    fontSize: "11px",
                    fontWeight: "normal",
                    marginTop: "10px",
                  }}
                >
                  Or
                </b>
                <input type="text" placeholder="Mobile number" />
                <b
                  style={{
                    color: "grey",
                    fontSize: "11px",
                    fontWeight: "normal",
                    marginTop: "10px",
                  }}
                >
                  Or
                </b>
                <input type="text" placeholder="National ID" />
              </div>
            </div>

            <div>
              <section className="Marvin-Card">
                <div className="Marvin-Header">
                  <img
                    src="src/assets/marvin.JPG"
                    alt="Marvin McKinney"
                    className="Marvin-Image"
                  />
                  <div>
                    <h1 className="Marvin-Name">Marvin McKinney</h1>
                    <p className="Marvin-id">RCC22279 | UAE</p>
                  </div>
                </div>
                <div className="Marvin-Details">
                  <span style={{ marginLeft: "-15px" }}>
                    <TbClockHour4 />
                    <b style={{ fontWeight: "400", marginLeft: "5px" }}>
                      Consulted Date
                    </b>{" "}
                    <br />
                    <small style={{ color: "grey" }}>11-12-2024</small>
                  </span>
                  <span>
                    <BsFillPersonCheckFill />
                    <b style={{ fontWeight: "400", marginLeft: "5px" }}>
                      Age & Gender
                    </b>{" "}
                    <br />
                    <small style={{ color: "grey" }}>24, Male</small>
                  </span>
                </div>
                <div class="button-container">
                  <button className="Edit">Edit Profile</button>
                  <button className="Add">Add Visit</button>
                </div>
              </section>
            </div>

            <div className="information">
              <div className="info-pat">
                <h3 style={{ marginBottom: "10px" }}>Patient Information</h3>
                <label>Patient Name</label>
                <small>Raj Kumar</small> <br />
                <label>Date of Birth</label>
                <small>11-11-2000</small> <br />
                <label>Age</label>
                <small>24</small> <br />
                <label>Gender</label>
                <small>Male</small> <br />
                <label>Nationality</label>
                <small>Indian</small> <br />
                <label>Visa Type</label>
                <small>Visitor</small> <br />
                <label>National ID</label>
                <small>xxxx</small> <br />
                <label>
                  Email ID<b style={{ color: "red", fontSize: "16px" }}>*</b>
                </label>
                <small>rajkumar@gmail.com</small>
              </div>
              <div className="info-pat">
                <h3 style={{ marginTop: "10px", marginBottom: "10px" }}>
                  Contact Details
                </h3>
                <label>
                  Phone Number (Mobile)<b>*</b>
                </label>
                <small>+971 8075518911</small> <br />
                <label>WhatsApp Mob</label>
                <small>+971 8075518911</small> <br />
                <label>Info.Source</label>
                <small>No</small> <br />
                <label>Governrates</label>
                <small>Name</small> <br />
              </div>
            </div>

            <div className="info-gen">
              <h3>General Information</h3>
              <label>Visit Type</label>
              <small>Consultation</small> <br />
              <label>MRD Number</label>
              <small>RCC22279</small> <br />
              <label>Referral Case</label>
              <small>No</small> <br />
              <label>Referred By</label>
              <small>Name</small> <br />
              <label>Reg.Date</label>
              <small>11-11-2000</small> <br />
            </div>

            <div className="info-det">
              <h3>Consultation Details</h3>
              <label>Speciality</label>
              <small>Consultation</small> <br />
              <label>Doctor Name</label>
              <small>Vardana Sharma</small> <br />
              <label>Payment Type</label>
              <small>Cash</small> <br />
              <label>Visit Date</label>
              <small>20-11-2000</small> <br />
              <label>Package Utilization</label>
              <small>No</small> <br />
            </div>

            <div className="Demo-Det">
              <h3 style={{ marginTop: "8px", marginBottom: "30px"}}>
                Patients Demographic Details
              </h3>
              <input
                style={{ width: "270px", marginLeft: "8px", marginBottom: "15px", height: "22px"}}
                type="text"
                name="Patients Demographic Details"
                placeholder="Enter insurance Card Number"
              />
              <input
                style={{ width: "270px", marginLeft: "8px", marginBottom: "10px",  height: "20px"}}
                type="text"
                name="Patients Demographic Details"
                placeholder="Enter National ID for QLM"
              />
              <div
                class="ID-checkbox"
                style={{ marginBottom: "35px", marginTop: "20px" }}
              >
                <input type="checkbox" id="National ID" />
                <label for="National ID">
                  <span class="checkmark"></span>
                  Read from National ID
                </label>
              </div>
              <div class="ID-checkbox" style={{ marginBottom: "35px" }}>
                <input type="checkbox" id="Eligibility" />
                <label for="Eligibility">
                  <span class="checkmark"></span>
                  Eligibility Check
                </label>
              </div>
              <div>
              <label style = {{fontSize: "11px", fontWeight: "bold", color: "grey", marginLeft: "10px"}}>
                  Select Insurance Plan
              </label>
              <select style={{ width: "290px", marginLeft: "8px", marginBottom: "10px", marginTop: "5px"}} name="visitType">
                <option value="">Label</option>
                <option value="Health Maintenance Organization">Health Maintenance Organization (HMO)</option>
                <option value="Preferred Provider Organization(PPO)">Preferred Provider Organization (PPO)</option>
              </select>
              </div>
              <div>
              <label style = {{fontSize: "11px", fontWeight: "bold", color: "grey", marginLeft: "10px"}}>
                  Benefits From
              </label>
              <select style={{ width: "290px", marginLeft: "8px", marginBottom: "38px", marginTop: "5px"}} name="visitType">
                <option value="">Label</option>
                <option value="Health Maintenance Organization">HMO</option>
                <option value="ppo">PPO</option>
              </select>
              </div>
            </div>

            <div className = "prev-det">
              <select name = "Previous-Visit-Details" style = {{width: "75.25%", color: "blue", marginBottom: "20px", fontWeight: "bold", fontSize: "14px", borderRadius: "8px", marginTop: "25px", height: "50px", backgroundColor: "rgb(244, 244, 237)"}}>
                <option value = "">Previous Visit Details</option>
                <option value = "">Previous Details</option>
              </select>
            </div>

            <div className="other-information">
              <div className="other-pat">
                <h3 style={{ marginBottom: "25px" }}>Other Details</h3>
                <label>Visit Type</label>
                <small>Consultation</small> <br />
                <label>MRD Number</label>
                <small>RCC22279</small> <br />
                <label>Referral Case</label>
                <small>No</small> <br />
                <label>Referred By</label>
                <small>Name</small> <br />
                <label>Reg.Date</label>
                <small>11-11-2000</small> <br />
                <label>Visit Type</label>
                <small>Consultation</small> <br />
                <label>MRD Number</label>
                <small>RCC22279</small> <br />
                <label>Referral Case</label>
                <small>No</small> <br />
                <label>Referred By</label>
                <small>Name</small> <br />
              </div>
            </div>
          </>
        );

      default:
        return null;
    }
  };

  return (
    <div className="Main-Container">
      <div className="Tabs" style={{ gap: "-5px" }}>
        {tabs.map((tab) => (
          <button
            style={{ gap: "20px" }}
            key={tab}
            className={`Tab-Button ${selectedTab === tab ? "active" : ""}`}
            onClick={() => setSelectedTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="Tab-Content">{renderContent()}</div>
    </div>
  );
}

export default GeneralInformationForm;
