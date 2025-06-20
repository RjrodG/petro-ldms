import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { RiLogoutCircleLine } from "react-icons/ri";
import {
  FaUserCircle,
  FaTachometerAlt,
  FaUsers,
  FaChevronDown,
  FaChevronUp,
  FaChalkboardTeacher,
  FaBook,
  FaBuilding,
  FaHandshake,
  FaSignOutAlt,
  FaHeartbeat,
  FaUserNurse,     
  FaClinicMedical,
  FaChartBar 
} from 'react-icons/fa';
import './Sidebar.css';

const Sidebar = () => {
  const [openIntervention, setOpenIntervention] = useState(false);
  const [openAffiliation, setOpenAffiliation] = useState(false); // NEW STATE
  const navigate = useNavigate();

  const handleSignOut = () => {
    const confirmed = window.confirm('Are you sure you want to sign out?');
    if (confirmed) {
      navigate('/');
    }
  };

  return (
    <div className="sidebar">
      <div className="sidebar-user">
        <FaUserCircle size={64} />
        <h3 className="sidebar-username">User Name</h3>
      </div>
      <ul className="sidebar-menu">
        <li>
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              isActive ? 'sidebar-link active' : 'sidebar-link'
            }
          >
            <FaChartBar  className="sidebar-icon" /> Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/employee"
            className={({ isActive }) =>
              isActive ? 'sidebar-link active' : 'sidebar-link'
            }
          >
            <FaUsers className="sidebar-icon" /> Employee
          </NavLink>
        </li>
        
        {/* Affiliation Section */}
        <li>
          <div
            className="sidebar-intervention"
            onClick={() => setOpenAffiliation(!openAffiliation)}
          >
            <span>
              <FaHandshake className="sidebar-icon" /> Affiliation
            </span>
            {openAffiliation ? <FaChevronUp /> : <FaChevronDown />}
          </div>
          {openAffiliation && (
            <ul className="sidebar-submenu">
              <li>
                <NavLink
                  to="/affiliation/allied"
                  className={({ isActive }) =>
                    isActive ? 'sidebar-link active' : 'sidebar-link'
                  }
                >
                  <FaClinicMedical className="sidebar-icon" /> Allied
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/affiliation/medical"
                  className={({ isActive }) =>
                    isActive ? 'sidebar-link active' : 'sidebar-link'
                  }
                >
                  <FaHeartbeat className="sidebar-icon" /> Medical
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/affiliation/nursing"
                  className={({ isActive }) =>
                    isActive ? 'sidebar-link active' : 'sidebar-link'
                  }
                >
                  <FaUserNurse className="sidebar-icon" /> Nursing
                </NavLink>
              </li>
            </ul>
          )}
        </li>

        {/* Intervention Section */}
        <li>
          <div
            className="sidebar-intervention"
            onClick={() => setOpenIntervention(!openIntervention)}
          >
            <span>
              <FaChalkboardTeacher className="sidebar-icon" /> Intervention
            </span>
            {openIntervention ? <FaChevronUp /> : <FaChevronDown />}
          </div>
          {openIntervention && (
            <ul className="sidebar-submenu">
              <li>
                <NavLink
                  to="/intervention/ld-training"
                  className={({ isActive }) =>
                    isActive ? 'sidebar-link active' : 'sidebar-link'
                  }
                >
                  <FaBook className="sidebar-icon" /> LD Training
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/intervention/non-ld-training"
                  className={({ isActive }) =>
                    isActive ? 'sidebar-link active' : 'sidebar-link'
                  }
                >
                  <FaBook className="sidebar-icon" /> Non-LD Training
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/intervention/out-house"
                  className={({ isActive }) =>
                    isActive ? 'sidebar-link active' : 'sidebar-link'
                  }
                >
                  <FaBuilding className="sidebar-icon" /> Out-house
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/intervention/out-house"
                  className={({ isActive }) =>
                    isActive ? 'sidebar-link active' : 'sidebar-link'
                  }
                >
                  <FaBuilding className="sidebar-icon" /> Competency
                </NavLink>
              </li>
            </ul>
          )}
        </li>
      </ul>

      <button className="signout-button-sidebar" onClick={handleSignOut}>
        <RiLogoutCircleLine className="sidebar-icon" />
      </button>
    </div>
  );
};

export default Sidebar;
