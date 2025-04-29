import React from 'react';
import { FaTools, FaLaptopCode } from 'react-icons/fa';
import './NonLDTraining.css';

const NonLDTraining = () => {
    return (
        <div className="training-container">
            <h1><FaTools className="main-icon" /> Non-LD Training Programs</h1>
            <div className="program-grid">
                <div className="program-card">
                    <FaLaptopCode className="card-icon" />
                    <h2>Technical Skills</h2>
                    <p>Software and hardware training</p>
                </div>
                <div className="program-card">
                    <FaLaptopCode className="card-icon" />
                    <h2>Compliance Training</h2>
                    <p>Regulatory and safety certifications</p>
                </div>
            </div>
        </div>
    );
};

export default NonLDTraining;
