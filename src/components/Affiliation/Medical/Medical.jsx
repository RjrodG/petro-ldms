import React from 'react';
import { FaHeartbeat, FaBriefcaseMedical, FaMicroscope } from 'react-icons/fa';
import './Medical.css';

const Medical = () => {
    return (
        <div className="medical-profiles">
            <h1><FaHeartbeat className="profile-icon" /> Medical Professionals</h1>
            <div className="profile-grid">
                <div className="profile-card">
                    <FaBriefcaseMedical className="card-icon" />
                    <h2>Doctors</h2>
                    <p>General practitioners and specialists</p>
                </div>
                <div className="profile-card">
                    <FaMicroscope className="card-icon" />
                    <h2>Pathologists</h2>
                    <p>Lab diagnostics and research</p>
                </div>
            </div>
        </div>
    );
};

export default Medical;
