import React from 'react';
import { FaStethoscope, FaClinicMedical, FaUserMd } from 'react-icons/fa';
import './Allied.css';

const Allied = () => {
    return (
        <div className="allied-profiles">
            <h1><FaClinicMedical className="profile-icon" /> Allied Health Professionals</h1>
            <div className="profile-grid">
                <div className="profile-card">
                    <FaUserMd className="card-icon" />
                    <h2>Physical Therapists</h2>
                    <p>Specializing in rehabilitation and mobility</p>
                </div>
                <div className="profile-card">
                    <FaStethoscope className="card-icon" />
                    <h2>Occupational Therapists</h2>
                    <p>Focusing on daily living skills</p>
                </div>
            </div>
        </div>
    );
};

export default Allied;
