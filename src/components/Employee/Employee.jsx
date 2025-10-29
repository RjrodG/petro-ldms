import { useEffect, useState } from 'react';
import axios from 'axios';
<<<<<<< HEAD
import EmployeeInformation from './Employee_Information';
import { FaCheckCircle, FaUserPlus, FaEye, FaEdit, FaTrash } from 'react-icons/fa';
import { RiUploadCloudFill, RiDownloadCloudFill } from 'react-icons/ri';
import EmployeeImport from './Employee_Import';
import EmployeeExport from './Employee_Export';
=======
import EmployeeInformation from './PartI_EmployeeInformation';
import { FaCheckCircle, FaUserPlus, FaEye, FaEdit, FaTrash } from 'react-icons/fa';
import { RiUploadCloudFill, RiDownloadCloudFill } from 'react-icons/ri';
import UploadModal from './UploadModal';
>>>>>>> 09bc5329e0f5128e02a03b85d002434a96b1a265


// Update your emptyEmployee to include all fields from your new query
const emptyEmployee = {
  emp_id: null,
<<<<<<< HEAD
  dep_id: '',
  prof_id: '',
  pos_id: '',
  class_id: '',
  stat_id: '',
  emp_name: '',
  emp_sg: '',
  emp_yearscurrentpos: '',
  emp_yearsplantpos: '',
  emp_sex: '',
  emp_contact: '',
=======
  emp_name: '',
  emp_position: '',
  emp_sg: '',
  emp_yearscurrentpos: '',
  emp_yearsplantpos: '',
  emp_dep: '',
  emp_sex: '',
  emp_contact: '',
  emp_classification: '',
>>>>>>> 09bc5329e0f5128e02a03b85d002434a96b1a265
  emp_yearperiod: '',
  emp_div: '',
  emp_idnumber: '',
  emp_sdatecurrentpos: '',
  emp_sdateplantpos: '',
  emp_super: '',
  emp_email: '',
<<<<<<< HEAD
  emp_dateofentry: '',
  emp_dateofbirth: '',
  with_prof: '',
=======
  emp_status: '',
  emp_dateofentry: '',
  emp_dateofbirth: '',
  with_prof: '',
  emp_prof: '',
>>>>>>> 09bc5329e0f5128e02a03b85d002434a96b1a265
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
<<<<<<< HEAD
  const [showImportModal, setShowImportModal] = useState(false);
  const [showExportModal, setShowExportModal] = useState(false);
=======
  const [showUploadModal, setShowUploadModal] = useState(false);
>>>>>>> 09bc5329e0f5128e02a03b85d002434a96b1a265
  const [showAddSuccess, setShowAddSuccess] = useState(false);
  const [showUpdateSuccess, setUShowUpdateSuccess] = useState(false);
  const [showDeleteSuccess, setShowDeleteSuccess] = useState(false);
  const [positionOptions, setPositionOptions] = useState([]);
  const [departmentOptions, setDepartmentOptions] = useState([]);
  const [classificationOptions, setClassificationOptions] = useState([]);
  const [divisionOptions, setDivisionOptions] = useState([]);
  const [statusOptions, setStatusOptions] = useState([]);
  const [supervisorOptions, setSupervisorOptions] = useState([]);
  const [professionOptions, setProfessionOptions] = useState([]);
  const [competencyOptions, setCompetencyOptions] = useState([]);
  const [description, setDescription] = useState('');

  // For modal subcomponents
  const [showCompetencyAssessment, setShowCompetencyAssessment] = useState(true);
  const [showLearningandDevelopment, setShowLearningandDevelopment] = useState(true);
<<<<<<< HEAD
  const [showInHouseTraining, setShowInHouseTraining] = useState(true);
=======
>>>>>>> 09bc5329e0f5128e02a03b85d002434a96b1a265
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

    // Fetch names from backend
    const fetchSupervisors = async () => {
      try {
        const res = await axios.get('/api/supervisors');
        setSupervisorOptions(res.data);
      } catch (err) {
        console.error('Failed to fetch supervisors:', err);
      }
    };

    // Fetch professions from backend
    const fetchProfessions = async () => {
      try {
        const res = await axios.get('/api/professions');
        setProfessionOptions(res.data);
      } catch (err) {
        console.error('Failed to fetch professions:', err);
      }
    };
    
    const fetchCompetencies = async () => {
      try {
        const res = await axios.get('/api/competencies');
        setCompetencyOptions(res.data);
      } catch (err) {
        console.error('Failed to fetch competencies:', err);
      }
    };

    // Call both fetch functions
    fetchEmployees();
    fetchPositions();
    fetchDepartments();
    fetchClassification();
    fetchDivision()
    fetchStatus();
    fetchSupervisors();
    fetchProfessions();
    fetchCompetencies();
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

    // Helper to format date string to 'YYYY-MM-DD'
  function formatDate(dateStr) {
    if (!dateStr) return "";
    // Handles both Date objects and ISO strings
    const d = new Date(dateStr);
    if (isNaN(d)) return "";
    return d.toISOString().slice(0, 10);
  }

  // Modal open/close handlers
  const openModal = async (type, employee) => {
    let emp;
    if (type === 'add') {
      emp = { ...emptyEmployee };
      setDescription('');
    } else {
      emp = { ...employee };
      if (type === 'update' || type === 'view') {
        emp.emp_sdatecurrentpos = formatDate(emp.emp_sdatecurrentpos);
        emp.emp_sdateplantpos = formatDate(emp.emp_sdateplantpos);
        emp.emp_dateofbirth = formatDate(emp.emp_dateofbirth);
        emp.emp_dateofentry = formatDate(emp.emp_dateofentry);
        emp.emp_prcexpdate = formatDate(emp.emp_prcexpdate);
        // Fetch description from backend
        try {
          const res = await axios.get(`/api/employee-ca-description/${employee.emp_id}`);
          setDescription(res.data.empc_description || '');
        } catch (err) {
          if (err.response && err.response.status === 404) {
            setDescription(''); // No description found
          } else {
            console.error('Error fetching description:', err);
          }
        }

        // Fetch strengths and gaps from backend
        try {
          const res = await axios.get(`/api/employees/${employee.emp_id}/competencies`);
          // If strengths/gaps are IDs or objects, map them to comp_title
          const mapToTitle = (arr) => {
            if (!Array.isArray(arr)) return [];
            return arr.map(item => typeof item === "string" ? item.trim() : item);
          };

          setStrengths(res.data.strengths && res.data.strengths.length ? mapToTitle(res.data.strengths) : []);
          setGaps(res.data.gaps && res.data.gaps.length ? mapToTitle(res.data.gaps) : []);
        } catch (err) {
          setStrengths(['']);
          setGaps(['']);
          console.error('Error fetching strengths and gaps:', err);
        }
        // Fetch learning and development plans from backend
        try {
          const res = await axios.get(`/api/employees/${employee.emp_id}/ldplan`);
          setPart3Sets(
            res.data.length
              ? res.data.map(plan => ({
                  developmentActivity: plan.empl_development || '',
                  expectedOutput: plan.empl_expected || '',
                  supportNeeded: plan.empl_support || '',
                  budgetSource: plan.empl_resources || '',
                  budgetNeeded: plan.empl_budget || '',
                  dateCompleted: plan.empl_datecompleteed || ''
                }))
              : [{
                  developmentActivity: '',
                  expectedOutput: '',
                  supportNeeded: '',
                  budgetSource: '',
                  budgetNeeded: '',
                  dateCompleted: ''
                }]
          );
        } catch (err) {
          setPart3Sets([{
            developmentActivity: '',
            expectedOutput: '',
            supportNeeded: '',
            budgetSource: '',
            budgetNeeded: '',
            dateCompleted: ''
          }]);
        }
      }
    }
    setModal({ type, open: true, employee: emp });
  };

  // Handle form input changes in modal
  const handleChange = (e) => {
    const { name, value } = e.target;
    let updatedEmployee = { ...modal.employee, [name]: value };

<<<<<<< HEAD
    if (name === 'pos_id') {
      const selected = positionOptions.find(pos => pos.pos_id === Number(value));
=======
    if (name === 'emp_position') {
      const selected = positionOptions.find(pos => pos.pos_name === value);
>>>>>>> 09bc5329e0f5128e02a03b85d002434a96b1a265
      console.log('Selected:', selected);
      if (selected) {
        console.log('Selected salary grade:', selected.pos_sg); // <-- This line
        updatedEmployee.emp_sg = selected.pos_sg;
      }
    }
      // If department is changed, auto-fill division
<<<<<<< HEAD
    if (name === 'dep_id') {
      const selectedDep = departmentOptions.find(dep => dep.dep_id === Number(value));
=======
    if (name === 'emp_dep') {
      const selectedDep = departmentOptions.find(dep => dep.dep_name === value);
>>>>>>> 09bc5329e0f5128e02a03b85d002434a96b1a265
      if (selectedDep) {
        updatedEmployee.emp_div = selectedDep.dep_division; // <-- fix here
      } else {
        updatedEmployee.emp_div = '';
      }
    }

    setModal({
      ...modal,
      employee: updatedEmployee
    });
  };

  // Add or update employee
  const handleSave = async (e) => 
  {
    e.preventDefault();

    // Prepare data for backend (match backend field names and order)
    const employeeData = {
      emp_id: modal.employee.emp_id, // usually null or omitted for insert
<<<<<<< HEAD
      dep_id: modal.employee.dep_id,
      pos_id: modal.employee.pos_id,
      prof_id: modal.employee.prof_id,
      class_id: modal.employee.class_id,
      stat_id: modal.employee.stat_id,
      emp_name: modal.employee.emp_name,
      emp_sg: modal.employee.emp_sg,
      emp_yearscurrentpos: modal.employee.emp_yearscurrentpos,
      emp_yearsplantpos: modal.employee.emp_yearsplantpos,
      emp_sex: modal.employee.emp_sex,
      emp_contact: modal.employee.emp_contact,
=======
      emp_name: modal.employee.emp_name,
      emp_position: modal.employee.emp_position,
      emp_sg: modal.employee.emp_sg,
      emp_yearscurrentpos: modal.employee.emp_yearscurrentpos,
      emp_yearsplantpos: modal.employee.emp_yearsplantpos,
      emp_dep: modal.employee.emp_dep,
      emp_sex: modal.employee.emp_sex,
      emp_contact: modal.employee.emp_contact,
      emp_classification: modal.employee.emp_classification,
>>>>>>> 09bc5329e0f5128e02a03b85d002434a96b1a265
      emp_yearperiod: modal.employee.emp_yearperiod,
      emp_div: modal.employee.emp_div, // make sure this matches your backend field
      emp_idnumber: modal.employee.emp_idnumber,
      emp_sdatecurrentpos: modal.employee.emp_sdatecurrentpos || null,
      emp_sdateplantpos: modal.employee.emp_sdateplantpos || null,
      emp_super: modal.employee.emp_super, // supervisor field
      emp_email: modal.employee.emp_email,
<<<<<<< HEAD
      emp_dateofbirth: modal.employee.emp_dateofbirth || null,
      emp_dateofentry: modal.employee.emp_dateofentry || null,
      with_prof: modal.employee.with_prof,
=======
      emp_status: modal.employee.emp_status,
      emp_dateofbirth: modal.employee.emp_dateofbirth || null,
      emp_dateofentry: modal.employee.emp_dateofentry || null,
      with_prof: modal.employee.with_prof,
      emp_prof: modal.employee.emp_prof,
>>>>>>> 09bc5329e0f5128e02a03b85d002434a96b1a265
      emp_cpdunits: modal.employee.emp_cpdunits,
      emp_prcid: modal.employee.emp_prcid,
      emp_prcexpdate: modal.employee.emp_prcexpdate || null,
    };

    try {
      if (modal.type === 'add') {
        // 1. Create employee and get the new emp_id
        const res = await axios.post('/api/employees', employeeData);
        const newEmpId = res.data.emp_id; // Make sure your backend returns the new emp_id

        // 2. Save description
        await axios.post('/api/employee-ca-description', {
          emp_id: newEmpId,
          empc_description: description,
        });

        // 3. Save strengths and gaps (add)
        try {
          await axios.post(`/api/employees/${newEmpId}/competencies`, {
            strengths,
            gaps
          });
        } catch (err) {
          console.error('Error saving strengths and gaps (add):', err);
        }
        // 4. Save learning and development plans (add)
        try {
          const ldplans = part3Sets.map(set => ({
            empl_id: null, // or omit if auto-increment
            empl_development: set.developmentActivity,
            empl_expected: set.expectedOutput,
            empl_support: set.supportNeeded,
            empl_budget: set.budgetNeeded,
            empl_resources: set.budgetSource,
            empl_datecompleteed: set.dateCompleted ? set.dateCompleted : null
          }));
          await axios.post(`/api/employees/${newEmpId}/ldplan`, { ldplans });
        } catch (err) {
          console.error('Error saving learning and development plans (add):', err);
        }

        setShowAddSuccess(true);
        setTimeout(() => setShowAddSuccess(false), 4000);
      } else if (modal.type === 'update') {
        await axios.put(`/api/employees/${modal.employee.emp_id}`, employeeData);

        // Check if emp_id exists in employee_ca_description
        let hasDescription = false;
        try {
          const res = await axios.get(`/api/employee-ca-description/${modal.employee.emp_id}`);
          hasDescription = !!res.data && Number(res.data.emp_id) === Number(modal.employee.emp_id);
        } catch (err) {
          if (err.response && err.response.status === 404) {
            hasDescription = false; // No description found
          } else {
            console.error('Error fetching description:', err);
          }
        }

        if (hasDescription) {
          // Update existing description only
          await axios.put(`/api/employee-ca-description/${modal.employee.emp_id}`, {
            empc_description: description,
          });
        } else {
          // Add new description only if emp_id does not exist
          await axios.post('/api/employee-ca-description', {
            emp_id: modal.employee.emp_id,
            empc_description: description,
          });
        }

        // 3. Save strengths and gaps (update)
        try {
          await axios.post(`/api/employees/${modal.employee.emp_id}/competencies`, {
            strengths,
            gaps
          });
        } catch (err) {
          console.error('Error saving strengths and gaps (update):', err);
        }
        // 4. Save learning and development plans (update)
        try {
          const ldplans = part3Sets.map(set => ({
            empl_id: null, // or omit if auto-increment
            empl_development: set.developmentActivity,
            empl_expected: set.expectedOutput,
            empl_support: set.supportNeeded,
            empl_budget: set.budgetNeeded,
            empl_resources: set.budgetSource,
            empl_datecompleteed: set.dateCompleted ? set.dateCompleted : null
          }));
          await axios.post(`/api/employees/${modal.employee.emp_id}/ldplan`, { ldplans });
        } catch (err) {
          console.error('Error saving learning and development plans (update):', err);
        }

        setUShowUpdateSuccess(true);
        setTimeout(() => setUShowUpdateSuccess(false), 4000);
      }
      // Refresh employee list after save
      await fetchEmployees();
      closeModal();
    } catch (error) {
      alert('Failed to save employee: ' + error.message);
    }
  };

  // For delete:
  const handleDelete = async (emp_id) => {
    if (window.confirm('Are you sure you want to delete this employee?')) {
      await axios.delete(`/api/employees/${emp_id}`);
      setEmployees(employees.filter(emp => emp.emp_id !== emp_id));
      setSelectedIds(selectedIds.filter(id => id !== emp_id));
      setShowDeleteSuccess(true);
      setTimeout(() => setShowDeleteSuccess(false), 4000);
    }
  };

  const closeModal = () => {
    setModal({ ...modal, open: false });
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

// Calculate pagination window
const maxPageButtons = 5;
let startPage = Math.max(1, currentPage - Math.floor(maxPageButtons / 2));
let endPage = startPage + maxPageButtons - 1;
if (endPage > totalPages) {
  endPage = totalPages;
  startPage = Math.max(1, endPage - maxPageButtons + 1);
}
const pageNumbers = [];
for (let i = startPage; i <= endPage; i++) {
  pageNumbers.push(i);
}

  return (
    <div className="employee-container">
      {/* Success Notification */}
      {showAddSuccess && (
        <div className="success-add-notif">
          <FaCheckCircle style={{ marginRight: 8, fontSize: 22 }} />
          <div>
            <strong>Success!</strong>
            <div>Employee was added successfully.</div>
          </div>
          <button className="close-btn" onClick={() => setShowAddSuccess(false)}>×</button>
        </div>
      )}

      {showUpdateSuccess && (
        <div className="success-update-notif">
          <FaCheckCircle style={{ marginRight: 8, fontSize: 22 }} />
          <div>
            <strong>Changes Saved!</strong>
            <div>Employee was updated successfully.</div>
          </div>
          <button className="close-btn" onClick={() => setShowUpdateSuccess(false)}>×</button>
        </div>
      )}

      {showDeleteSuccess && (
        <div className="success-delete-notif">
          <FaCheckCircle style={{ marginRight: 8, fontSize: 22 }} />
          <div>
            <strong>Removed!</strong>
            <div>Employee was deleted successfully.</div>
          </div>
          <button className="close-btn" onClick={() => setShowDeleteSuccess(false)}>×</button>
        </div>
      )}

      {/* Header Row */}
      <div className="employee-header-row">
<<<<<<< HEAD
        <h4>Employee List</h4>
=======
        <h2>Employee List</h2>
>>>>>>> 09bc5329e0f5128e02a03b85d002434a96b1a265
      </div>
      
      {/* Controls Row */}
      <div className="employee-controls-row">
        <div className="employee-searchbar">
          <input
            type="text"
            placeholder="Search employee..."
            value={searchQuery}
            onChange={e => {
              setSearchQuery(e.target.value.toUpperCase());
              setCurrentPage(1);
            }}
            aria-label="Search employee"
          />
          {searchQuery && (
            <button
              type="button"
              className="clear-search-btn"
              onClick={() => setSearchQuery('')}
              aria-label="Clear search"
            >
              ×
            </button>
          )}
        </div>
<<<<<<< HEAD

        <div className="fab-container">
          <button
            className="fab-main add-employee-modal-btn"
            onClick={() => openModal('add')}
            title="Add New Employees"
          >
            <FaUserPlus size={20} />
          </button>

          <button
            className="fab-sub import-employee-modal-btn"
            onClick={() => setShowImportModal(true)}
            title="Import Employees"
          >
            <RiDownloadCloudFill size={20} />
          </button>

          <button
            className="fab-sub export-employee-modal-btn"
            onClick={() => setShowExportModal(true)}
            title="Export Employees"
          >
            <RiUploadCloudFill size={20} />
          </button>
        </div>

=======
        <button className="add-employee-modal-btn" onClick={() => { openModal('add'); }}>
          Add Employee <FaUserPlus size={18} />
        </button>
        <button className="import-employee-modal-btn" onClick={() => setShowUploadModal(true)}>
          Import <RiDownloadCloudFill size={18} />
        </button>
        <button className="export-employee-modal-btn" onClick={() => setShowUploadModal(true)}>
          Export <RiUploadCloudFill size={18} />
        </button>
>>>>>>> 09bc5329e0f5128e02a03b85d002434a96b1a265
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
            <th style={{ width: 350}}>Name</th>
            <th style={{ width: 250}}>Position</th>
            <th style={{ width: 250}}>Department</th>
            <th style={{ width: 250, textAlign: 'center' }}>Actions</th>
          </tr>
        </thead>
        <tbody>
<<<<<<< HEAD
            {paginatedEmployees.map(emp => {
              const positionName =
                positionOptions.find(pos => pos.pos_id === emp.pos_id)?.pos_name || 'N/A';
              const departmentName =
                departmentOptions.find(dep => dep.dep_id === emp.dep_id)?.dep_name || 'N/A';

              return (
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
                  <td>{positionName}</td>
                  <td>{departmentName}</td>
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
              );
            })}
          </tbody>
=======
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
>>>>>>> 09bc5329e0f5128e02a03b85d002434a96b1a265
      </table>

      {/* Pagination Controls */}
      <div className="pagination">
        <button
          onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          Prev
        </button>
        {pageNumbers.map(page => (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            className={currentPage === page ? 'active' : ''}
          >
            {page}
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
          supervisorOptions={supervisorOptions}
          professionOptions={professionOptions}
          competencyOptions={competencyOptions}
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
<<<<<<< HEAD
          showInHouseTraining={showInHouseTraining}
          setShowInHouseTraining={setShowInHouseTraining}
=======
>>>>>>> 09bc5329e0f5128e02a03b85d002434a96b1a265
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
          description={description}
          setDescription={setDescription}
        />
      )}

<<<<<<< HEAD
      {/* Add the Import Modal */}
      <EmployeeImport 
        show={showImportModal}
        onClose={() => setShowImportModal(false)}
      />

      {/* Add the Export Modal */}
      <EmployeeExport 
        show={showExportModal}
        onClose={() => setShowExportModal(false)}
      />
=======
      {/* Upload Modal */}
      {showUploadModal && (
        <UploadModal
          show={showUploadModal}
          onClose={() => setShowUploadModal(false)}
        />
      )}
>>>>>>> 09bc5329e0f5128e02a03b85d002434a96b1a265
    </div>
  );
};

export function formatDateDisplay(dateStr) {
  if (!dateStr) return "N/A";
  const d = new Date(dateStr);
  if (isNaN(d)) return "N/A";
  const day = String(d.getDate()).padStart(2, '0');
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const year = d.getFullYear();
  return `${day}/${month}/${year}`;
}

export default Employee;