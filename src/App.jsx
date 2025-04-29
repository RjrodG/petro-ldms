import React from 'react';
import { Routes, Route } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Login from './components/Login/Login.jsx';
import DashboardLayout from './components/Dashboard/Dashboard.jsx';
import Employee from './components/Employee/Employee.jsx';
import DashboardHome from './components/Dashboard/DashboardHome.jsx';
import Allied from './components/Affiliation/Allied/Allied.jsx';
import Medical from './components/Affiliation/Medical/Medical.jsx';
import Nursing from './components/Affiliation/Nursing/Nursing.jsx';
import LDTraining from './components/Intervention/LD Training/LDTraining.jsx';
import NonLDTraining from './components/Intervention/Non-LD Training/NonLDTraining.jsx';
import Outhouse from './components/Intervention/Out-house/Outhouse.jsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      
      <Route path="/" element={<DashboardLayout />}>
        <Route path="dashboard" element={<DashboardHome />} />
        <Route path="employee" element={<Employee />} />
        
        {/* Affiliation Routes */}
        <Route path="affiliation">
          <Route path="allied" element={<Allied />} />
          <Route path="medical" element={<Medical />} />
          <Route path="nursing" element={<Nursing />} />
        </Route>

        {/* Intervention Routes */}
        <Route path="intervention">
          <Route path="ld-training" element={<LDTraining />} />
          <Route path="non-ld-training" element={<NonLDTraining />} />
          <Route path="out-house" element={<Outhouse />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
