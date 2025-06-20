import { useEffect, useState } from 'react';
import axios from 'axios';
import EmployeeInformation from './PartI_EmployeeInformation';
import { FaCheckCircle, FaUserPlus, FaEye, FaEdit, FaTrash } from 'react-icons/fa';
import { RiUploadCloudFill, RiDownloadCloudFill } from 'react-icons/ri';
import UploadModal from './UploadModal';

// Update your emptyEmployee to include all fields from your new query
const emptyEmployee = {
  emp_id: null,
  emp_name: '',
  emp_position: '',
  emp_sg: '',
  emp_yearscurrentpos: '',
  emp_yearsplantpos: '',
  emp_dep: '',
  emp_sex: '',
  emp_contact: '',
  emp_classification: '',
  emp_yearperiod: '',
  emp_idnumber: '',
  emp_sdatecurrentpos: '',
  emp_sdateplantpos: '',
  emp_email: '',
  emp_status: '',
  emp_dateofentry: '',
  emp_dateofbirth: '',
  with_prof: '',
  emp_prof: '',
  emp_prcid: '',
  emp_prcexpdate: '',
  emp_cpdunits: ''
};

const Employee = (props) => {
  // State hooks
  const [employees, setEmployees] = useState([]);
  const [modal, setModal] = useState({ type: null, open: false, employee: emptyEmployee });
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedIds, setSelectedIds] = useState([]);
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [positionOptions, setPositionOptions] = useState([]);
  const [departmentOptions, setDepartmentOptions] = useState([]);
  const [classificationOptions, setClassificationOptions] = useState([]);
  const [divisionOptions, setDivisionOptions] = useState([]);
  const [statusOptions, setStatusOptions] = useState([]);

  // For modal subcomponents
  const [showCompetencyAssessment, setShowCompetencyAssessment] = useState(true);
  const [showLearningandDevelopment, setShowLearningandDevelopment] = useState(true);
  const [strengths, setStrengths] = useState(['']);
  const [gaps, setGaps] = useState(['']);
  const [part3Sets, setPart3Sets] = useState([
    {
      developmentActivity: '',
      expectedOutput: '',
      supportNeeded: '',
      budgetSource: '',
      budgetNeeded: '',
      dateCompleted: ''
    }
  ]);

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 14;

  // Fetch employees from backend on mount
  // Employee.jsx

  useEffect(() => {
    // Fetch employees from backend
    const fetchEmployees = async () => {
      try {
        const response = await axios.get('/api/employees');
        setEmployees(response.data);
      } catch (error) {
        console.error('Error fetching employees:', error);
      }
    };

    // Fetch positions from backend
    const fetchPositions = async () => {
      try {
        const res = await axios.get('/api/positions');
        setPositionOptions(res.data);
      } catch (err) {
        console.error('Failed to fetch positions:', err);
      }
    };

    // Fetch departments from backend
    const fetchDepartments = async () => {
      try {
        const res = await axios.get('/api/departments');
        setDepartmentOptions(res.data);
      } catch (err) {
        console.error('Failed to fetch departments:', err);
      }
    };

    // Fetch classification from backend
    const fetchClassification = async () => {
      try {
        const res = await axios.get('/api/classifications');
        setClassificationOptions(res.data);
      } catch (err) {
        console.error('Failed to fetch classifications:', err);
      }
    };

    // Fetch division from backend
    const fetchDivision = async () => {
      try {
        const res = await axios.get('/api/divisions');
        setDivisionOptions(res.data);
      } catch (err) {
        console.error('Failed to fetch divisions:', err);
      }
    };

    // Fetch status from backend
    const fetchStatus = async () => {
      try {
        const res = await axios.get('/api/status');
        setStatusOptions(res.data);
      } catch (err) {
        console.error('Failed to fetch status:', err);
      }
    };

    // Call both fetch functions
    fetchEmployees();
    fetchPositions();
    fetchDepartments();
    fetchClassification();
    fetchDivision()
    fetchStatus();
  }, []);

  // Fetch employees helper
  const fetchEmployees = async () => {
    try {
      const response = await axios.get('/api/employees');
      setEmployees(response.data);
    } catch (error) {
      console.error('Error fetching employees:', error);
    }
  };

  // Modal open/close handlers
  const openModal = (type, employee = emptyEmployee) => {
    setModal({ type, open: true, employee });
  };
  const closeModal = () => setModal({ type: null, open: false, employee: emptyEmployee });

  // Handle form input changes in modal
