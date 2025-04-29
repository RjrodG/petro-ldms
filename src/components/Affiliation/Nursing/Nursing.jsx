import React from 'react';
import { FaUserNurse, FaProcedures, FaSyringe } from 'react-icons/fa';
import './Nursing.css';

const Nursing = () => {
    return (
        <div className="nursing-profiles">
            <h1><FaUserNurse className="profile-icon" /> Nursing Staff</h1>
            <div className="profile-grid">
                <div className="profile-card">
                    <FaProcedures className="card-icon" />
                    <h2>Registered Nurses</h2>
                    <p>Patient care and treatment</p>
                </div>
                <div className="profile-card">
                    <FaSyringe className="card-icon" />
                    <h2>Nurse Practitioners</h2>
                    <p>Advanced clinical practice</p>
                </div>
            </div>
        </div>
    );
};

export default Nursing;
