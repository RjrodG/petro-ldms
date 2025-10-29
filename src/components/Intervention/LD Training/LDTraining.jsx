import React from 'react';
import { FaBookReader, FaChalkboardTeacher } from 'react-icons/fa';
import './LDTraining.css';

const LDTraining = () => {
    return (
        <div className="training-container">
            <h1><FaChalkboardTeacher className="main-icon" /> LD Training Programs</h1>
            <div className="program-grid">
                <div className="program-card">
                    <FaBookReader className="card-icon" />
                    <h2>Leadership Development</h2>
                    <p>Executive leadership and management training</p>
                </div>
                <div className="program-card">
                    <FaBookReader className="card-icon" />
                    <h2>Team Building</h2>
                    <p>Collaboration and communication workshops</p>
                </div>
            </div>
        </div>
    );
};

export default LDTraining;
