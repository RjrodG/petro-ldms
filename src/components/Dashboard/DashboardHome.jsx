import React from 'react';
import './DashboardHome.css';
import logo1 from "../../assets/img/login-logo-zcmc.png";
import logo2 from "../../assets/img/login-logo-petro.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faChartBar, faUserGraduate, faPercentage, faFileLines } from '@fortawesome/free-solid-svg-icons';
import { Bar, Doughnut, Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Tooltip,
  Legend,
  LineElement,
  PointElement
);

const DashboardHome = () => {
    // Dummy Data
    const totalEmployees = 150;
    const conductedTrainings = 30;
    const staffWithLDI = 120;
    const cumulativePercentage = (staffWithLDI / totalEmployees) * 100;

    // Staff with LDI per month (Line chart)
    const ldiPerMonth = {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      datasets: [
        {
          label: 'Staff with LDI',
          data: [10, 12, 8, 15, 14, 9, 11, 13, 12, 16, 14, 10],
          fill: false,
          borderColor: '#00bf63',
          backgroundColor: '#00bf63',
          tension: 0.3,
          pointRadius: 5,
          pointHoverRadius: 7,
        },
      ],
    };

    // Percentage per Division (Doughnut chart)
    const divisionPercentages = {
      labels: ['Finance', 'HOPSS', 'Medical', 'Nursing', 'OMCC'],
      datasets: [
        {
          label: 'Percentage',
          data: [20, 15, 30, 25, 10],
          backgroundColor: [
            '#00bf63',
            '#ffc107',
            '#007bff',
            '#dc3545',
            '#6f42c1',
          ],
        },
      ],
    };

    // Training Conducted data (Grouped Bar chart)
    const trainingConductedData = {
      labels: ['LD', 'Non-LD'],
      datasets: [
        {
          label: 'Proposed',
          data: [20, 15],
          backgroundColor: '#007bff',
          stack: 'Stack 0',
        },
        {
          label: 'Actual',
          data: [18, 12],
          backgroundColor: '#28a745',
          stack: 'Stack 0',
        },
        {
          label: 'Percentage (%)',
          data: [90, 80],
          backgroundColor: '#ffc107',
          type: 'line',
          yAxisID: 'percentage',
          borderColor: '#ffc107',
          borderWidth: 2,
          fill: false,
          tension: 0.3,
          pointRadius: 5,
          pointHoverRadius: 7,
        },
      ],
    };

    const trainingConductedOptions = {
      responsive: true,
      interaction: {
        mode: 'index',
        intersect: false,
      },
      scales: {
        y: {
          beginAtZero: true,
          position: 'left',
          title: {
            display: true,
            text: 'Count',
          },
          stacked: true,
        },
        percentage: {
          type: 'linear',
          position: 'right',
          beginAtZero: true,
          max: 100,
          ticks: {
            callback: value => value + '%',
          },
          grid: {
            drawOnChartArea: false,
          },
          title: {
            display: true,
            text: 'Percentage (%)',
          },
        },
      },
      plugins: {
        legend: {
          position: 'top',
        },
        tooltip: {
          enabled: true,
          mode: 'index',
          intersect: false,
          callbacks: {
            label: context => {
              if (context.dataset.label === 'Percentage (%)') {
                return `${context.dataset.label}: ${context.parsed.y}%`;
              }
              return `${context.dataset.label}: ${context.parsed.y}`;
            },
          },
        },
      },
    };

    // Handler for the Open button
    const handleOpenClick = () => {
        alert('Opening ZCMC Training Personnel Order 2025...');
    };

    return (
        <div className="dashboard-welcome">
            <div className="dashboard-header">
                <div className="dashboard-logos">
                    <img src={logo1} alt="Logo 1" className="dashboard-logo" />
                    <img src={logo2} alt="Logo 2" className="dashboard-logo" />
                </div>
                <div className="dashboard-title">
                    <h3>Zamboanga City Medical Center PETRO</h3>
                    <span className="dashboard-subtitle">
                        Learning and Development Management System
                    </span>
                </div>
            </div>
            
            <div className="dashboard-cards-grid">
                {/* Row 1 */}
                <div className="card card-wide">
                    {/* <FontAwesomeIcon icon={faFileLines} size="2x" className="card-icon" /> */}
                    <h3>ZCMC Training Personnel Order</h3>
                    <button className="po-open-button" onClick={handleOpenClick}>Open</button>
                </div>
                <div className="card card-small">
                    <FontAwesomeIcon icon={faUsers} size="2x" className="card-icon" />
                    <h4>Total Employees</h4>
                    <p>{totalEmployees}</p>
                </div>
                <div className="card card-small">
                    <FontAwesomeIcon icon={faChartBar} size="2x" className="card-icon" />
                    <h4>Conducted Trainings</h4>
                    <p>{conductedTrainings}</p>
                </div>

                {/* Row 2 */}
                <div className="card card-wide">
                    <h4>Staff with LDI per Month</h4>
                    <Line data={ldiPerMonth} options={{ responsive: true, plugins: { legend: { display: false } } }} />
                </div>
                <div className="card card-small">
                    <FontAwesomeIcon icon={faUserGraduate} size="2x" className="card-icon" />
                    <h4>Staff with LDI</h4>
                    <p>{staffWithLDI}</p>
                </div>
                <div className="card card-small">
                    <FontAwesomeIcon icon={faPercentage} size="2x" className="card-icon" />
                    <h4>Cumulative Percentage</h4>
                    <p>{cumulativePercentage.toFixed(2)}%</p>
                </div>

                {/* Row 3 */}
                <div className="card card-xwide">
                    <h4>Percentage per Division</h4>
                    <Doughnut data={divisionPercentages} options={{ responsive: true }} />
                </div>
                <div className="card card-xwide">
                    <h4>Training Conducted</h4>
                    <Bar data={trainingConductedData} options={trainingConductedOptions} />
                </div>
            </div>

        </div>
    );
};

export default DashboardHome;
