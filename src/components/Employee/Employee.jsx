import React, { useState } from 'react';
import { FaUserPlus, FaEye, FaEdit, FaTrash } from 'react-icons/fa';
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
  status: 'Regular'
};

const Employee = () => {
  const [employees, setEmployees] = useState(initialEmployees);
  const [modal, setModal] = useState({ type: null, open: false, employee: emptyEmployee });
  const [searchQuery, setSearchQuery] = useState('');

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

  // Filter employees based on search query (case-insensitive)
  const filteredEmployees = employees.filter(emp =>
    emp.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    emp.position.toLowerCase().includes(searchQuery.toLowerCase()) ||
    (emp.salaryGrade + '').includes(searchQuery) ||
    emp.area.toLowerCase().includes(searchQuery.toLowerCase()) ||
    emp.division.toLowerCase().includes(searchQuery.toLowerCase()) ||
    emp.status.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="employee-container">
      <div className="employee-header">
        <h2>Employee List</h2>
        <div>
          <button className="add-employee-btn" onClick={() => openModal('add')}>
            <FaUserPlus size={20} />
          </button>
          <button className="upload-employee-btn" onClick={() => openModal('')}>
            <RiUploadCloudFill  size={20} />
          </button>
        </div>
      </div>

      {/* Search Bar */}
      <div className="employee-searchbar">
        <input
          type="text"
          placeholder="Search employees..."
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
          aria-label="Search employees"
        />
      </div>

      <div className="employee-table-responsive">
        <table className="employee-table">
          <thead>
            <tr>
              <th>#</th>
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
                  <td>{idx + 1}</td>
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


      {/* Modal for Add, Update, View */}
      {modal.open && (
        <div className="employee-modal-backdrop" onClick={closeModal}>
          <div className="employee-modal" onClick={e => e.stopPropagation()}>
            <h3>
              {modal.type === 'add' && 'Add Employee'}
              {modal.type === 'update' && 'Update Employee'}
              {modal.type === 'view' && 'Employee Details'}
            </h3>
            <form onSubmit={handleSave}>
              <label>
                Name:
                <input
                  type="text"
                  name="name"
                  value={modal.employee.name}
                  onChange={handleChange}
                  disabled={modal.type === 'view'}
                  required
                />
              </label>
              <label>
                Position:
                <input
                  type="text"
                  name="position"
                  value={modal.employee.position}
                  onChange={handleChange}
                  disabled={modal.type === 'view'}
                  required
                />
              </label>
              <label>
                Salary Grade:
                <input
                  type="number"
                  name="salaryGrade"
                  value={modal.employee.salaryGrade}
                  onChange={handleChange}
                  disabled={modal.type === 'view'}
                  required
                  min="1"
                />
              </label>
              <label>
                Area of Assignment:
                <input
                  type="text"
                  name="area"
                  value={modal.employee.area}
                  onChange={handleChange}
                  disabled={modal.type === 'view'}
                  required
                />
              </label>
              <label>
                Division:
                <select
                  name="division"
                  value={modal.employee.division}
                  onChange={handleChange}
                  disabled={modal.type === 'view'}
                  required
                >
                  {divisionOptions.map(option => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </label>
              <label>
                Status:
                <select
                  name="status"
                  value={modal.employee.status}
                  onChange={handleChange}
                  disabled={modal.type === 'view'}
                  required
                >
                  {statusOptions.map(option => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </label>
              <div className="modal-actions">
                <button type="button" onClick={closeModal}>Close</button>
                {modal.type !== 'view' && <button type="submit">Save</button>}
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Employee;
