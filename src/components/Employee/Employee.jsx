import React, { useState, useRef } from 'react';
import { FaUserPlus, FaEye, FaEdit, FaTrash, FaPlusCircle, FaAngleDoubleDown, FaAngleDoubleUp} from 'react-icons/fa';
import { RiUploadCloudFill } from "react-icons/ri";
import './Employee.css';

const divisionOptions = [
  "Finance",
  "Medical",
  "Nursing",
  "OMCC",
  "HOPSS",
  "Not Applicable"
];

const statusOptions = [
  "Regular",
  "Temporary",
  "Job Order",
  "GIP"
];

const departmentOptions = [
  "PETRO",
  "OB",
  "Pedia",
  "OMCC"
];

const initialEmployees = [
  {
    id: 1,
    name: 'John Doe',
    position: 'Manager',
    salaryGrade: 24,
    area: 'Main Office',
    division: 'Finance',
    status: 'Regular'
  },
  {
    id: 2,
    name: 'Jane Smith',
    position: 'Developer',
    salaryGrade: 18,
    area: 'IT Department',
    division: 'OMCC',
    status: 'Job Order'
  },
  {
    id: 3,
    name: 'Michael Johnson',
    position: 'Designer',
    salaryGrade: 15,
    area: 'Creative',
    division: 'Not Applicable',
    status: 'Temporary'
  },
];

const emptyEmployee = {
  id: null,
  name: '',
  position: '',
  salaryGrade: '',
  area: '',
  division: 'Not Applicable',
  status: 'Regular',
  sex: '',
  email: '',
  contactNumber: '',
  status: '',
  classification: '',
  withProfession: '',
  profession: '',
  cpdUnits: '',
  prcIdNo: '',
  prcExpiration: ''
};

