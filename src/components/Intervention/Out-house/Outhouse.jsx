import React from 'react';
import { FaBuilding, FaMapMarkedAlt } from 'react-icons/fa';
import './Outhouse.css';

const Outhouse = () => {
    return (
        <div className="outhouse-container">
            <h1><FaBuilding className="main-icon" /> Out-house Facilities</h1>
            <div className="facility-grid">
                <div className="facility-card">
                    <FaMapMarkedAlt className="card-icon" />
                    <h2>Satellite Centers</h2>
                    <p>Regional training facilities</p>
                </div>
                <div className="facility-card">
                    <FaMapMarkedAlt className="card-icon" />
                    <h2>Partner Locations</h2>
                    <p>Collaborative training spaces</p>
                </div>
            </div>
        </div>
    );
};

export default Outhouse;