const handleChange = (e) => {
  const { name, value } = e.target;
  let updatedEmployee = { ...modal.employee, [name]: value };

  if (name === 'emp_position') {
    const selected = positionOptions.find(pos => pos.pos_name === value);
    console.log('Selected:', selected);
    if (selected) {
      console.log('Selected salary grade:', selected.salary_grade); // <-- This line
      updatedEmployee.emp_sg = selected.pos_sg;
    }
  }

  setModal({
    ...modal,
    employee: updatedEmployee
  });
};

  // Add or update employee
  const handleSave = async (e) => {
    e.preventDefault();

    // Prepare data for backend (match backend field names)
    const employeeData = {
      emp_name: modal.employee.emp_name,
      emp_position: modal.employee.emp_position,
      emp_sg: modal.employee.emp_sg,
      emp_yearscurrentpos: modal.employee.emp_yearscurrentpos,
      emp_yearsplantpos: modal.employee.emp_yearsplantpos,
      emp_dep: modal.employee.emp_dep,
      emp_sex: modal.employee.emp_sex,
      emp_contact: modal.employee.emp_contact,
      emp_classification: modal.employee.emp_classification,
      emp_yearperiod: modal.employee.emp_yearperiod,
      emp_idnumber: modal.employee.emp_idnumber,
      emp_sdatecurrentpos: modal.employee.emp_sdatecurrentpos,
      emp_sdateplantpos: modal.employee.emp_sdateplantpos,
      emp_email: modal.employee.emp_email,
      emp_status: modal.employee.emp_status,
      emp_dateofentry: modal.employee.emp_dateofentry,
      emp_dateofbirth: modal.employee.emp_dateofbirth,
      with_prof: modal.employee.with_prof,
      emp_prof: modal.employee.emp_prof,
      emp_prcid: modal.employee.emp_prcid,
      emp_prcexpdate: modal.employee.emp_prcexpdate,
      emp_cpdunits: modal.employee.emp_cpdunits
    };

    try {
      if (modal.type === 'add') {
        await axios.post('/api/employees', employeeData);
      } else if (modal.type === 'update') {
        await axios.put(`/api/employees/${modal.employee.emp_id}`, employeeData);
      }
      // Refresh employee list after save
      await fetchEmployees();
      closeModal();
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 4000);
    } catch (error) {
      alert('Failed to save employee: ' + error.message);
    }
  };

  // Delete employee
  const handleDelete = async (emp_id) => {
    if (window.confirm('Are you sure you want to delete this employee?')) {
      await axios.delete(`/api/employees/${emp_id}`);
      setEmployees(employees.filter(emp => emp.emp_id !== emp_id));
      setSelectedIds(selectedIds.filter(id => id !== emp_id));
    }
  };

  // Select all checkbox handler
  const allSelected =
    employees.length > 0 &&
    employees.every(emp => selectedIds.includes(emp.emp_id));

  const handleSelectAll = () => {
    if (allSelected) {
      setSelectedIds([]);
    } else {
      setSelectedIds(employees.map(emp => emp.emp_id));
    }
  };

  const handleCheckbox = (emp_id) => {
    setSelectedIds(selectedIds.includes(emp_id)
      ? selectedIds.filter(id => id !== emp_id)
      : [...selectedIds, emp_id]
    );
  };

  // Filter employees by search query (searches all employees)
  const filteredEmployees = employees.filter(emp =>
    emp.emp_name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Pagination logic
  const totalPages = Math.ceil(filteredEmployees.length / rowsPerPage);
  const paginatedEmployees = filteredEmployees.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  return (
    <div className="employee-container">
      {/* Success Notification */}
      {showSuccess && (
        <div className="success-notification">
          <FaCheckCircle style={{ marginRight: 8, fontSize: 22 }} />
          <div>
            <strong>Success!</strong>
            <div>Employee was added/updated successfully.</div>
          </div>
          <button className="close-btn" onClick={() => setShowSuccess(false)}>×</button>
        </div>
      )}

      {/* Header and Add/Upload Buttons */}
      <div className="employee-header">
        <h2>Employee List</h2>
        <div>
          <button className="add-employee-modal-btn" onClick={() => openModal('add')}>
            Add Employee <FaUserPlus size={18} />
          </button>
          <button className="import-employee-modal-btn" onClick={() => setShowUploadModal(true)}>
            Import <RiDownloadCloudFill size={18} />
          </button>
          <button className="export-employee-modal-btn" onClick={() => setShowUploadModal(true)}>
            Export <RiUploadCloudFill size={18} />
          </button>
        </div>
      </div>

      {/* Search Bar */}
      <div className="employee-searchbar">
        <input
          type="text"
          placeholder="Search employee..."
          value={searchQuery}
          onChange={e => {
            setSearchQuery(e.target.value);
            setCurrentPage(1); // Reset to first page on new search
          }}
          aria-label="Search employee"
        />
      </div>

      {/* Employee Table */}
      <table className="employee-table">
        <thead>
          <tr>
            <th>
              <input
                type="checkbox"
                checked={allSelected}
                onChange={handleSelectAll}
                aria-label="Select all"
              />
            </th>
            <th>Name</th>
            <th>Position</th>
            <th>Department</th>
            <th style={{ width: 120, textAlign: 'center' }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {paginatedEmployees.map(emp => (
            <tr key={emp.emp_id}>
              <td>
                <input
                  type="checkbox"
                  checked={selectedIds.includes(emp.emp_id)}
                  onChange={() => handleCheckbox(emp.emp_id)}
                  aria-label={`Select ${emp.emp_name}`}
                />
              </td>
              <td>{emp.emp_name}</td>
              <td>{emp.emp_position}</td>
              <td>{emp.emp_dep}</td>
              <td style={{ textAlign: 'center', whiteSpace: 'nowrap' }}>
                <button
                  className="action-btn view"
                  title="View"
                  onClick={() => openModal('view', emp)}
                >
                  <FaEye />
                </button>
                <button
                  className="action-btn update"
                  title="Edit"
                  onClick={() => openModal('update', emp)}
                >
                  <FaEdit />
                </button>
                <button
                  className="action-btn delete"
                  title="Delete"
                  onClick={() => handleDelete(emp.emp_id)}
                >
                  <FaTrash />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination Controls */}
      <div className="pagination">
        <button
          onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          Prev
        </button>
        {[...Array(totalPages)].map((_, idx) => (
          <button
            key={idx + 1}
            onClick={() => setCurrentPage(idx + 1)}
            className={currentPage === idx + 1 ? 'active' : ''}
          >
            {idx + 1}
          </button>
        ))}
        <button
          onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>

      {/* Employee Modal */}

      {modal.open && (
        <EmployeeInformation
          modal={modal}
          closeModal={closeModal}
          handleSave={handleSave}
          handleChange={handleChange}
          positionOptions={positionOptions}
          divisionOptions={divisionOptions}
          departmentOptions={departmentOptions}
          classificationOptions={classificationOptions}
          statusOptions={statusOptions}
          strengths={strengths}
          addStrength={() => setStrengths([...strengths, ''])}
          removeStrength={idx => setStrengths(strengths.filter((_, i) => i !== idx))}
          updateStrength={(idx, value) => setStrengths(strengths.map((s, i) => (i === idx ? value : s)))}
          gaps={gaps}
          addGap={() => setGaps([...gaps, ''])}
          removeGap={idx => setGaps(gaps.filter((_, i) => i !== idx))}
          updateGap={(idx, value) => setGaps(gaps.map((g, i) => (i === idx ? value : g)))}
          showCompetencyAssessment={showCompetencyAssessment}
          setShowCompetencyAssessment={setShowCompetencyAssessment}
          showLearningandDevelopment={showLearningandDevelopment}
          setShowLearningandDevelopment={setShowLearningandDevelopment}
          part3Sets={part3Sets}
          addPart3Set={() => setPart3Sets([...part3Sets, {
            developmentActivity: '',
            expectedOutput: '',
            supportNeeded: '',
            budgetSource: '',
            budgetNeeded: '',
            dateCompleted: ''
          }])}
          removePart3Set={idx => setPart3Sets(part3Sets.filter((_, i) => i !== idx))}
          updatePart3Field={(idx, field, value) =>
            setPart3Sets(part3Sets.map((set, i) =>
              i === idx ? { ...set, [field]: value } : set
            ))
          }
        />
      )}

      {/* Upload Modal */}
      {showUploadModal && (
        <UploadModal
          show={showUploadModal}
          onClose={() => setShowUploadModal(false)}
        />
      )}
    </div>
  );
};

export default Employee;