const Employee = () => {
  const [employees, setEmployees] = useState(initialEmployees);
  const [modal, setModal] = useState({ type: null, open: false, employee: emptyEmployee });
  const [searchQuery, setSearchQuery] = useState('');
  const [showCompetencyAssessment, setShowCompetencyAssessment] = useState(false);
  const [showLearningandDevelopment, setShowLearningandDevelopment] = useState(false);

  // Open modal for add, view, or update
  const openModal = (type, employee = emptyEmployee) => {
    setModal({ type, open: true, employee });
  };

  const closeModal = () => setModal({ type: null, open: false, employee: emptyEmployee });

  // Add or update employee
  const handleSave = (e) => {
    e.preventDefault();
    if (modal.type === 'add') {
      setEmployees([
        ...employees,
        { ...modal.employee, id: Date.now() },
      ]);
    } else if (modal.type === 'update') {
      setEmployees(
        employees.map(emp =>
          emp.id === modal.employee.id ? modal.employee : emp
        )
      );
    }
    closeModal();
  };

  // Delete employee
  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this employee?')) {
      setEmployees(employees.filter(emp => emp.id !== id));
    }
  };

  // Handle input changes in modal
  const handleChange = (e) => {
    const { name, value } = e.target;
    setModal({
      ...modal,
      employee: { ...modal.employee, [name]: value },
    });
  };

  const [selectedIds, setSelectedIds] = useState([]);

  // Filter employees based on search query (case-insensitive)
  const filteredEmployees = employees.filter(emp =>
    emp.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    emp.position.toLowerCase().includes(searchQuery.toLowerCase()) ||
    (emp.salaryGrade + '').includes(searchQuery) ||
    emp.area.toLowerCase().includes(searchQuery.toLowerCase()) ||
    emp.division.toLowerCase().includes(searchQuery.toLowerCase()) ||
    emp.status.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const [showUploadModal, setShowUploadModal] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const fileInputRef = useRef(null);

  // Handlers for IDP Modal
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

  // Strengths
  const addStrength = () => {
    if (strengths.length < 5) setStrengths([...strengths, '']);
  };
  const removeStrength = idx => setStrengths(strengths.filter((_, i) => i !== idx));
  const updateStrength = (idx, value) =>
    setStrengths(strengths.map((s, i) => (i === idx ? value : s)));
  // Gaps
  const addGap = () => {
    if (gaps.length < 5) setGaps([...gaps, '']);
  };
  const removeGap = idx => setGaps(gaps.filter((_, i) => i !== idx));
  const updateGap = (idx, value) =>
    setGaps(gaps.map((g, i) => (i === idx ? value : g)));

  const addPart3Set = () => {
    setPart3Sets(prevSets => {
      if (prevSets.length < 5) {
        return [
          ...prevSets,
          {
            developmentActivity: '',
            expectedOutput: '',
            supportNeeded: '',
            budgetSource: '',
            budgetNeeded: '',
            dateCompleted: ''
          }
        ];
      }
      return prevSets;
    });
  };
  
  const removePart3Set = idx => setPart3Sets(part3Sets.filter((_, i) => i !== idx));

  
  const classificationOptions = [
  "Administrative Staff (ADMIN)",
  "Department Managers / Technical Staff (DM / TS)",
  "MCC",
  "Not Applicable"
  ];

  const statusOptions = [
  "Permanent",
  "Temporary",
  "Job Order",
  "Resigned",
  "Retired",
  "Not Applicable"
];

  return (
    <div className="employee-container">
      <div className="employee-header">
        <h2>Employee List</h2>
        <div>
          <button className="add-employee-btn" onClick={() => openModal('add')}>
            <FaUserPlus size={20} />
          </button>
          <button className="upload-employee-btn" onClick={() => setShowUploadModal(true)}>
            <RiUploadCloudFill  size={20} />
          </button>
        </div>
      </div>

      {/* Search Bar */}
      <div className="employee-searchbar">
        <input
          type="text"
          placeholder="Search employee..."
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
          aria-label="Search employee"
        />
      </div>

      <div className="employee-table-responsive">
        <table className="employee-table">
          <thead>
          <tr>
            <th>
              <input
                type="checkbox"
                checked={filteredEmployees.length > 0 && selectedIds.length === filteredEmployees.length}
                onChange={e => {
                  if (e.target.checked) {
                    setSelectedIds(filteredEmployees.map(emp => emp.id));
                  } else {
                    setSelectedIds([]);
                  }
                }}
              />
            </th>
            <th>Name</th>
            <th>Position</th>
            <th>Area of Assignment</th>
            <th className="actions-column">Actions</th>
          </tr>
          </thead>
          <tbody>
            {filteredEmployees.length === 0 ? (
              <tr>
                <td colSpan="5" style={{ textAlign: 'center' }}>No employees found.</td>
              </tr>
            ) : (
              filteredEmployees.map((emp, idx) => (
                <tr key={emp.id}>
                    <td>
                      <input
                        type="checkbox"
                        checked={selectedIds.includes(emp.id)}
                        onChange={e => {
                          if (e.target.checked) {
                            setSelectedIds([...selectedIds, emp.id]);
                          } else {
                            setSelectedIds(selectedIds.filter(id => id !== emp.id));
                          }
                        }}
                      />
                    </td>
                  <td>{emp.name}</td>
                  <td>{emp.position}</td>
                  <td>{emp.area}</td>
                  <td className="actions-column">
                    <button className="action-btn view" onClick={() => openModal('view', emp)} title="View">
                      <FaEye />
                    </button>
                    <button className="action-btn update" onClick={() => openModal('update', emp)} title="Update">
                      <FaEdit />
                    </button>
                    <button className="action-btn delete" onClick={() => handleDelete(emp.id)} title="Delete">
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>


      {/* Modal for Add, Update, View Employee*/}
      {modal.open && (
        <div className="employee-modal-backdrop" onClick={closeModal}>
          <div className="employee-modal" onClick={e => e.stopPropagation()}>
            <h3>
              {modal.type === 'add' && 'Add Employee'}
              {modal.type === 'update' && 'Update Employee'}
              {modal.type === 'view' && 'Employee Details'}
            </h3>
            <form onSubmit={handleSave}>
              <div className="employee-info-section">
                <div className="section-header">PART I. EMPLOYEE INFORMATION</div>
                <table className="employee-info-table">
                  <tbody>
                    <tr>
                      <td><strong>a. Name (Last, First, M.I., Ext)</strong></td>
                      <td>
                        {modal.type === 'view' ? (
                          modal.employee.name || 'N/A'
                        ) : (
                          <input
                            type="text"
                            name="name"
                            value={modal.employee.name}
                            onChange={handleChange}
                            required
                          />
                        )}
                      </td>
                      <td><strong>j. Year Period</strong></td>
                      <td>
                        {modal.type === 'view' ? (
                          modal.employee.yearPeriod || 'N/A'
                        ) : (
                          <input
                            type="text"
                            name="yearPeriod"
                            value={modal.employee.yearPeriod}
                            onChange={handleChange}
                            required
                          />
                        )}
                      </td>
                    </tr>
                    <tr>
                      <td><strong>b. Current Position</strong></td>
                      <td>
                        {modal.type === 'view' ? (
                          modal.employee.position || 'N/A'
                        ) : (
                          <input
                            type="text"
                            name="position"
                            value={modal.employee.position}
                            onChange={handleChange}
                            required
                          />
                        )}
                      </td>
                      <td><strong>k. Division</strong></td>
                      <td>
                        {modal.type === 'view' ? (
                          modal.employee.division || 'N/A'
                        ) : (
                          <select
                            name="division"
                            value={modal.employee.division}
                            onChange={handleChange}
                            required
                          >
                            <option value="">Select Division</option>
                            {divisionOptions.map(option => (
                              <option key={option} value={option}>{option}</option>
                            ))}
                          </select>
                        )}
                      </td>
                    </tr>
                    <tr>
                      <td><strong>c. Salary Grade</strong></td>
                      <td>
                        {modal.type === 'view' ? (
                          modal.employee.salaryGrade || 'N/A'
                        ) : (
                          <input
                            type="number"
                            name="salaryGrade"
                            value={modal.employee.salaryGrade}
                            onChange={handleChange}
                            min="1"
                            required
                          />
                        )}
                      </td>
                      <td><strong>l. ID Number</strong></td>
                      <td>
                        {modal.type === 'view' ? (
                          modal.employee.idNumber || 'N/A'
                        ) : (
                          <input
                            type="text"
                            name="idNumber"
                            value={modal.employee.idNumber}
                            onChange={handleChange}
                          />
                        )}
                      </td>
                    </tr>
                    <tr>
                      <td><strong>d. Years in Current Position</strong></td>
                      <td>
                        {modal.type === 'view' ? (
                          modal.employee.yearsCurrentPosition || 'N/A'
                        ) : (
                          <input
                            type="number"
                            name="yearsCurrentPosition"
                            value={modal.employee.yearsCurrentPosition}
                            onChange={handleChange}
                          />
                        )}
                      </td>
                      <td><strong>m. Start Date</strong></td>
                      <td>
                        {modal.type === 'view' ? (
                          modal.employee.startDate || 'N/A'
                        ) : (
                          <input
                            type="date"
                            name="startDate"
                            value={modal.employee.startDate}
                            onChange={handleChange}
                          />
                        )}
                      </td>
                    </tr>
                    <tr>
                      <td><strong>e. Years in ZCMC occupying a Plantilla Position</strong></td>
                      <td>
                        {modal.type === 'view' ? (
                          modal.employee.yearsPlantilla || 'N/A'
                        ) : (
                          <input
                            type="number"
                            name="yearsPlantilla"
                            value={modal.employee.yearsPlantilla}
                            onChange={handleChange}
                          />
                        )}
                      </td>
                      <td><strong>n. Start Date for Occupying a Plantilla</strong></td>
                      <td>
                        {modal.type === 'view' ? (
                          modal.employee.startDatePlantilla || 'N/A'
                        ) : (
                          <input
                            type="date"
                            name="startDatePlantilla"
                            value={modal.employee.startDatePlantilla}
                            onChange={handleChange}
                          />
                        )}
                      </td>
                    </tr>
                    <tr>
                      <td><strong>f. Office/Dept./Unit</strong></td>
                      <td>
                        {modal.type === 'view' ? (
                          modal.employee.office || 'N/A'
                        ) : (
                          <select
                            name="office"
                            value={modal.employee.office}
                            onChange={handleChange}
                            required
                          >
                            <option value="">Select Office/Dept/Unit</option>
                            {departmentOptions.map(option => (
                              <option key={option} value={option}>{option}</option>
                            ))}
                          </select>
                        )}
                      </td>
                      <td><strong>o. Immediate Supervisor’s Name (Last, First, M.I., Ext)</strong></td>
                      <td>
                        {modal.type === 'view' ? (
                          modal.employee.supervisorName || 'N/A'
                        ) : (
                          <input
                            type="text"
                            name="supervisorName"
                            value={modal.employee.supervisorName}
                            onChange={handleChange}
                          />
                        )}
                      </td>
                    </tr>
                    <tr>
                      <td><strong>g. Sex</strong></td>
                      <td style={{ verticalAlign: 'middle' }}>
                        {modal.type === 'view' ? (
                          modal.employee.sex || 'N/A'
                        ) : (
                          <div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
                            <label style={{ display: 'flex', alignItems: 'center', gap: 6, margin: 0 }}>
                              <input
                                type="radio"
                                name="sex"
                                value="Male"
                                checked={modal.employee.sex === "Male"}
                                onChange={handleChange}
                                style={{ margin: 0 }}
                              />
                              Male
                            </label>
                            <label style={{ display: 'flex', alignItems: 'center', gap: 6, margin: 0 }}>
                              <input
                                type="radio"
                                name="sex"
                                value="Female"
                                checked={modal.employee.sex === "Female"}
                                onChange={handleChange}
                                style={{ margin: 0 }}
                              />
                              Female
                            </label>
                          </div>
                        )}
                      </td>
                      <td><strong>p. Email Address</strong></td>
                      <td style={{ verticalAlign: 'middle' }}>
                        {modal.type === 'view' ? (
                          modal.employee.email || 'N/A'
                        ) : (
                          <input
                            type="email"
                            name="email"
                            value={modal.employee.email}
                            onChange={handleChange}
                            style={{ width: '100%' }}
                          />
                        )}
                      </td>
                    </tr>

                    <tr>
                      <td><strong>h. Contact Number</strong></td>
                      <td>
                        {modal.type === 'view' ? (
                          modal.employee.contactNumber || 'N/A'
                        ) : (
                          <input
                            type="text"
                            name="contactNumber"
                            value={modal.employee.contactNumber}
                            onChange={handleChange}
                            required
                          />
                        )}
                      </td>
                      <td><strong>q. Status</strong></td>
                      <td>
                        {modal.type === 'view' ? (
                          modal.employee.status || 'N/A'
                        ) : (
                          <select
                            name="status"
                            value={modal.employee.status}
                            onChange={handleChange}
                            required
                          >
                            <option value="">Select Status</option>
                            {statusOptions.map(option => (
                              <option key={option} value={option}>{option}</option>
                            ))}
                          </select>
                        )}
                      </td>
                    </tr>

                    <tr>
                      <td><strong>i. Classification</strong></td>
                      <td style={{ verticalAlign: 'middle' }}>
                        {modal.type === 'view' ? (
                          modal.employee.classification || 'N/A'
                        ) : (
                          <select
                            name="classification"
                            value={modal.employee.classification}
                            onChange={handleChange}
                            required
                            style={{ width: '100%' }}
                          >
                            <option value="">Select Classification</option>
                            {classificationOptions.map(option => (
                              <option key={option} value={option}>{option}</option>
                            ))}
                          </select>
                        )}
                      </td>
                      <td><strong>r. With Profession?</strong></td>
                      <td style={{ verticalAlign: 'middle' }}>
                        {modal.type === 'view' ? (
                          modal.employee.withProfession || 'N/A'
                        ) : (
                          <div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
                            <label style={{ display: 'flex', alignItems: 'center', gap: 6, margin: 0 }}>
                              <input
                                type="radio"
                                name="withProfession"
                                value="Yes"
                                checked={modal.employee.withProfession === "Yes"}
                                onChange={handleChange}
                                style={{ margin: 0 }}
                              />
                              Yes
                            </label>
                            <label style={{ display: 'flex', alignItems: 'center', gap: 6, margin: 0 }}>
                              <input
                                type="radio"
                                name="withProfession"
                                value="No"
                                checked={modal.employee.withProfession === "No"}
                                onChange={handleChange}
                                style={{ margin: 0 }}
                              />
                              No
                            </label>
                          </div>
                        )}
                      </td>
                    </tr>
                    
                    {/* WITH PROFESSION FIELDS */}
                    {(modal.employee.withProfession === "Yes" || modal.type === 'view') && (
                      <>
                        <tr>
                          <td><strong>• Profession</strong></td>
                          <td>
                            {modal.type === 'view' ? (
                              modal.employee.profession || 'N/A'
                            ) : (
                              <select
                                name="profession"
                                value={modal.employee.profession}
                                onChange={handleChange}
                                required>
                                <option value="">Select Profession</option>
                                <option value="Nurse">Nurse</option>
                                <option value="Doctor">Doctor</option>
                                <option value="Engineer">Engineer</option>
                                {/* Add more as needed */}
                              </select>
                            )}
                          </td>
                          <td><strong>• CPD Units</strong></td>
                          <td>
                            {modal.type === 'view' ? (
                              modal.employee.cpdUnits || 'N/A'
                            ) : (
                              <input
                                type="number"
                                name="cpdUnits"
                                value={modal.employee.cpdUnits}
                                onChange={handleChange}
                                min="0"
                              />
                            )}
                          </td>
                        </tr>
                        <tr>
                          <td><strong>• PRC ID No.</strong></td>
                          <td>
                            {modal.type === 'view' ? (
                              modal.employee.prcIdNo || 'N/A'
                            ) : (
                              <input
                                type="text"
                                name="prcIdNo"
                                value={modal.employee.prcIdNo}
                                onChange={handleChange}
                              />
                            )}
                          </td>
                          <td><strong>• PRC Expiration Date</strong></td>
                          <td>
                            {modal.type === 'view' ? (
                              modal.employee.prcExpiration || 'N/A'
                            ) : (
                              <input
                                type="date"
                                name="prcExpiration"
                                value={modal.employee.prcExpiration}
                                onChange={handleChange}
                              />
                            )}
                          </td>
                        </tr>
                      </>
                    )}
                    
                  </tbody>
                </table>
              </div>

              <div>
                <div className="section-header-p2">PART II. COMPETENCY ASSESSMENT 
                  <button type="button" className='employee-extend-p2-btn'  onClick={() => setShowCompetencyAssessment(v => !v)}>{showCompetencyAssessment ? <FaAngleDoubleUp /> : <FaAngleDoubleDown />}</button>
                </div>

                <div className={`competency-animated-section${showCompetencyAssessment ? ' open' : ''}`}>
                  {/* PART II. COMPETENCY ASSESSMENT */}
                  {showCompetencyAssessment && (
                    <>
                      <label style={{marginTop: '5px'}}>
                        a. Description/Critical Incident/Comment
                        <textarea className="idp-input" rows={2} />
                      </label>
                      <div className="idp-row" style={{display: 'flex', gap: 24}}>
                        {/* Strengths */}
                        <div className="idp-col" style={{flex: 1}}>
                          <div style={{ display: 'flex', alignItems: 'center', marginBottom: 4 }}>
                            <span style={{ flex: 1 }}>b. Area/s of Strength</span>
                            {strengths.length < 5 && (
                              <button
                                type="button"
                                className='idp-p2-add-btn'
                                onClick={addStrength}
                              > +
                              </button>
                            )}
                          </div>
                          {strengths.map((value, idx) => (
                            <div className="idp-list" key={idx} style={{display: 'flex', alignItems: 'center', marginBottom: 4}}>
                              <input
                                className="idp-input"
                                value={value}
                                onChange={e => updateStrength(idx, e.target.value)}
                              />
                              <button
                                type="button"
                                className="idp-p2-remove-btn"
                                onClick={() => removeStrength(idx)}
                                style={{marginLeft: 4}}
                              >×</button>
                            </div>
                          ))}
                        </div>

                        {/* Gaps */}
                        <div className="idp-col" style={{flex: 1}}>
                          <div style={{ display: 'flex', alignItems: 'center', marginBottom: 4 }}>
                            <span style={{ flex: 1 }}>c. Area/s for Growth or Performance Gap</span>
                            {gaps.length < 5 && (
                              <button
                                type="button"
                                className='idp-p2-add-btn'
                                onClick={addGap}
                              > +
                              </button>
                            )}
                          </div>
                          {gaps.map((value, idx) => (
                            <div className="idp-list" key={idx} style={{display: 'flex', alignItems: 'center', marginBottom: 4}}>
                              <input
                                className="idp-input"
                                value={value}
                                onChange={e => updateGap(idx, e.target.value)}
                              />
                              <button
                                type="button"
                                className="idp-p2-remove-btn"
                                onClick={() => removeGap(idx)}
                                style={{marginLeft: 4}}
                              >×</button>
                            </div>
                          ))}
                        </div>
                      </div>
                    </>
                  )}
                </div>

                <div className="section-header-p3">PART III. LEARNING AND DEVELOPMENT PLAN
                  <button type="button" className='employee-extend-p3-btn' onClick={() => setShowLearningandDevelopment(v => !v)}>{showLearningandDevelopment ? <FaAngleDoubleUp /> : <FaAngleDoubleDown />}</button>
                </div>

                <div className={`competency-animated-section${showLearningandDevelopment ? ' open' : ''}`}>
                  {/* PART III. LEARNING AND DEVELOPMENT */}
                  {showLearningandDevelopment && (
                    <>
                      {part3Sets.map((set, setIdx) => (
                        <div className="part3-set"
                          style={{
                            display: 'grid',
                            gridTemplateColumns: '1fr 1fr auto',
                            gridTemplateRows: 'repeat(6, auto)', // 4 rows: label, input, label, input
                            columnGap: 24,
                            rowGap: 0,
                            background: '#fafbfc',
                            border: '1px solid #ccc',
                            padding: 10,
                            marginBottom: 10,
                            marginTop: 10,
                            alignItems: 'start'
                          }}
                        >
                          {/* Row 1: labels */}
                          <label style={{ gridColumn: 1, gridRow: 1, marginBottom: 4, marginTop: 4 }}>
                            a. Development Activity or Proposed Learning and Development Intervention/s (LDIs) (Formal Learning1, Non-Formal Learning2, Informal Learning3)
                          </label>
                          <label style={{ gridColumn: 2, gridRow: 1, marginBottom: 4, marginTop: 4  }}>
                            d. Budget Source (i.e. PETRO, Unit, Scholarship, etc.)
                          </label>
                          {/* Row 2: inputs */}
                          <input
                            type="text"
                            style={{ gridColumn: 1, gridRow: 2, width: '100%' }}
                            value={set.developmentActivity}
                            onChange={e => {updatePart3Field(setIdx, 'developmentActivity', e.target.value)}}
                          />
                          <input
                            type="text"
                            style={{ gridColumn: 2, gridRow: 2, width: '100%' }}
                            value={set.budgetSource}
                            onChange={e => updatePart3Field(setIdx, 'budgetSource', e.target.value)}
                          />
                          {/* Row 3: labels */}
                          <label style={{ gridColumn: 1, gridRow: 3, marginBottom: 4, marginTop: 4  }}>
                            b. Expected Output/s
                          </label>
                          <label style={{ gridColumn: 2, gridRow: 3, marginBottom: 4, marginTop: 4  }}>
                            e. Budget/Resources Needed (In-Service Scholarship, Registration Fee, Manpower, time, energy, cost, etc.)
                          </label>
                          {/* Row 4: inputs */}
                          <input
                            type="text"
                            style={{ gridColumn: 1, gridRow: 4, width: '100%' }}
                            value={set.expectedOutput}
                            onChange={e => updatePart3Field(setIdx, 'expectedOutput', e.target.value)}
                          />
                          <input
                            type="text"
                            style={{ gridColumn: 2, gridRow: 4, width: '100%' }}
                            value={set.budgetNeeded}
                            onChange={e => updatePart3Field(setIdx, 'budgetNeeded', e.target.value)}
                          />
                          {/* Row 5: labels */}
                          <label style={{ gridColumn: 1, gridRow: 5, marginBottom: 4, marginTop: 4  }}>
                            c. Support Needed (OT, OB, OL, Study Leave, etc.)
                          </label>
                          <label style={{ gridColumn: 2, gridRow: 5, marginBottom: 4, marginTop: 4  }}>
                            f. Date Completed/ Accomplished
                          </label>
                          {/* Row 6: inputs */}
                          <input
                            type="text"
                            style={{ gridColumn: 1, gridRow: 6, width: '100%' }}
                            value={set.supportNeeded}
                            onChange={e => updatePart3Field(setIdx, 'supportNeeded', e.target.value)}
                          />
                          <input
                            type="date"
                            style={{ gridColumn: 2, gridRow: 6, width: '100%' }}
                            value={set.dateCompleted}
                            onChange={e => updatePart3Field(setIdx, 'dateCompleted', e.target.value)}
                          />
                          {/* Remove button */}
                          <div style={{
                            gridColumn: 3,
                            gridRow: '1 / span 6',
                            display: 'flex',
                            alignItems: 'flex-start',
                            marginLeft: 8
                          }}>
                          <button
                            type="button"
                            className="idp-p3-remove-btn"
                            onClick={() => removePart3Set(setIdx)}
                            aria-label="Remove set"
                            style={{
                              lineHeight: 1,
                              background: 'transparent',
                              border: 'none',
                              color: 'red',
                              cursor: 'pointer',
                              padding: 0,
                              marginTop: 4
                            }}
                          >
                            ×
                          </button>
                        </div>
                      </div>
                      ))}
                    </>
                  )}
                  {part3Sets.length < 5 && (
                    <button type="button" className='idp-p3-add-btn' onClick={addPart3Set}> + </button>
                  )}
                </div>
              </div>

              <div className="modal-actions">
                <button className="employee-close-btn" type="button" onClick={closeModal}>Close</button>
                {modal.type !== 'view' && <button className='employee-save-btn' type="submit">Save</button>}
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Modal for Upload */}
      {showUploadModal && (
        <div className="employee-modal-backdrop" onClick={closeModal}>
            <div className="employee-modal employee-upload-modal">
            <div className="employee-upload-modal-title">
              Upload Employee List
            </div>
            <div className="employee-upload-icon">
              <RiUploadCloudFill  size={20} />
            </div>
            <label htmlFor="employee-upload" className="employee-upload-label">
              <span style={{ display: 'inline-flex', alignItems: 'center', color: '#4bb6fd' }}>
                <FaPlusCircle size={20} style={{ marginRight: '8px' }} />
                {selectedFile ? selectedFile.name : 'Select File'}
              </span>
              <input
                id="employee-upload"
                type="file"
                className="employee-upload-input"
                ref={fileInputRef}
                onChange={e => setSelectedFile(e.target.files[0])}
              />
            </label>
            <div className="employee-upload-actions">
              <button type="button" className="employee-close-btn" onClick={() => {setShowUploadModal(false); setSelectedFile(null); }}>
                Close
              </button>
              <button type="button" className="employee-upload-btn" onClick={() => {setShowUploadModal(false); setSelectedFile(null); }} disabled={!selectedFile} >
                Upload
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default Employee;
